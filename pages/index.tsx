import Experience from "@/components/Experience";
import ExperienceBox from "@/components/ExperienceBox";
import Introduction from "@/components/Introduction";
import NavLink from "@/components/NavLInk";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { useRef } from "react";

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  return (
    <div className="page-wrapper px-6 py-4 pt-10">
      <main>
        <div className="lg:flex lg:px-[7%] lg:gap-x-8">
          <div className="name-title-container lg:w-[50%] lg:sticky top-0 lg:h-[100dvh] lg:pt-[7rem] lg:pb-[4rem] flex flex-col overflow-auto hide-scrollbar">

            <Introduction />

            <nav className="desktop-nav-links hidden lg:flex flex-col lg:gap-y-[.4rem] lg:mt-8">
              <NavLink linkName="experience" refTarget={experienceRef} />
              <NavLink linkName="projects" refTarget={projectRef}/>
              <NavLink linkName="résumé" href="https://drive.google.com/file/d/1zBbS73OAx8CToH6C1scvBuhKzitp2Kgs/view" />
            </nav>

            <Socials className="lg:items-end flex-grow" />

            </div>

            <div className="experience-container lg:w-[50%] lg:py-6 lg:bg-[#202327]/50 lg:px-8">
            <ExperienceBox boxHeading="Skills" id="skills">
              <Skills />
            </ExperienceBox>

            <ExperienceBox boxHeading="Experience" id="experience" refTarget={experienceRef}>
              <Experience />
            </ExperienceBox>

            <ExperienceBox boxHeading="Projects" id="projects" refTarget={projectRef}>
              <Projects />
            </ExperienceBox>
            </div>
          </div>

      

    </main>
    </div>
  );
}
