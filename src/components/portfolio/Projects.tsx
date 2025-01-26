import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useAppStore } from "@/store/appStore";
import { ProjectsTimelineWithAuth } from "portfolioui/hr-favorite";

export const Projects = () => {
  const {
    saveProjectsInfo,
    portfolio: { projectsInfo },
    isLoading,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();
  return (
    <ProjectsTimelineWithAuth
      isEditing={isEditing}
      saveProjectsInfo={saveProjectsInfo}
      projectsInfo={projectsInfo}
      isLoading={isLoading}
      circleClassName="bg-blue-300 dark:bg-blue-300"
      lineClassName="from-violet-800 via-blue-700"
    />
  );
};
