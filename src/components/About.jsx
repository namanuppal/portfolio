import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Naman Uppal
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A passionate frontend developer specializing in crafting user-friendly and responsive web experiences. I'm skilled in HTML, CSS, JavaScript, and familiar with frameworks like React, Bootstrap, and Tailwind CSS. I'm eager to contribute to a team environment and build innovative web applications.
                        </p>
                        <p className="mt-6 text-gray-600">Seeking a challenging position in web development where I can leverage my strong front-end skills and gain more experience in backend development while contributing to innovative projects.</p>
                        <h3 class="py-8 text-xl">My Skills</h3>
                        <div>
                        <div>
                            <p>HTML5</p>
                            <div className="h-4">
                                <div className="bg-orange-700 h-full rounded-xl" style={{width: '95%'}}></div>
                            </div>
                        </div>
                        <div>
                            <p>CSS3</p>
                            <div className="h-4">
                                <div className="bg-orange-700 h-full rounded-xl" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <div className="h-4">
                                <div className="bg-orange-700 h-full rounded-xl" style={{width: '85%'}}></div>
                            </div>
                        </div>
                        <div>
                            <p>Tailwind CSS</p>
                            <div className="h-4">
                                <div className="bg-orange-700 h-full rounded-xl" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div>
                            <p>React</p>
                            <div className="h-4">
                                <div className="bg-orange-700 h-full rounded-xl" style={{width: '80%'}}></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}