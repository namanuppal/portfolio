import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-10 lg:space-y-0 lg:space-x-12">
                    <div className="lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Naman Uppal"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-7/12">
                        <h2 className="text-4xl font-bold sm:text-5xl">Naman Uppal</h2>
                        <p className="mt-6 text-lg leading-relaxed">
                            I’m a passionate frontend developer specializing in creating responsive and user-friendly web experiences. I’m skilled in HTML, CSS, JavaScript, and frameworks like React, Bootstrap, and Tailwind CSS. I’m eager to contribute to a collaborative team and build innovative web applications.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Seeking a challenging role in web development to further enhance my front-end expertise while gaining backend experience and contributing to impactful projects.
                        </p>

                        <h3 className="py-8 text-2xl font-semibold">My Skills</h3>
                        <div className="flex overflow-x-auto space-x-4 py-4 items-center">
                            {[
                                { icon: <FaHtml5 />, bg: "bg-red-500" },
                                { icon: <FaCss3Alt />, bg: "bg-blue-500" },
                                { icon: <FaJsSquare />, bg: "bg-yellow-500" },
                                { icon: <SiTailwindcss />, bg: "bg-teal-400" },
                                { icon: <FaReact className="text-pink-400" />, bg: "bg-black" }, // Change React icon color
                                { icon: <LiaNode />, bg: "bg-black" },
                                { icon: <FaDatabase />, bg: "bg-black" },
                            ].map((skill, index) => (
                                <div key={index} className="flex items-center transition-transform transform hover:scale-110">
                                    <div className={`h-12 w-12 ${skill.bg} rounded-lg flex items-center justify-center`}>
                                        {skill.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
