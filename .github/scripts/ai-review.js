import { Octokit } from "@octokit/rest";
import fs from "fs";
import OpenAI from "openai";

// Variáveis de ambiente
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const pull_number =
	process.env.PR_NUMBER ||
	JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH)).pull_request
		.number;

// Octokit (para comentar no PR)
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// OpenAI (GitHub Models)
const openai = new OpenAI({
	baseURL: "https://models.github.ai/v1",
	apiKey: process.env.GH_MODELS_TOKEN, // seu PAT
});

async function run() {
	// 1. Obter diffs do PR
	const { data: files } = await octokit.pulls.listFiles({
		owner,
		repo,
		pull_number,
	});

	let changes = "";
	for (const file of files) {
		if (file.patch) {
			changes += `\n---\nArquivo: ${file.filename}\n${file.patch}`;
		}
	}

	// 2. Mandar para IA
	const response = await openai.chat.completions.create({
		model: "gpt-4.1-mini",
		messages: [
			{
				role: "system",
				content:
					"Você é um revisor de código. Analise mudanças em Pull Requests e dê feedback técnico, claro e direto.",
			},
			{
				role: "user",
				content: `Aqui estão as mudanças no código:\n${changes}`,
			},
		],
	});

	const review = response.choices[0].message.content;

	// 3. Comentar no PR
	await octokit.issues.createComment({
		owner,
		repo,
		issue_number: pull_number,
		body: `🤖 **AI Code Review**:\n\n${review}`,
	});
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
