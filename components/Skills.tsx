const Skills: React.FC = () => {
    return <>
        <ul className="skills-ul">
            <li className="skills-li skills-pl">
              <span className="skill-type">Programming Languages: </span>
              JavaScript, TypeScript, Python, C#,  PHP</li>
            <li className="skills-li">
              <span className="skill-type">Frameworks: </span>
            React, Nodejs, Nextjs, FastApi, Laravel, ASP.NET Core, ASP.NET MVC, Razor Pages, Blazor, GraphQL,Wordpress, Webflow
            </li>
            <li className="skills-li">
              <span className="skil-type">Databases: </span>
              MySQL, PostgreSQL, Microsoft SQL Server, MongoDB, Redis
            </li>
            <li className="skills-li">
              <span className="skill-type">Tooling: </span>
              Linux, Docker, Git, AWS,</li>
          </ul>
    </>
}


export default Skills;