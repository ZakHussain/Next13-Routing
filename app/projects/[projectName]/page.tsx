import React from "react";

interface ProjectDetailsProps {
  params: {
    projectName: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  return (
    <main>
      <h1>Project: {params.projectName}</h1>
    </main>
  );
}
