import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from "react-icons/fa";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Web Developer.", "Frontend Web Developer.", "Backend Web Developer."],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col">

      <main className="flex-grow flex items-center justify-center">
        <aside className="relative overflow-hidden text-white p-10 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 opacity-30"></div>
          <div className="relative z-10 max-w-screen-xl mx-auto text-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="text-6xl sm:text-7xl font-extrabold drop-shadow-md">
                Naman Uppal
              </div>
              <div
                ref={typedRef}
                className="text-3xl sm:text-5xl text-orange-300 font-semibold mt-4 drop-shadow-md"
              ></div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-black">Full Stack</h3>
                  <p className="mb-4 text-black">Experienced in building end-to-end web applications.</p>
                  <div className="flex justify-center space-x-4">
                    <FaHtml5 className="text-4xl text-orange-500" />
                    <FaCss3Alt className="text-4xl text-blue-500" />
                    <FaJs className="text-4xl text-yellow-500" />
                    <FaReact className="text-4xl text-blue-400" />
                    <FaNode className="text-4xl text-green-500" />
                    <FaDatabase className="text-4xl text-gray-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-black">Frontend</h3>
                  <p className="mb-4 text-black">Crafting beautiful and responsive user interfaces.</p>
                  <div className="flex justify-center space-x-4">
                    <FaHtml5 className="text-4xl text-orange-500" />
                    <FaCss3Alt className="text-4xl text-blue-500" />
                    <FaJs className="text-4xl text-yellow-500" />
                    <FaReact className="text-4xl text-blue-400" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-black">Backend</h3>
                  <p className="mb-4 text-black">Building robust and scalable server-side applications.</p>
                  <div className="flex justify-center space-x-4">
                    <FaNode className="text-4xl text-green-500" />
                    <FaDatabase className="text-4xl text-gray-500" />
                  </div>
                </div>
              </section>
              <a
                href="YOUR_RESUME.pdf"
                download
                className="inline-block mt-10 bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
