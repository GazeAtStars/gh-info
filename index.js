import fetch from 'node-fetch';

const name = process.argv.slice(2)[0]
const req = await fetch(`https://api.github.com/users/${name}`)
const data = await req.json()
console.log(`${name}'s public info: 
    Name: ${data.name || "N/A"}
    Company: ${data.company || "N/A"}
    Website: ${data.blog || "N/A"}
    Location: ${data.location || "N/A"}
    Email: ${data.email || "N/A"}
    Bio: ${data.bio || "N/A"}
    Hireable? : ${data.hireable || "N/A"}
    Twitter Handle: ${data.twitter_username || "N/A"}
    Profile URL: ${data.html_url}
    Last Updated At: ${new Date(data.updated_at).toDateString()}
    Type: ${data.type}
    Public Repos: ${data.public_repos}
    Public Gists: ${data.public_gists}
    Followers Count: ${data.followers}
    Following Count: ${data.following}
    Account Created At: ${new Date(data.created_at).toDateString()}`)

