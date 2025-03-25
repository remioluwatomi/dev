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
        <div className="experience-wrapper">
        <div className="experience-date">
            <span className="experience-duration">{start} - {end}</span>
           
        </div>
        <div className="experience-header-description">
            <h3 className="title">{title}, {company}</h3>
            <ul className="experience-description">
                {description.map((bulletPoint, i) => {
                    return <li key={bulletPoint+i}>
                    → {bulletPoint}
                    </li>
                })}
            </ul>
        </div>

    </div>
    </>
}

export default ExperienceWrapper;