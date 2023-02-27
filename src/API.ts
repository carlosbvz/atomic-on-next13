/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  technologies?: ModelProjectTechnologiesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProjectTechnologiesConnection = {
  __typename: "ModelProjectTechnologiesConnection",
  items:  Array<ProjectTechnologies | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProjectTechnologies = {
  __typename: "ProjectTechnologies",
  id: string,
  projectId: string,
  technologyId: string,
  project: Project,
  technology: Technology,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Technology = {
  __typename: "Technology",
  id: string,
  name: string,
  projects?: ModelProjectTechnologiesConnection | null,
  experienceLevels?: ModelTechnologyExperienceLevelConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTechnologyExperienceLevelConnection = {
  __typename: "ModelTechnologyExperienceLevelConnection",
  items:  Array<TechnologyExperienceLevel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TechnologyExperienceLevel = {
  __typename: "TechnologyExperienceLevel",
  id: string,
  level: ExperienceLevel,
  technology?: Technology | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  technologyExperienceLevelsId?: string | null,
  userExperienceLevelsId?: string | null,
};

export enum ExperienceLevel {
  basic = "basic",
  experienced = "experienced",
}


export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  experienceLevels?: ModelTechnologyExperienceLevelConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id: string,
  _version?: number | null,
};

export type CreateTechnologyInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelTechnologyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTechnologyConditionInput | null > | null,
  or?: Array< ModelTechnologyConditionInput | null > | null,
  not?: ModelTechnologyConditionInput | null,
};

export type UpdateTechnologyInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteTechnologyInput = {
  id: string,
  _version?: number | null,
};

export type CreateTechnologyExperienceLevelInput = {
  id?: string | null,
  level: ExperienceLevel,
  _version?: number | null,
  technologyExperienceLevelsId?: string | null,
  userExperienceLevelsId?: string | null,
};

export type ModelTechnologyExperienceLevelConditionInput = {
  level?: ModelExperienceLevelInput | null,
  and?: Array< ModelTechnologyExperienceLevelConditionInput | null > | null,
  or?: Array< ModelTechnologyExperienceLevelConditionInput | null > | null,
  not?: ModelTechnologyExperienceLevelConditionInput | null,
  technologyExperienceLevelsId?: ModelIDInput | null,
  userExperienceLevelsId?: ModelIDInput | null,
};

export type ModelExperienceLevelInput = {
  eq?: ExperienceLevel | null,
  ne?: ExperienceLevel | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTechnologyExperienceLevelInput = {
  id: string,
  level?: ExperienceLevel | null,
  _version?: number | null,
  technologyExperienceLevelsId?: string | null,
  userExperienceLevelsId?: string | null,
};

export type DeleteTechnologyExperienceLevelInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateProjectTechnologiesInput = {
  id?: string | null,
  projectId: string,
  technologyId: string,
  _version?: number | null,
};

export type ModelProjectTechnologiesConditionInput = {
  projectId?: ModelIDInput | null,
  technologyId?: ModelIDInput | null,
  and?: Array< ModelProjectTechnologiesConditionInput | null > | null,
  or?: Array< ModelProjectTechnologiesConditionInput | null > | null,
  not?: ModelProjectTechnologiesConditionInput | null,
};

export type UpdateProjectTechnologiesInput = {
  id: string,
  projectId?: string | null,
  technologyId?: string | null,
  _version?: number | null,
};

export type DeleteProjectTechnologiesInput = {
  id: string,
  _version?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTechnologyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTechnologyFilterInput | null > | null,
  or?: Array< ModelTechnologyFilterInput | null > | null,
  not?: ModelTechnologyFilterInput | null,
};

export type ModelTechnologyConnection = {
  __typename: "ModelTechnologyConnection",
  items:  Array<Technology | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTechnologyExperienceLevelFilterInput = {
  id?: ModelIDInput | null,
  level?: ModelExperienceLevelInput | null,
  and?: Array< ModelTechnologyExperienceLevelFilterInput | null > | null,
  or?: Array< ModelTechnologyExperienceLevelFilterInput | null > | null,
  not?: ModelTechnologyExperienceLevelFilterInput | null,
  technologyExperienceLevelsId?: ModelIDInput | null,
  userExperienceLevelsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProjectTechnologiesFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  technologyId?: ModelIDInput | null,
  and?: Array< ModelProjectTechnologiesFilterInput | null > | null,
  or?: Array< ModelProjectTechnologiesFilterInput | null > | null,
  not?: ModelProjectTechnologiesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTechnologyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTechnologyFilterInput | null > | null,
  or?: Array< ModelSubscriptionTechnologyFilterInput | null > | null,
};

export type ModelSubscriptionTechnologyExperienceLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTechnologyExperienceLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionTechnologyExperienceLevelFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionProjectTechnologiesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectId?: ModelSubscriptionIDInput | null,
  technologyId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProjectTechnologiesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectTechnologiesFilterInput | null > | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTechnologyMutationVariables = {
  input: CreateTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type CreateTechnologyMutation = {
  createTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTechnologyMutationVariables = {
  input: UpdateTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type UpdateTechnologyMutation = {
  updateTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTechnologyMutationVariables = {
  input: DeleteTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type DeleteTechnologyMutation = {
  deleteTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTechnologyExperienceLevelMutationVariables = {
  input: CreateTechnologyExperienceLevelInput,
  condition?: ModelTechnologyExperienceLevelConditionInput | null,
};

export type CreateTechnologyExperienceLevelMutation = {
  createTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type UpdateTechnologyExperienceLevelMutationVariables = {
  input: UpdateTechnologyExperienceLevelInput,
  condition?: ModelTechnologyExperienceLevelConditionInput | null,
};

export type UpdateTechnologyExperienceLevelMutation = {
  updateTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type DeleteTechnologyExperienceLevelMutationVariables = {
  input: DeleteTechnologyExperienceLevelInput,
  condition?: ModelTechnologyExperienceLevelConditionInput | null,
};

export type DeleteTechnologyExperienceLevelMutation = {
  deleteTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProjectTechnologiesMutationVariables = {
  input: CreateProjectTechnologiesInput,
  condition?: ModelProjectTechnologiesConditionInput | null,
};

export type CreateProjectTechnologiesMutation = {
  createProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProjectTechnologiesMutationVariables = {
  input: UpdateProjectTechnologiesInput,
  condition?: ModelProjectTechnologiesConditionInput | null,
};

export type UpdateProjectTechnologiesMutation = {
  updateProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProjectTechnologiesMutationVariables = {
  input: DeleteProjectTechnologiesInput,
  condition?: ModelProjectTechnologiesConditionInput | null,
};

export type DeleteProjectTechnologiesMutation = {
  deleteProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTechnologyQueryVariables = {
  id: string,
};

export type GetTechnologyQuery = {
  getTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTechnologiesQueryVariables = {
  filter?: ModelTechnologyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTechnologiesQuery = {
  listTechnologies?:  {
    __typename: "ModelTechnologyConnection",
    items:  Array< {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTechnologiesQueryVariables = {
  filter?: ModelTechnologyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTechnologiesQuery = {
  syncTechnologies?:  {
    __typename: "ModelTechnologyConnection",
    items:  Array< {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTechnologyExperienceLevelQueryVariables = {
  id: string,
};

export type GetTechnologyExperienceLevelQuery = {
  getTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type ListTechnologyExperienceLevelsQueryVariables = {
  filter?: ModelTechnologyExperienceLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTechnologyExperienceLevelsQuery = {
  listTechnologyExperienceLevels?:  {
    __typename: "ModelTechnologyExperienceLevelConnection",
    items:  Array< {
      __typename: "TechnologyExperienceLevel",
      id: string,
      level: ExperienceLevel,
      technology?:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      technologyExperienceLevelsId?: string | null,
      userExperienceLevelsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTechnologyExperienceLevelsQueryVariables = {
  filter?: ModelTechnologyExperienceLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTechnologyExperienceLevelsQuery = {
  syncTechnologyExperienceLevels?:  {
    __typename: "ModelTechnologyExperienceLevelConnection",
    items:  Array< {
      __typename: "TechnologyExperienceLevel",
      id: string,
      level: ExperienceLevel,
      technology?:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      technologyExperienceLevelsId?: string | null,
      userExperienceLevelsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProjectTechnologiesQueryVariables = {
  id: string,
};

export type GetProjectTechnologiesQuery = {
  getProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProjectTechnologiesQueryVariables = {
  filter?: ModelProjectTechnologiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectTechnologiesQuery = {
  listProjectTechnologies?:  {
    __typename: "ModelProjectTechnologiesConnection",
    items:  Array< {
      __typename: "ProjectTechnologies",
      id: string,
      projectId: string,
      technologyId: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      technology:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProjectTechnologiesQueryVariables = {
  filter?: ModelProjectTechnologiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectTechnologiesQuery = {
  syncProjectTechnologies?:  {
    __typename: "ModelProjectTechnologiesConnection",
    items:  Array< {
      __typename: "ProjectTechnologies",
      id: string,
      projectId: string,
      technologyId: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      technology:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProjectTechnologiesByProjectIdQueryVariables = {
  projectId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectTechnologiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectTechnologiesByProjectIdQuery = {
  projectTechnologiesByProjectId?:  {
    __typename: "ModelProjectTechnologiesConnection",
    items:  Array< {
      __typename: "ProjectTechnologies",
      id: string,
      projectId: string,
      technologyId: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      technology:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProjectTechnologiesByTechnologyIdQueryVariables = {
  technologyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectTechnologiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectTechnologiesByTechnologyIdQuery = {
  projectTechnologiesByTechnologyId?:  {
    __typename: "ModelProjectTechnologiesConnection",
    items:  Array< {
      __typename: "ProjectTechnologies",
      id: string,
      projectId: string,
      technologyId: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      technology:  {
        __typename: "Technology",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    technologies?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTechnologySubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyFilterInput | null,
};

export type OnCreateTechnologySubscription = {
  onCreateTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTechnologySubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyFilterInput | null,
};

export type OnUpdateTechnologySubscription = {
  onUpdateTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTechnologySubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyFilterInput | null,
};

export type OnDeleteTechnologySubscription = {
  onDeleteTechnology?:  {
    __typename: "Technology",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        technologyId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTechnologyExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyExperienceLevelFilterInput | null,
};

export type OnCreateTechnologyExperienceLevelSubscription = {
  onCreateTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type OnUpdateTechnologyExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyExperienceLevelFilterInput | null,
};

export type OnUpdateTechnologyExperienceLevelSubscription = {
  onUpdateTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type OnDeleteTechnologyExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionTechnologyExperienceLevelFilterInput | null,
};

export type OnDeleteTechnologyExperienceLevelSubscription = {
  onDeleteTechnologyExperienceLevel?:  {
    __typename: "TechnologyExperienceLevel",
    id: string,
    level: ExperienceLevel,
    technology?:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    technologyExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    experienceLevels?:  {
      __typename: "ModelTechnologyExperienceLevelConnection",
      items:  Array< {
        __typename: "TechnologyExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        technologyExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProjectTechnologiesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTechnologiesFilterInput | null,
};

export type OnCreateProjectTechnologiesSubscription = {
  onCreateProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProjectTechnologiesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTechnologiesFilterInput | null,
};

export type OnUpdateProjectTechnologiesSubscription = {
  onUpdateProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProjectTechnologiesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTechnologiesFilterInput | null,
};

export type OnDeleteProjectTechnologiesSubscription = {
  onDeleteProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    technologyId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      technologies?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    technology:  {
      __typename: "Technology",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelTechnologyExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
