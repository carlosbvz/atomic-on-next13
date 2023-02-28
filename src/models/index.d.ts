import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ExperienceLevel {
  BASIC = "basic",
  EXPERIENCED = "experienced"
}



type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly skills?: (ProjectTechnologies | null)[] | null;
  readonly users?: (ProjectUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly skills: AsyncCollection<ProjectTechnologies>;
  readonly users: AsyncCollection<ProjectUsers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly projects?: (ProjectTechnologies | null)[] | null;
  readonly experienceLevels?: (SkillExperienceLevel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly projects: AsyncCollection<ProjectTechnologies>;
  readonly experienceLevels: AsyncCollection<SkillExperienceLevel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerSkillExperienceLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SkillExperienceLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level: ExperienceLevel | keyof typeof ExperienceLevel;
  readonly skill?: Skill | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly skillExperienceLevelsId?: string | null;
  readonly userExperienceLevelsId?: string | null;
}

type LazySkillExperienceLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SkillExperienceLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level: ExperienceLevel | keyof typeof ExperienceLevel;
  readonly skill: AsyncItem<Skill | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly skillExperienceLevelsId?: string | null;
  readonly userExperienceLevelsId?: string | null;
}

export declare type SkillExperienceLevel = LazyLoading extends LazyLoadingDisabled ? EagerSkillExperienceLevel : LazySkillExperienceLevel

export declare const SkillExperienceLevel: (new (init: ModelInit<SkillExperienceLevel>) => SkillExperienceLevel) & {
  copyOf(source: SkillExperienceLevel, mutator: (draft: MutableModel<SkillExperienceLevel>) => MutableModel<SkillExperienceLevel> | void): SkillExperienceLevel;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly experienceLevels?: (SkillExperienceLevel | null)[] | null;
  readonly projects?: (ProjectUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly experienceLevels: AsyncCollection<SkillExperienceLevel>;
  readonly projects: AsyncCollection<ProjectUsers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProjectTechnologies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectTechnologies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectId?: string | null;
  readonly skillId?: string | null;
  readonly project: Project;
  readonly skill: Skill;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectTechnologies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectTechnologies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectId?: string | null;
  readonly skillId?: string | null;
  readonly project: AsyncItem<Project>;
  readonly skill: AsyncItem<Skill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectTechnologies = LazyLoading extends LazyLoadingDisabled ? EagerProjectTechnologies : LazyProjectTechnologies

export declare const ProjectTechnologies: (new (init: ModelInit<ProjectTechnologies>) => ProjectTechnologies) & {
  copyOf(source: ProjectTechnologies, mutator: (draft: MutableModel<ProjectTechnologies>) => MutableModel<ProjectTechnologies> | void): ProjectTechnologies;
}

type EagerProjectUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectId?: string | null;
  readonly userId?: string | null;
  readonly project: Project;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectId?: string | null;
  readonly userId?: string | null;
  readonly project: AsyncItem<Project>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectUsers = LazyLoading extends LazyLoadingDisabled ? EagerProjectUsers : LazyProjectUsers

export declare const ProjectUsers: (new (init: ModelInit<ProjectUsers>) => ProjectUsers) & {
  copyOf(source: ProjectUsers, mutator: (draft: MutableModel<ProjectUsers>) => MutableModel<ProjectUsers> | void): ProjectUsers;
}