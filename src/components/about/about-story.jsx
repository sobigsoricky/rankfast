import Image from "next/image";
import React from "react";

const AboutStory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-start contailner mx-auto md:px-[120px] px-2 py-20">
      <div className="relative">
        <h2 className="font-[impact] text-black text-4xl md:text-7xl pb-2  md:pb-5 after:w-1/2 after:absolute after:h-[2px] after:bg-[#E72C4B] after:bottom-0 after:right-0">
          Story of SEOnator
        </h2>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#212121] ">The starting</h3>
        <ul className="text-lg text-[#555555] mt-4">
          <li className="list-disc my-2">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </li>

          <li className="list-disc my-2">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </li>

          <li className="list-disc my-2">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </li>
        </ul>

        <img
          src="https://iili.io/HOApbz7.md.png"
          alt=""
          fill
          className="w-full my-10"
        />

        <ul>
          <li className="list-disc my-2">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutStory;
