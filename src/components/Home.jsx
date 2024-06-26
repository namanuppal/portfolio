import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

export default function Home() {
  const professionRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Web Developer."],
      typeSpeed: 50,
      loop: false
    };

    const typed = new Typed(professionRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
          <a href="NAMAN UPPAL.pdf" download>
            <h2 className="text-4xl font-bold sm:text-4xl">
              Download Resume
            </h2>
          </a>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <div id="name" className="text-5xl font-bold mt-10">
            Naman Uppal
          </div>
          <div
            id="profession"
            className="text-5xl text-orange-600 mt-4"
            ref={professionRef}
          ></div>
        </div>
      </aside>
    </div>
  );
}
