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
  readonly technologies?: (ProjectTechnologies | null)[] | null;
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
  readonly technologies: AsyncCollection<ProjectTechnologies>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Technology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly projects?: (ProjectTechnologies | null)[] | null;
  readonly experienceLevels?: (TechnologyExperienceLevel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTechnology = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Technology, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly projects: AsyncCollection<ProjectTechnologies>;
  readonly experienceLevels: AsyncCollection<TechnologyExperienceLevel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Technology = LazyLoading extends LazyLoadingDisabled ? EagerTechnology : LazyTechnology

export declare const Technology: (new (init: ModelInit<Technology>) => Technology) & {
  copyOf(source: Technology, mutator: (draft: MutableModel<Technology>) => MutableModel<Technology> | void): Technology;
}

type EagerTechnologyExperienceLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TechnologyExperienceLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level: ExperienceLevel | keyof typeof ExperienceLevel;
  readonly technology?: Technology | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly technologyExperienceLevelsId?: string | null;
  readonly userExperienceLevelsId?: string | null;
}

type LazyTechnologyExperienceLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TechnologyExperienceLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly level: ExperienceLevel | keyof typeof ExperienceLevel;
  readonly technology: AsyncItem<Technology | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly technologyExperienceLevelsId?: string | null;
  readonly userExperienceLevelsId?: string | null;
}

export declare type TechnologyExperienceLevel = LazyLoading extends LazyLoadingDisabled ? EagerTechnologyExperienceLevel : LazyTechnologyExperienceLevel

export declare const TechnologyExperienceLevel: (new (init: ModelInit<TechnologyExperienceLevel>) => TechnologyExperienceLevel) & {
  copyOf(source: TechnologyExperienceLevel, mutator: (draft: MutableModel<TechnologyExperienceLevel>) => MutableModel<TechnologyExperienceLevel> | void): TechnologyExperienceLevel;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly experienceLevels?: (TechnologyExperienceLevel | null)[] | null;
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
  readonly experienceLevels: AsyncCollection<TechnologyExperienceLevel>;
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
  readonly technologyId?: string | null;
  readonly project: Project;
  readonly technology: Technology;
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
  readonly technologyId?: string | null;
  readonly project: AsyncItem<Project>;
  readonly technology: AsyncItem<Technology>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectTechnologies = LazyLoading extends LazyLoadingDisabled ? EagerProjectTechnologies : LazyProjectTechnologies

export declare const ProjectTechnologies: (new (init: ModelInit<ProjectTechnologies>) => ProjectTechnologies) & {
  copyOf(source: ProjectTechnologies, mutator: (draft: MutableModel<ProjectTechnologies>) => MutableModel<ProjectTechnologies> | void): ProjectTechnologies;
}