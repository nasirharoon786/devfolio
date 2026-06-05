"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function PortfolioDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);
  const [current, setCurrent] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#portfolio" className="text-[#0078ff] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? project.images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === project.images.length - 1 ? 0 : c + 1));

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {project.title}
        </h1>
        <p className="text-gray-500 mb-6">
          <a
            href={project.url}
            target="_blank"
            className="text-[#0078ff] hover:underline"
          >
            {project.url}
          </a>
        </p>

        <div className="relative mb-8">
          <img
            src={project.images[current]}
            alt={`${project.title} screenshot ${current + 1}`}
            className="w-full max-h-96 object-cover rounded-lg shadow-md"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      i === current ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-3">
            About {project.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Role</h3>
            <p className="text-gray-600">{project.role}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
            <p className="text-gray-600">{project.category}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(", ").map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-[#0078ff] text-sm rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.split(", ").map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center text-[#0078ff] hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
