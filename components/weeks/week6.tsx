"use client";

import { CircleDot, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Week6() {
  const [completedGit, setCompletedGit] = useState([false, false, false, false, false, false]);
  const [completedGithub, setCompletedGithub] = useState([false]);

  const git = [
    { text: "Introduction to GIT", url: "https://www.youtube.com/watch?v=7tOLcNZfPso&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o" },
    { text: "Master Git Init", url: "https://www.youtube.com/watch?v=l_V7sNrpd3A&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=2" },
    { text: "Git commits and logs", url: "https://www.youtube.com/watch?v=wVGiJKSnJY0&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=3" },
    { text: "Git internal working and configs", url: "https://www.youtube.com/watch?v=owQtvW112tI&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=4" },
    { text: "Git merge and git conflicts", url: "https://www.youtube.com/watch?v=vw-2U0u7Ni4&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=5" },
    { text: "Git Diff and stashing", url: "https://www.youtube.com/watch?v=EYdIMAVFIk0&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=6" },
  ];

  const github = [
    { text: "Github in one shot", url: "https://www.youtube.com/watch?v=TsSjgkfAeJ0" },
  ];

  const handleToggleGit = (index: number) => {
    const updatedCompletion = [...completedGit];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedGit(updatedCompletion);
  };

  const handleToggleGithub = (index: number) => {
    const updatedCompletion = [...completedGithub];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedGithub(updatedCompletion);
  };

  const progressPercentageGit = Math.round(
    (completedGit.filter((completed) => completed).length / git.length) * 100
  );

  const progressPercentageGithub = Math.round(
    (completedGithub.filter((completed) => completed).length / github.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 6 • 7 Lectures</div>
        <h2 className="text-2xl font-bold">Git and Github</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Git</h3>
          <ul className="space-y-1">
            {git.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleGit(index)}
                  className="mr-3"
                  aria-label={completedGit[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedGit[index] ? (
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
                    completedGit[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Github</h3>
          <ul className="space-y-1">
            {github.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleGithub(index)}
                  className="mr-3"
                  aria-label={completedGithub[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedGithub[index] ? (
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
                    completedGithub[index] ? "line-through text-gray-400" : "text-gray-800"
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
          Progress (Git): {progressPercentageGit}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageGit}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress (Github): {progressPercentageGithub}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageGithub}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}