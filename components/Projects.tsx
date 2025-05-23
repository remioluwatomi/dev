import { useEffect, useState } from "react"
import ProjectWrapper, { ProjectsWrapperProps } from "./ProjectsWrapper"
import fetchData from "@/utils/fetchData"

const Projects:React.FC = () => {
    const [projects, setProjects] = useState<ProjectsWrapperProps[]>([])

    useEffect(()=> {
        const fetchProjects = async ()=> {
            try {
                const data = await fetchData<ProjectsWrapperProps>("/projects.json")
            
                setProjects(data)
            }catch(error) {
                // not handling this error gracefully.. since i'm fetching static json.
                console.error(`Failed to fetch data: ${error}`)
            }
        }

        fetchProjects()
    }, [])

    return <>
        <div className="project-container md:grid md:grid-cols-2 gap-4 py-4">
        {projects.map(project => 
            <ProjectWrapper {...project} key={project.description + project.links + project.title}/>)
        }
        </div>
    </>
}

export default Projects