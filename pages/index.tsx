import Experience from "@/components/Experience";
import ExperienceBox from "@/components/ExperienceBox";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main>
      <div className="name-title-container">

        <Introduction />

        <nav className="desktop-nav-links flex flex-col">
          <a href="" className="desktop-nav-link">about</a>
          <a href="" className="desktop-nav-link">experience</a>
          <a href="" className="desktop-nav-link">projects</a>
        </nav>

        <Socials />

      </div>

      <div className="experience-container">
        <ExperienceBox boxHeading="Skills">
          <Skills />
        </ExperienceBox>

        <ExperienceBox boxHeading="Experience">
          <Experience />
        </ExperienceBox>
      </div>

      <ExperienceBox boxHeading="Projects"
      >
        <Projects />
      </ExperienceBox>

    </main>
  );
}
