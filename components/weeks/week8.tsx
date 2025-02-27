"use client";

import { CircleDot, CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Week8() {
  const [completedServer, setCompletedServer] = useState([false, false, false, false]);
  const [completedAPIs, setCompletedAPIs] = useState([false, false]);

  const Server = [
    { text: "Creating First Server with Express", url: "https://www.youtube.com/watch?v=N2-FyBBxOZA" },
    { text: "HTTP Requests", url: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
    { text: "Postman", url: "https://www.youtube.com/watch?v=4-DmsxM347k" },
    { text: "Middlewares", url: "https://www.youtube.com/watch?v=n2c0mf1sza4" },
  ];

  const APIs = [
    { text: "REST API", url: "https://www.youtube.com/watch?v=cJAyEOZQUQY" },
    { text: "GraphQL API", url: "https://www.youtube.com/watch?v=WtkKwO1viI8&t=808s" },
  ];

  const handleToggleServer = (index: number) => {
    const updatedCompletion = [...completedServer];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedServer(updatedCompletion);
  };

  const handleToggleAPIs = (index: number) => {
    const updatedCompletion = [...completedAPIs];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedAPIs(updatedCompletion);
  };

  const progressPercentageServer = Math.round(
    (completedServer.filter((completed) => completed).length / Server.length) * 100
  );

  const progressPercentageAPIs = Math.round(
    (completedAPIs.filter((completed) => completed).length / APIs.length) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-green-500">Week 8 • 6 Lectures</div>
        <h2 className="text-2xl font-bold">Express with Node.js And API</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Express with Node.js</h3>
          <ul className="space-y-1">
            {Server.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleServer(index)}
                  className="mr-3"
                  aria-label={completedServer[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedServer[index] ? (
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
                    completedServer[index] ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {step.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">API</h3>
          <ul className="space-y-1">
            {APIs.map((step, index) => (
              <li key={index} className="flex items-center">
                <button
                  onClick={() => handleToggleAPIs(index)}
                  className="mr-3"
                  aria-label={completedAPIs[index] ? "Mark as incomplete" : "Mark as complete"}
                >
                  {completedAPIs[index] ? (
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
                    completedAPIs[index] ? "line-through text-gray-400" : "text-gray-800"
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
          Progress (Server): {progressPercentageServer}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageServer}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          Progress (API): {progressPercentageAPIs}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentageAPIs}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}