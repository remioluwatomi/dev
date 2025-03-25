import { ReactNode } from "react";

interface ExperienceBoxProps {
    boxHeading: string,
    children: ReactNode
}

const ExperienceBox:React.FC<ExperienceBoxProps> = ({boxHeading, children})=>{
    return <>
        <div className="experience-box">
        <h3>{boxHeading}</h3>
        {children}
        </div>
    </>
}

export default ExperienceBox;