export default function isGithubPage(){
    return typeof window !== "undefined" && window.location.hostname.includes("github.io")
}