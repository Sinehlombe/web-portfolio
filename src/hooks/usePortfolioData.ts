import { useMemo } from 'react';
import { portfolioData } from '../data';
import type { PortfolioData, PersonalInfo, Skills, Repository, Experience, Education } from '../types';

/**
 * Custom hook for accessing portfolio data
 * Provides memoized access to different sections of the portfolio data
 */
export function usePortfolioData() {
  const data = portfolioData;

  const personalInfo = useMemo(() => data.personalInfo, [data]);
  const skills = useMemo(() => data.skills, [data]);
  const repositories = useMemo(() => data.repositories, [data]);
  const experience = useMemo(() => data.experience, [data]);
  const education = useMemo(() => data.education, [data]);
  const certifications = useMemo(() => data.certifications, [data]);
  const interests = useMemo(() => data.interests, [data]);
  const goals = useMemo(() => data.goals, [data]);

  return {
    data: data as PortfolioData,
    personalInfo: personalInfo as PersonalInfo,
    skills: skills as Skills,
    repositories: repositories as Repository[],
    experience: experience as Experience[],
    education: education as Education[],
    certifications: certifications as string[],
    interests: interests as string[],
    goals: goals as string[],
  };
}

/**
 * Custom hook for getting a specific skill by name
 */
export function useSkill(skillName: string) {
  const { skills } = usePortfolioData();

  const allSkills = useMemo(() => [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.ai_ml,
    ...skills.databases,
    ...skills.cloud,
  ], [skills]);

  return useMemo(() => 
    allSkills.find(s => s.name.toLowerCase() === skillName.toLowerCase()),
    [allSkills, skillName]
  );
}

/**
 * Custom hook for filtering repositories by technology
 */
export function useRepositoriesByTech(technology: string) {
  const { repositories } = usePortfolioData();

  return useMemo(() => 
    repositories.filter(repo => 
      repo.technologies.some(tech => 
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    ),
    [repositories, technology]
  );
}

/**
 * Custom hook for getting experience by company
 */
export function useExperienceByCompany(company: string) {
  const { experience } = usePortfolioData();

  return useMemo(() =>
    experience.filter(exp =>
      exp.company.toLowerCase().includes(company.toLowerCase())
    ),
    [experience, company]
  );
}
