"use client";

import { CircleDot, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Week7() {
  const [completedIntroBackend, setCompletedIntroBackend] = useState([false, false]);
  const [completedRoadmapSteps, setCompletedRoadmapSteps] = useState([false, false]);

  const introBackend = [
    { text: "Overview", url: "https://www.youtube.com/watch?v=XBu54nfzxAQ" },
    { text: "Backend Tools and Technologies", url: "https://www.youtube.com/watch?v=tN6oJu2DqCM" },
  ];

  const roadmapSteps = [
    { text: "Node.js", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
    { text: "Express", url: "https://www.youtube.com/watch?v=SccSCuHhOw0" },
  ];

  const handleToggleIntroBackend = (index: number) => {
    const updatedCompletion = [...completedIntroBackend];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedIntroBackend(updatedCompletion);
  };

  const handleToggleRoadmapSteps = (index: number) => {
    const updatedCompletion = [...completedRoadmapSteps];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedRoadmapSteps(updatedCompletion);
  };

  const progressPercentageIntroBackend = Math.round(
    (completedIntroBackend.filter((completed) => completed).length / introBackend.length) * 100
  );

  const progressPercentageRoadmapSteps = Math.round(
    (completedRoadmapSteps.filter((completed) => completed).length / roadmapSteps.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 7 • 4 Lectures</div>
        <h2 className="text-2xl font-bold">Backend Development</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Introduction</h3>
          <ul className="space-y-1">
            {introBackend.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleIntroBackend(index)}
                  className="mr-3"
                  aria-label={completedIntroBackend[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedIntroBackend[index] ? (
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
                    completedIntroBackend[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Technology</h3>
          <ul className="space-y-1">
            {roadmapSteps.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleRoadmapSteps(index)}
                  className="mr-3"
                  aria-label={completedRoadmapSteps[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedRoadmapSteps[index] ? (
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
                    completedRoadmapSteps[index] ? "line-through text-gray-400" : "text-gray-800"
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
          Progress (Introduction): {progressPercentageIntroBackend}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageIntroBackend}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress (Technology): {progressPercentageRoadmapSteps}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageRoadmapSteps}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}