export default function Home() {
  return (
    <>
      <div className="Section bg-[#35374B] ">
        <section className="Profile flex justify-center">
        <div className="Image-Section-Profile"></div></section>

        <section className="Introducion flex justify-center flex-col items-center text-lg mt-3">
          <h1 className="text-[#cacae6]">Introduction</h1>
         <h1 className="text-[#868282]">Name: <span className="text-white">Zarak Khan</span></h1>
        </section>

        <section className="grid grid-cols-2 justify-center   mt-7 text-lg w-[80%] mx-auto border-b py-9 border-t ">
        <section className="academic  flex flex-col gap-3 ">
      <h1 className="text-[#cacae6]">Academic Background</h1>
      <ul className="p-3 flex flex-col gap-3">
        <li className="text-[#868282]">Major: <span className="text-white">Bs Software engineering</span></li>
        <li className="text-[#868282]">University: <span className="text-white">The University of Faisalabad</span></li>
        <li className="text-[#868282]">Current Year of Study: <span className="text-white">Final Year Student</span></li>
      </ul>
        </section>
        <section className="interest flex flex-col gap-3">
          <h1 className="text-[#cacae6]">Tech Interests</h1>
          <ul className="text-white grid grid-cols-4 gap-4 ">
    <li>React Native</li>
    <li>MERN stack </li>
    <li>Next.js</li>
    <li>Machine Learning</li>
    <li>Deep Learning</li>
    <li>Data Science</li>
    <li>PyTorch</li>
    <li>Django</li>
    <li>Python</li> 
    <li>Web Automation</li>
</ul>
        </section>
        </section>


        <section className="grid grid-cols-2 w-[80%] mx-auto mt-10 ">
          <section className="Hobby-section flex flex-col gap-5">
            <h1 className="text-[#cacae6] text-center text-lg">
Hobbies and Interests</h1>
<ul className="text-white grid grid-cols-2 gap-3">
  <li>Coding</li>
  <li>Learning new Technology</li>
  <li>Building Projects</li>
</ul>
          </section>

          <section className="Apreciation-section flex flex-col gap-5">
            <h1 className="text-[#cacae6] text-center text-lg">Thanks for this internship with Internee.pk:</h1>
          <p className="text-white">
          I want to express my sincere gratitude for the opportunity to be part of the internship program at internee.pk as a Django developer. Thank you for providing me with the platform to enhance my skills, gain valuable experience, and contribute to meaningful projects. I am truly grateful for the support, guidance, and mentorship I have received throughout this internship. Thank you for believing in me and for the invaluable learning experience.
          </p>
          
          </section>
        </section>

        <section className="Future-goal  mt-14 text-center w-[70%] mx-auto">
          <h1 className="text-[#F2EFE5] text-xl">
Future Goals</h1>
    <p className="text-white mt-2">
During my virtual internship with Internee.pk, my primary goal is to immerse myself in the Django development ecosystem, aiming to gain comprehensive proficiency in the framework. I'm eager to tackle real-world projects, where I can apply theoretical knowledge to practical scenarios and refine my problem-solving skills. Moreover, I aspire to foster effective collaboration within the team, leveraging collective expertise to deliver high-quality solutions. This internship presents a valuable opportunity to expand my professional network, connecting with industry professionals and like-minded individuals. Ultimately, I aim to leave a lasting impression through my dedication, contribution, and eagerness to learn, paving the way for potential future endeavors within the company or the broader tech community.</p>
        </section>
      </div>
    </>
  );
}
