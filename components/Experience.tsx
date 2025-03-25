import { useEffect, useState } from "react"
import ExperienceWrapper, { ExperienceWrapperProps } from "./ExperienceWrapper"
import fetchData from "@/utils/fetchData"


const Experience:React.FC = () => {
    const [experiences, setExperiences] = useState<ExperienceWrapperProps[]>([])

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const data = await fetchData<ExperienceWrapperProps>("/experience.json")
            
                setExperiences(data)
            }catch(error) {
                // not handling this error gracefully.. since i'm fetching static json.
                console.error(`Failed to fetch data: ${error}`)
            }
        }

        fetchExperience();
    })

    return <>
    {experiences.map((experience) => 
        <ExperienceWrapper {...experience} key={experience.company + experience.end + experience.start + experience.title}/>)}
    </>
}

export default Experience