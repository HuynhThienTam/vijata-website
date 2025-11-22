export default function Feeling() {
  return (
    <section className="w-[90%] mx-auto py-8 flex items-start gap-6 text-gray-700">
      {/* Left Image - 3/10 width */}
      <article>
        <div className="mr-10 mb-6 float-left w-3/10 group">
          <div className="rounded-md border-[8px] border-blue-600 overflow-hidden  ">
          <img
            src="/images/students1.jpg"
            alt="Feeling"
            className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 "
          />
        </div>
        </div>
        <p className="text-base indent-8 pl-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          ligula scelerisque, finibus odio eget, facilisis massa. Suspendisse
          potenti. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor
          eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada
          feugiat.
        </p>
        <br />
        <p className="text-base indent-8 pl-3">
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
          malesuada feugiat. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia dicta in vitae ea. Culpa, possimus voluptate libero
          consequatur impedit quo provident atque est suscipit quis voluptates
          deserunt? Asperiores cupiditate molestiae magni tempora ut rem quas
          laborum esse iste ipsum tenetur, magnam blanditiis cum amet corrupti
          cumque, harum quo? Quaerat harum quo repellendus hic alias. Cum
          aliquid necessitatibus impedit eos minus perspiciatis eveniet deleniti
          exercitationem minima aliquam iste, quod quas corporis unde sunt animi
          hic expedita debitis nostrum! Aperiam assumenda voluptatem quae
          expedita adipisci ipsam molestiae aliquid, quasi vel blanditiis?
          Dolorum, velit porro? Nostrum hic maiores dolorem nobis sequi illum
          quibusdam, suscipit quaerat velit, autem similique magnam error nam?
          Voluptatum, unde. Ipsum porro in distinctio, inventore velit obcaecati
          consequatur? Ratione facilis mollitia est et eaque dolores culpa
          earum. Beatae dolor ipsam qui obcaecati, corporis vel possimus
          pariatur numquam odit soluta accusamus quidem itaque harum doloribus
          dicta voluptatibus saepe quo quibusdam non sunt minima. Aut alias fuga
          neque nisi, odio dolore maiores ipsam, doloremque sed fugit deleniti
          dolorem harum accusantium! Eveniet placeat vel ex quod. Facilis, animi
          vitae porro repellendus aliquam necessitatibus accusamus numquam eius
          explicabo nulla temporibus et, libero praesentium provident ut
          recusandae rem illum aspernatur natus, hic minus neque. Mollitia!
        </p>
        <br />
        <p className="text-base indent-8 pl-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          commodi aperiam earum natus, sint in hic id! Doloribus ex vitae
          consectetur quos, quaerat praesentium doloremque fuga recusandae
          veniam beatae quasi, aut voluptas ipsa quo assumenda ut eligendi
          reiciendis voluptatem at?
        </p>
      </article>
      {/* <div className=" w-3/10 group">
        <div className="rounded-md border-[10px] border-blue-600 overflow-hidden ">
            <img
          src="/images/students1.jpg"
          alt="Feeling"
          className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 "
        />
        </div>
      </div> */}

      {/* Right Script - 7/10 width */}
      {/* <div className="w-7/10 text-gray-700 leading-relaxed">
        <p className="text-xl indent-8 pl-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          ligula scelerisque, finibus odio eget, facilisis massa. Suspendisse
          potenti. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor
          eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada
          feugiat. 
        </p>
        <br/>
        <p className="text-xl indent-8 pl-3">
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut
          libero malesuada feugiat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia dicta in vitae ea. Culpa, possimus voluptate
          libero consequatur impedit quo provident atque est suscipit quis
          voluptates deserunt? Asperiores cupiditate molestiae magni tempora ut
          rem quas laborum esse iste ipsum tenetur, magnam blanditiis cum amet
          corrupti cumque, harum quo? Quaerat harum quo repellendus hic alias.
          Cum aliquid necessitatibus impedit eos minus perspiciatis eveniet
          deleniti exercitationem minima aliquam iste, quod quas corporis unde
          sunt animi hic expedita debitis nostrum! Aperiam assumenda voluptatem
          quae expedita adipisci ipsam molestiae aliquid, quasi vel blanditiis?
          Dolorum, velit porro? Nostrum hic maiores dolorem nobis sequi illum
          quibusdam, suscipit quaerat velit, autem similique magnam error nam?
          Voluptatum, unde. Ipsum porro in distinctio, inventore velit obcaecati
          consequatur? Ratione facilis mollitia est et eaque dolores culpa
          earum. Beatae dolor ipsam qui obcaecati, corporis vel possimus
          pariatur numquam odit soluta accusamus quidem itaque harum doloribus
          dicta voluptatibus saepe quo quibusdam non sunt minima. Aut alias fuga
          neque nisi, odio dolore maiores ipsam, doloremque sed fugit deleniti
          dolorem harum accusantium! Eveniet placeat vel ex quod. Facilis, animi
          vitae porro repellendus aliquam necessitatibus accusamus numquam eius
          explicabo nulla temporibus et, libero praesentium provident ut
          recusandae rem illum aspernatur natus, hic minus neque. Mollitia!
        </p>
        <br/>
        <p className="text-xl indent-8 pl-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae commodi aperiam earum natus, sint in hic id! Doloribus ex vitae consectetur quos, quaerat praesentium doloremque fuga recusandae veniam beatae quasi, aut voluptas ipsa quo assumenda ut eligendi reiciendis voluptatem at?
        </p>
      </div> */}
    </section>
  );
}
