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
        <div className="project-box bg-[#16181b] px-4 py-4 mb-4 md:mb-0 hover:outline-1 hover:outline-dashed hover:outline-gray-500">
            <div className="project-links-box flex justify-end gap-3">
                {
                    projectLinks.map((projectLink, i) => 
                        <a href={projectLink.url} key={projectLink.url+ projectLink.platform + `${i}`} className="project-link" target="_blank">
                            {projectLink.platform === "Github" ? <GithubIcon /> : <LinkIcon />}
                        </a>)
                }
            </div>
            <h3 className="project-title text-[1.15rem] font-[600] text-170">{title}</h3>
            <p className="project-description text-[.93rem] my-2">
                {description}
            </p>

            <ul className="project-stacks mt-4 flex gap-2 flex-wrap">
                {stack.map((techStack, i) =>
                    <li key={`${techStack} + ${i}`} className="tech-stack text-[.85rem] rounded-[.3rem] bg-[#24272b] py-2 px-4">
                        {techStack}
                    </li>
                )}
            </ul>
        </div>
    </>
}

export default ProjectWrapper