import { Octokit } from "@octokit/rest";
import fs from "fs";
import OpenAI from "openai";

// Configuração
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const pull_number =
	process.env.PR_NUMBER ||
	JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH)).pull_request
		.number;

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAI({
	baseURL: "https://models.inference.ai.azure.com",
	apiKey: process.env.GH_MODELS_TOKEN,
});

async function run() {
	try {
		console.log(`🔍 Reviewing PR #${pull_number}`);

		// Obter diffs
		const { data: files } = await octokit.pulls.listFiles({
			owner,
			repo,
			pull_number,
		});

		// Filtrar arquivos relevantes
		const changes = files
			.filter(
				(file) =>
					file.patch &&
					/\.(js|jsx|ts|tsx|html)$/i.test(file.filename) &&
					file.status !== "deleted",
			)
			.map(
				(file) =>
					`\n---\nArquivo: ${file.filename} (${file.status})\n${file.patch}`,
			)
			.join("");

		console.log(`📁 Analisando ${files.length} arquivos modificados`);

		if (!changes) {
			console.log("📝 No relevant changes found");
			return;
		}

		console.log("🔄 Gerando novo AI Review...");

		// Análise com IA
		const response = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "system",
					content:
						"Você é um revisor de código senior. Revise as mudanças, aponte possíveis problemas de lógica ou bugs com referência de linhas, e forneça feedback técnico conciso com recomendações e boas práticas.",
				},
				{
					role: "user",
					content: `Analise estas mudanças:\n${changes}`,
				},
			],
			max_tokens: 1500,
			temperature: 0.3,
		});

		// Comentar no PR
		const timestamp = new Date().toLocaleString("pt-BR");
		await octokit.issues.createComment({
			owner,
			repo,
			issue_number: pull_number,
			body: `## 🤖 AI Code Review (Atualizado)\n\n${response.choices[0].message.content}\n\n---\n*Review automático - ${timestamp}*\n*Este review é gerado a cada alteração no código*`,
		});

		console.log("✅ Review completed");
	} catch (error) {
		console.error("❌ Error:", error.message);

		// Comentar erro no PR
		try {
			await octokit.issues.createComment({
				owner,
				repo,
				issue_number: pull_number,
				body: `## ❌ Erro no AI Review\n\n\`\`\`\n${error.message}\n\`\`\``,
			});
		} catch (commentError) {
			console.error("Error commenting:", commentError.message);
		}

		process.exit(1);
	}
}

run();
