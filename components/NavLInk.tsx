import { RefObject } from "react"

interface NavLinkProps {
    href?: string,
    refTarget?: RefObject<HTMLDivElement | null>
    className?: string,
    linkName: string,
}

const NavLink: React.FC<NavLinkProps> = ({href, className, linkName, refTarget}:NavLinkProps) => {
    return <a {...(href ? {href: href} : {})}  className={`desktop-nav-link cursor-pointer bold-text w-[fit-content] flex items-center gap-x-2 ${className ? className : ""}`} {...(refTarget ? {onClick: (e)=> {
        e?.preventDefault()
        refTarget.current?.scrollIntoView({behavior: "smooth"})
    }} : {})}>
        <div className="hl-bg nav-link-hl w-[1.5rem] h-[1px] transition-all duration-300 ease-in-out"></div>
        <span className="nav-link-text">{linkName}</span>
    </a>
    
    
}

export default NavLink