"use client";

import { CircleDot, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Week4() {
  const [completedProjects, setCompletedProjects] = useState([false, false, false]);

  const introductionSteps = [
    { text: "Learn the basics", url: "https://www.youtube.com/watch?v=lkIFF4maKMU" },
    { text: "DOM Manipulation", url: "https://www.youtube.com/watch?v=5fb2aPlgoys" },
    { text: "Advance Topics", url: "https://www.youtube.com/watch?v=R9I85RhI7Cg" },
  ];

  const handleToggle = (index: number) => {
    const updatedCompletion = [...completedProjects];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedProjects(updatedCompletion);
  };

  const progressPercentage = Math.round(
    (completedProjects.filter((completed) => completed).length / introductionSteps.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 4 • 3 Lectures</div>
        <h2 className="text-2xl font-bold">JavaScript</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Basic and Advanced</h3>
          <ul className="space-y-2">
            {introductionSteps.map((step, index) => (
              <li key={index} className="flex items-center">
                {/* Checkbox */}
                <button
                  onClick={() => handleToggle(index)}
                  className="mr-3"
                  aria-label={completedProjects[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedProjects[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <CircleDot className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {/* Project Link */}
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    completedProjects[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress: {progressPercentage}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}