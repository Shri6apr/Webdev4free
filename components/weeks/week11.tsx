"use client";
import { useState } from "react";
import { CircleDot, CheckCircle } from "lucide-react";

interface Project {
  text: string;
  url: string;
}

export default function Week11() {
  const basicProject: Project[] = [
    { text: "Project 1", url: "https://www.youtube.com/watch?v=5ZdHfJVAY-s" },
    { text: "Project 2", url: "https://www.youtube.com/watch?v=I1cpb0tYV74&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=8" },
    { text: "Project 3", url: "https://www.youtube.com/watch?v=FHTbsZEJspU&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=9" },
    { text: "Project 4", url: "https://www.youtube.com/watch?v=y47gYvXchXM&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=17" },
    { text: "Project 5", url: "https://www.youtube.com/watch?v=NnUFOWR_V4Y&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=32" },
  ];
  
  const reactfullstack: Project[] = [
    { text: "Project 1", url: "https://www.youtube.com/watch?v=4mOkFXyxfsU&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=13" },
    { text: "Project 2", url: "https://www.youtube.com/watch?v=K8YELRmUb5o" },  
    { text: "Project 3", url: "https://www.youtube.com/watch?v=P4kuSxpjA48&list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN" },
    { text: "Project 4", url: "https://www.youtube.com/watch?v=mYy-d6BtqmU&list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN&index=9" },
    { text: "Project 5", url: "https://www.youtube.com/watch?v=dTFXufTgfOE&list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN&index=10" },
  ];
      
  const NextJSProject: Project[] = [
    { text: "Project 1", url: "https://www.youtube.com/watch?v=c_-b_isI4vg&t=66s" },
    { text: "Project 2", url: "https://www.youtube.com/watch?v=2aeMRB8LL4o" },
    { text: "Project 3", url: "https://www.youtube.com/watch?v=5miHyP6lExg" },
    { text: "Project 4", url: "https://www.youtube.com/watch?v=ZbX4Ok9YX94&t=15s" },
  ];

  const allProjects: Project[] = [...basicProject, ...reactfullstack, ...NextJSProject];
  const [completedProjects, setCompletedProjects] = useState<number[]>([]);

  const toggleComplete = (index: number): void => {
    setCompletedProjects((prev: number[]) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const progress = Math.round((completedProjects.length / allProjects.length) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-orange-500">Week 11 • {allProjects.length} Projects</div>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="absolute top-0 left-0 h-4 rounded-full bg-green-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">React Frontend Projects</h3>
          <ul className="space-y-1">
            {basicProject.map((project, index) => {
              const projectIndex = index;
              const isCompleted = completedProjects.includes(projectIndex);
              
              return (
                <li key={index}>
                  <div 
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                    <span 
                      className="mr-2 cursor-pointer" 
                      onClick={() => toggleComplete(projectIndex)}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <CircleDot className="w-4 h-4 text-orange-500" />
                      )}
                    </span>
                    <a 
                      href={project.url}
                      className={`text-gray-600 group-hover:text-gray-900 ${isCompleted ? "line-through" : ""}`}
                    >
                      {project.text}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">React Full-stack Projects</h3>
          <ul className="space-y-1">
            {reactfullstack.map((project, index) => {
              const projectIndex = basicProject.length + index;
              const isCompleted = completedProjects.includes(projectIndex);
              
              return (
                <li key={index}>
                  <div 
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                    <span 
                      className="mr-2 cursor-pointer" 
                      onClick={() => toggleComplete(projectIndex)}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <CircleDot className="w-4 h-4 text-orange-500" />
                      )}
                    </span>
                    <a 
                      href={project.url}
                      className={`text-gray-600 group-hover:text-gray-900 ${isCompleted ? "line-through" : ""}`}
                    >
                      {project.text}

                    </a>

                  </div>
                </li>
                
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Next JS Full-stack Projects</h3>
          <ul className="space-y-1">
            {NextJSProject.map((project, index) => {
              const projectIndex = basicProject.length + reactfullstack.length + index;
              const isCompleted = completedProjects.includes(projectIndex);
              
              return (
                <li key={index}>
                  <div 
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                    <span 
                      className="mr-2 cursor-pointer" 
                      onClick={() => toggleComplete(projectIndex)}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <CircleDot className="w-4 h-4 text-orange-500" />
                      )}
                    </span>
                    <a 
                      href={project.url}
                      className={`text-gray-600 group-hover:text-gray-900 ${isCompleted ? "line-through" : ""}`}
                    >
                      {project.text}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>
    </div>
  );
}