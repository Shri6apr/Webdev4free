"use client";
import { CheckCircle, Circle } from "lucide-react";
import React, { useState } from "react";

export default function Week5() {
  const [completedProjects, setCompletedProjects] = useState([false, false, false]);

  const projects = [
    { text: "Project 1", url: "https://www.youtube.com/watch?v=AiFfDjmd0jU&t=2s" },
    { text: "Project 2", url: "https://www.youtube.com/watch?v=AMI-6F7CSFc" },
    { text: "Project 3", url: "https://www.youtube.com/watch?v=ldwlOzRvYOU" },
  ];

  const handleToggle = (index: number) => {
    const updatedCompletion = [...completedProjects];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedProjects(updatedCompletion);
  };

  const progressPercentage = Math.round(
    (completedProjects.filter((completed) => completed).length / projects.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 5 • 3 Projects</div>
        <h2 className="text-2xl font-bold">HTML, CSS & JavaScript Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Basic and Advanced</h3>
          <ul className="space-y-2">
            {projects.map((project, index) => (
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
                    <Circle className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {/* Project Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    completedProjects[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {project.text}
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
