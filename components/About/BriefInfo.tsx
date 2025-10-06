import { FaRocket } from "react-icons/fa";
export default function BriefInfo() {
  return (
    <section className="w-[90%] flex flex-col items-center justify-start text-start mx-auto pt-8 leading-relaxed">
      {/* <h1 className="text-center font-bold text-3xl">What do you know about Vijata?</h1> */}
      <h1 className="text-5xl font-extrabold text-center leading-tight">
         <span className="text-blue-600 ">
        {/* <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500  bg-clip-text text-transparent inline-block "> */}
          What do you know
          <br />
          about Vijata!{" "}
          <FaRocket className=" inline-block align-baseline ml-2 pt-2 text-pink-400" />
        </span>
      </h1>
      <p className="indent-8 pt-8 text-xl text-gray-600 w-[65%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        perspiciatis! Voluptatibus, dolorum. A consectetur debitis provident
        neque eveniet praesentium, laudantium labore earum laborum sed
        distinctio harum repellendus. Tempore, aliquam id dad fes affeaf!
        <br />
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        cupiditate corrupti ad laudantium voluptatem, dolorum quas error,
        repellat id accusantium voluptatum architecto nesciunt soluta eligendi?
        Quo, saepe. Perferendis maxime, praesentium tempora vero expedita
        accusantium inventore ipsam cupiditate dolor, quos excepturi?
      </p>
    </section>
  );
}
