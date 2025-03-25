import GithubIcon from "./GithubIcon"
import LinkIcon from "./LinkIcon"

export type ProjectLink = {
    url: string,
    platform: string

}
export interface ProjectsWrapperProps {
    title : string,
    description: string,
    stack: string[]
    links: ProjectLink[]
}

const ProjectWrapper: React.FC<ProjectsWrapperProps> = ({
    title, description, stack, links:projectLinks
}: ProjectsWrapperProps)=>{
    return <>
        <div className="project-box">
            <div className="project-links-box flex justify-left">
                {
                    projectLinks.map((projectLink, i) => 
                        <a href={projectLink.url} className="project-link" target="_blank">
                            {projectLink.platform === "Github" ? <GithubIcon /> : <LinkIcon />}
                        </a>)
                }
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">
                {description}
            </p>

            <ul className="project-stacks flex gap-2">
                {stack.map(techStack =>
                    <li className="tech-stack">
                        {techStack}
                    </li>
                )}
            </ul>
        </div>
    </>
}

export default ProjectWrapper