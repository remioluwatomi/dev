export interface ExperienceWrapperProps {
    start: string,
    end: string,
    title: string,
    company: string,
    description: string[]
    
}

const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({
    start, end, title, company, description
}: ExperienceWrapperProps)=> {
    return <>
        <div className="experience-wrapper md:flex gap-8 lg:block">
        <div className="experience-date md:w-[25%] lg:w-[100%]">
            <span className="experience-duration text-170">{start} - {end}</span>  
        </div>
        <div className="experience-header-description md:w-[75%] lg:w-[100%]">
            <h3 className="title text-170">{title}, {company}</h3>
            <ul className="experience-description mt-[.75rem]">
                {description.map((bulletPoint, i) => {
                    return <li className="my-2 text-[.98rem]" key={bulletPoint+i}>
                    → {bulletPoint}
                    </li>
                })}
            </ul>
        </div>

    </div>
    </>
}

export default ExperienceWrapper;