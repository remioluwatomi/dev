import "../styles/skills.css";

const Skills: React.FC = () => {
    return <>
        <ul className="skills-ul mt-2">
            <li className="skills-li skills-pl">
              <span className="skill-class">Languages: </span>
              <span className="skill-type">JavaScript, TypeScript, Python, C#, PHP</span></li>
            <li className="skills-li">
              <span className="skill-class">Frameworks: </span>
              <span className="skill-type">React, Nodejs, Nextjs, FastApi, Laravel, ASP.NET Core, ASP.NET MVC, Razor Pages, Blazor, GraphQL,Wordpress, Webflow</span>
            </li>
            <li className="skills-li">
              <span className="skill-class">Databases: </span>
              <span className="skill-type">MySQL, PostgreSQL, Microsoft SQL Server, MongoDB, Redis</span>
            </li>
            <li className="skills-li">
              <span className="skill-class">Tooling: </span>
              <span className="skill-type">Linux, Docker, Git, AWS</span>
            </li>
          </ul>
    </>
}


export default Skills;