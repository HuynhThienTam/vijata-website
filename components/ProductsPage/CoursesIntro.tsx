export default function CoursesIntro() {
  return (
    <div className="w-[80%] flex flex-col items-start justify-start text-start mx-auto pt-6 leading-relaxed">
        <h1 className="text-5xl text-gray-700 font-extrabold text-start leading-tight">
          Choose Vijita Academy
      </h1>
      <p className=" pt-6 text-base text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        perspiciatis! Voluptatibus, dolorum. A consectetur debitis provident
        neque eveniet praesentium, laudantium labore earum laborum sed
        distinctio harum repellendus. Tempore, aliquam id dad fes affeaf!
      </p>
    <div className="w-full mx-auto py-8 flex items-start  text-gray-700">
      <article className="w-full mx-auto">
        {/* <div className="mr-10 mb-6 float-right w-3/10 group">
          <div className="rounded-md border-[8px] border-blue-600 overflow-hidden  ">
            <img
              src="/images/students1.jpg"
              alt="Feeling"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 "
            />
          </div>
        </div> */}
        <div className="mr-10 mb-6 float-right w-3/10 group">
          <img src="/svgs/turtle.svg" title="Traditional Chinese character for Turtle"/>
        </div>
        <h2 className="  text-2xl text-gray-700 font-extrabold text-start leading-tight">
          Courses offered at Vijita Academy
      </h2>
        <p className="  text-base pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          ligula scelerisque, finibus odio eget, facilisis massa. Suspendisse
          potenti. 
        </p>
         <ul className="pt-4 list-disc pl-6 marker:text-xl marker:text-orange-600 ">
            <li className="mb-2">We offtered great quality <span className="font-semibold">Full-Stack Web Development</span></li>
            <li className="mb-2">Data Science and Machine Learning</li>
            <li className="mb-2">Mobile App Development</li>
        </ul>
        {/* final p */}
        {/* <p className="text-base pt-2">
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
          malesuada feugiat. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia dicta in vitae ea. Culpa, possimus voluptate libero
          consequatur impedit quo provident atque est suscipit quis voluptates
          deserunt? Asperiores cupiditate molestiae magni tempora ut rem quas
          laborum esse iste ipsum tenetur, magnam blanditiis cum amet corrupti
          cumque, harum quo? Quaerat harum quo repellendus hic alias. 
        </p> */}
        <div className="clear-right"></div>
      </article>
    </div>
    </div>
  );
}
