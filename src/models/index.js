// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ExperienceLevel = {
  "BASIC": "basic",
  "EXPERIENCED": "experienced"
};

const { Project, Technology, TechnologyExperienceLevel, User, ProjectTechnologies } = initSchema(schema);

export {
  Project,
  Technology,
  TechnologyExperienceLevel,
  User,
  ProjectTechnologies,
  ExperienceLevel
};