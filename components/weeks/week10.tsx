"use client";

import { CircleDot, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Week10() {
  const [completedBasicReact, setCompletedBasicReact] = useState([false, false, false, false, false]);
  const [completedInterReact, setCompletedInterReact] = useState([false, false, false, false, false]);

  const basicReact = [
    { text: "Components", url: "https://www.youtube.com/watch?v=VSSm2nebwak&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=4" },
    { text: "Rendering", url: "https://www.youtube.com/watch?v=mECV6nGOqNo" },
    { text: "Props", url: "https://www.youtube.com/watch?v=VpGFuThTjhY&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=5" },
    { text: "Hooks", url: "https://www.youtube.com/watch?v=4Cf86qVEIJY" },
    { text: "Routers", url: "https://www.youtube.com/watch?v=VJov5QWEKE4" },
  ];

  const interReact = [
    { text: "State management ( Redux )", url: "https://www.youtube.com/watch?v=fxT54eRIsc4" },
    { text: "API Calls", url: "https://www.youtube.com/watch?v=V2x2Nq-fcTU&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=9" },
    { text: "Framework ( Next JS )", url: "https://www.youtube.com/watch?v=wm5gMKuwSYk" },
    { text: "Type  & validation ( Zod )", url: "https://www.youtube.com/watch?v=9UVPk0Ulm6U&t=28s" },
    { text: "Animation ( Framer )", url: "https://www.youtube.com/watch?v=GOuwOI-WSkE" },
  ];

  const handleToggleBasicReact = (index: number) => {
    const updatedCompletion = [...completedBasicReact];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedBasicReact(updatedCompletion);
  };

  const handleToggleInterReact = (index: number) => {
    const updatedCompletion = [...completedInterReact];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedInterReact(updatedCompletion);
  };

  const progressPercentageBasicReact = Math.round(
    (completedBasicReact.filter((completed) => completed).length / basicReact.length) * 100
  );

  const progressPercentageInterReact = Math.round(
    (completedInterReact.filter((completed) => completed).length / interReact.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 10 • 10 Lectures</div>
        <h2 className="text-2xl font-bold">React</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Basic Topics</h3>
          <ul className="space-y-1">
            {basicReact.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleBasicReact(index)}
                  className="mr-3"
                  aria-label={completedBasicReact[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedBasicReact[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <CircleDot className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    completedBasicReact[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Intermediate Topics</h3>
          <ul className="space-y-1">
            {interReact.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleInterReact(index)}
                  className="mr-3"
                  aria-label={completedInterReact[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedInterReact[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <CircleDot className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    completedInterReact[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress (Basic Topics): {progressPercentageBasicReact}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageBasicReact}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress (Intermediate Topics): {progressPercentageInterReact}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageInterReact}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}