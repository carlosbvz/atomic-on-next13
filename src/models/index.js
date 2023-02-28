// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ExperienceLevel = {
  "BASIC": "basic",
  "EXPERIENCED": "experienced"
};

const { Project, Skill, SkillExperienceLevel, User, ProjectTechnologies, ProjectUsers } = initSchema(schema);

export {
  Project,
  Skill,
  SkillExperienceLevel,
  User,
  ProjectTechnologies,
  ProjectUsers,
  ExperienceLevel
};