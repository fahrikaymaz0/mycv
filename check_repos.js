import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

async function getRepos() {
    try {
        const { data } = await octokit.repos.listForUser({
            username: 'fahrikaymaz0',
            sort: 'updated',
            per_page: 10
        });
        console.log(JSON.stringify(data.map(r => ({ name: r.name, html_url: r.html_url, description: r.description })), null, 2));
    } catch (err) {
        console.error(err);
    }
}

getRepos();
