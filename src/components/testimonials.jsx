import Image from "next/image";
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const Testimonials = () => {
  return (
    <div className="lg:px-[120px] px-2 container mx-auto">
      <h2 className="text-6xl font-[impact] text-black mb-8">TESTIMONIALS</h2>

      <Glider
        responsive={[
          {
            breakpoint: 864,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        rewind
        className="gap-4 w-full"
      >
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
      </Glider>
    </div>
  );
};

export default Testimonials;
