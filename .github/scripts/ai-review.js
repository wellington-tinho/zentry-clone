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
	apiKey: process.env.GITHUB_TOKEN,
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
					/\.(js|jsx|ts|tsx|html|json|yaml|yml)$/i.test(file.filename),
			)
			.map((file) => `\n---\nArquivo: ${file.filename}\n${file.patch}`)
			.join("");

		if (!changes) {
			console.log("📝 No relevant changes found");
			return;
		}

		// Análise com IA
		const response = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "system",
					content:
						"Você é um revisor de código. Analise as mudanças e forneça feedback técnico construtivo sobre qualidade, bugs, performance e boas práticas.",
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
		await octokit.issues.createComment({
			owner,
			repo,
			issue_number: pull_number,
			body: `## 🤖 AI Code Review\n\n${response.choices[0].message.content}\n\n---\n*Review automático*`,
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
