import { ReactNode, RefObject } from "react";

interface ExperienceBoxProps {
    boxHeading: string,
    className?: string,
    id?: string,
    refTarget?: RefObject<HTMLDivElement | null>
    children: ReactNode
}

const ExperienceBox:React.FC<ExperienceBoxProps> = ({id, boxHeading, children, className, refTarget})=>{
    return <>
        <div {...(id ? {id: id} : {})} className={`experience-box mt-8 ${className && className}`} ref={refTarget}>
        <div className="experience-box-title flex items-center gap-2">
            <h3 className="text-170">{boxHeading}</h3>
            <div className="experience-box-hl h-[1px] flex-1 hl-bg"></div>
        </div>
        {children}
        </div>
    </>
}

export default ExperienceBox;