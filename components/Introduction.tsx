const Introduction:React.FC = () => {
  return <>
      <h1 className="name text-[1.8rem] font-[600] md:text-[3rem]">Remi Oluwatomi</h1>

<div className="work-desc flex items-center gap-2 mt-[.1rem] mb-[1rem]">
<span className="text-[1rem] md:text-[1.2rem]">Software Engineer</span> 
{/* <span>Solution Architect</span> */}
</div>

<div className="about-me ">

<p className="lg:mt-4">I am a 
  <span className="bold-text"> Software Engineer </span>
  and 
  <span className="bold-text"> DevOps professional </span> 
  with 3+ years of experience in designing, building and optimizing scalable systems
  </p>

<p className="mt-2 mb-6">I have a proven track record of delivering high-quality, efficient, and maintainable code, and I believe the best way to learn is by 
  <span className="bold-text"> building and solving real-world problems</span>
.</p>

</div>
  </>
}

export default Introduction;