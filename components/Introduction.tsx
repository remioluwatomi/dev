const Introduction:React.FC = () => {
    return <>
        <h1 className="name">Remi Oluwatomi</h1>

{/* <div className="work-desc flex items-center gap-2">
  <span>Software Engineer</span> |
  <span>DevOps</span> |
  <span>Solution Architect</span>
</div> */}

<div className="about-me">
  
  <p>Hi there, I'm Remi Oluwatomi! 👋</p>
  <p>I am a 
    <span className="bold-text"> Software Engineer </span>
    {/* and  */}
    {/* <span className="bold-text"> DevOps professional </span>  */}
    with 3+ years of experience in designing, building and optimizing scalable systems</p>

  <p>I have a proven track record of delivering high-quality, efficient, and maintainable code, and I believe the best way to learn is by 
    <span className="bold-text"> building and solving real-world problems</span>
  .</p>

</div>
    </>
}

export default Introduction;