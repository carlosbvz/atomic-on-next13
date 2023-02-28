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
  skills?: ModelProjectTechnologiesConnection | null,
  users?: ModelProjectUsersConnection | null,
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
  skillId: string,
  project: Project,
  skill: Skill,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  name: string,
  projects?: ModelProjectTechnologiesConnection | null,
  experienceLevels?: ModelSkillExperienceLevelConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSkillExperienceLevelConnection = {
  __typename: "ModelSkillExperienceLevelConnection",
  items:  Array<SkillExperienceLevel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SkillExperienceLevel = {
  __typename: "SkillExperienceLevel",
  id: string,
  level: ExperienceLevel,
  skill?: Skill | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  skillExperienceLevelsId?: string | null,
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
  experienceLevels?: ModelSkillExperienceLevelConnection | null,
  projects?: ModelProjectUsersConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProjectUsersConnection = {
  __typename: "ModelProjectUsersConnection",
  items:  Array<ProjectUsers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProjectUsers = {
  __typename: "ProjectUsers",
  id: string,
  projectId: string,
  userId: string,
  project: Project,
  user: User,
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

export type CreateSkillInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSkillInput = {
  id: string,
  _version?: number | null,
};

export type CreateSkillExperienceLevelInput = {
  id?: string | null,
  level: ExperienceLevel,
  _version?: number | null,
  skillExperienceLevelsId?: string | null,
  userExperienceLevelsId?: string | null,
};

export type ModelSkillExperienceLevelConditionInput = {
  level?: ModelExperienceLevelInput | null,
  and?: Array< ModelSkillExperienceLevelConditionInput | null > | null,
  or?: Array< ModelSkillExperienceLevelConditionInput | null > | null,
  not?: ModelSkillExperienceLevelConditionInput | null,
  skillExperienceLevelsId?: ModelIDInput | null,
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

export type UpdateSkillExperienceLevelInput = {
  id: string,
  level?: ExperienceLevel | null,
  _version?: number | null,
  skillExperienceLevelsId?: string | null,
  userExperienceLevelsId?: string | null,
};

export type DeleteSkillExperienceLevelInput = {
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
  skillId: string,
  _version?: number | null,
};

export type ModelProjectTechnologiesConditionInput = {
  projectId?: ModelIDInput | null,
  skillId?: ModelIDInput | null,
  and?: Array< ModelProjectTechnologiesConditionInput | null > | null,
  or?: Array< ModelProjectTechnologiesConditionInput | null > | null,
  not?: ModelProjectTechnologiesConditionInput | null,
};

export type UpdateProjectTechnologiesInput = {
  id: string,
  projectId?: string | null,
  skillId?: string | null,
  _version?: number | null,
};

export type DeleteProjectTechnologiesInput = {
  id: string,
  _version?: number | null,
};

export type CreateProjectUsersInput = {
  id?: string | null,
  projectId: string,
  userId: string,
  _version?: number | null,
};

export type ModelProjectUsersConditionInput = {
  projectId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelProjectUsersConditionInput | null > | null,
  or?: Array< ModelProjectUsersConditionInput | null > | null,
  not?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersInput = {
  id: string,
  projectId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteProjectUsersInput = {
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

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSkillExperienceLevelFilterInput = {
  id?: ModelIDInput | null,
  level?: ModelExperienceLevelInput | null,
  and?: Array< ModelSkillExperienceLevelFilterInput | null > | null,
  or?: Array< ModelSkillExperienceLevelFilterInput | null > | null,
  not?: ModelSkillExperienceLevelFilterInput | null,
  skillExperienceLevelsId?: ModelIDInput | null,
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
  skillId?: ModelIDInput | null,
  and?: Array< ModelProjectTechnologiesFilterInput | null > | null,
  or?: Array< ModelProjectTechnologiesFilterInput | null > | null,
  not?: ModelProjectTechnologiesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProjectUsersFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelProjectUsersFilterInput | null > | null,
  or?: Array< ModelProjectUsersFilterInput | null > | null,
  not?: ModelProjectUsersFilterInput | null,
};

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

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type ModelSubscriptionSkillExperienceLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillExperienceLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillExperienceLevelFilterInput | null > | null,
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
  skillId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProjectTechnologiesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectTechnologiesFilterInput | null > | null,
};

export type ModelSubscriptionProjectUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProjectUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectUsersFilterInput | null > | null,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type CreateSkillExperienceLevelMutationVariables = {
  input: CreateSkillExperienceLevelInput,
  condition?: ModelSkillExperienceLevelConditionInput | null,
};

export type CreateSkillExperienceLevelMutation = {
  createSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type UpdateSkillExperienceLevelMutationVariables = {
  input: UpdateSkillExperienceLevelInput,
  condition?: ModelSkillExperienceLevelConditionInput | null,
};

export type UpdateSkillExperienceLevelMutation = {
  updateSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type DeleteSkillExperienceLevelMutationVariables = {
  input: DeleteSkillExperienceLevelInput,
  condition?: ModelSkillExperienceLevelConditionInput | null,
};

export type DeleteSkillExperienceLevelMutation = {
  deleteSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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

export type CreateProjectTechnologiesMutationVariables = {
  input: CreateProjectTechnologiesInput,
  condition?: ModelProjectTechnologiesConditionInput | null,
};

export type CreateProjectTechnologiesMutation = {
  createProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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

export type CreateProjectUsersMutationVariables = {
  input: CreateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type CreateProjectUsersMutation = {
  createProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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

export type UpdateProjectUsersMutationVariables = {
  input: UpdateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersMutation = {
  updateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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

export type DeleteProjectUsersMutationVariables = {
  input: DeleteProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type DeleteProjectUsersMutation = {
  deleteProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
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
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
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

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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

export type SyncSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillsQuery = {
  syncSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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

export type GetSkillExperienceLevelQueryVariables = {
  id: string,
};

export type GetSkillExperienceLevelQuery = {
  getSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type ListSkillExperienceLevelsQueryVariables = {
  filter?: ModelSkillExperienceLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillExperienceLevelsQuery = {
  listSkillExperienceLevels?:  {
    __typename: "ModelSkillExperienceLevelConnection",
    items:  Array< {
      __typename: "SkillExperienceLevel",
      id: string,
      level: ExperienceLevel,
      skill?:  {
        __typename: "Skill",
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
      skillExperienceLevelsId?: string | null,
      userExperienceLevelsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSkillExperienceLevelsQueryVariables = {
  filter?: ModelSkillExperienceLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillExperienceLevelsQuery = {
  syncSkillExperienceLevels?:  {
    __typename: "ModelSkillExperienceLevelConnection",
    items:  Array< {
      __typename: "SkillExperienceLevel",
      id: string,
      level: ExperienceLevel,
      skill?:  {
        __typename: "Skill",
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
      skillExperienceLevelsId?: string | null,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
      skillId: string,
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
      skill:  {
        __typename: "Skill",
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
      skillId: string,
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
      skill:  {
        __typename: "Skill",
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
      skillId: string,
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
      skill:  {
        __typename: "Skill",
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

export type ProjectTechnologiesBySkillIdQueryVariables = {
  skillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectTechnologiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectTechnologiesBySkillIdQuery = {
  projectTechnologiesBySkillId?:  {
    __typename: "ModelProjectTechnologiesConnection",
    items:  Array< {
      __typename: "ProjectTechnologies",
      id: string,
      projectId: string,
      skillId: string,
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
      skill:  {
        __typename: "Skill",
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

export type GetProjectUsersQueryVariables = {
  id: string,
};

export type GetProjectUsersQuery = {
  getProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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

export type ListProjectUsersQueryVariables = {
  filter?: ModelProjectUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectUsersQuery = {
  listProjectUsers?:  {
    __typename: "ModelProjectUsersConnection",
    items:  Array< {
      __typename: "ProjectUsers",
      id: string,
      projectId: string,
      userId: string,
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
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
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

export type SyncProjectUsersQueryVariables = {
  filter?: ModelProjectUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectUsersQuery = {
  syncProjectUsers?:  {
    __typename: "ModelProjectUsersConnection",
    items:  Array< {
      __typename: "ProjectUsers",
      id: string,
      projectId: string,
      userId: string,
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
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
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

export type ProjectUsersByProjectIdQueryVariables = {
  projectId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectUsersByProjectIdQuery = {
  projectUsersByProjectId?:  {
    __typename: "ModelProjectUsersConnection",
    items:  Array< {
      __typename: "ProjectUsers",
      id: string,
      projectId: string,
      userId: string,
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
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
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

export type ProjectUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectUsersByUserIdQuery = {
  projectUsersByUserId?:  {
    __typename: "ModelProjectUsersConnection",
    items:  Array< {
      __typename: "ProjectUsers",
      id: string,
      projectId: string,
      userId: string,
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
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
    skills?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    projects?:  {
      __typename: "ModelProjectTechnologiesConnection",
      items:  Array< {
        __typename: "ProjectTechnologies",
        id: string,
        projectId: string,
        skillId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
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

export type OnCreateSkillExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionSkillExperienceLevelFilterInput | null,
};

export type OnCreateSkillExperienceLevelSubscription = {
  onCreateSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type OnUpdateSkillExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionSkillExperienceLevelFilterInput | null,
};

export type OnUpdateSkillExperienceLevelSubscription = {
  onUpdateSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
    userExperienceLevelsId?: string | null,
  } | null,
};

export type OnDeleteSkillExperienceLevelSubscriptionVariables = {
  filter?: ModelSubscriptionSkillExperienceLevelFilterInput | null,
};

export type OnDeleteSkillExperienceLevelSubscription = {
  onDeleteSkillExperienceLevel?:  {
    __typename: "SkillExperienceLevel",
    id: string,
    level: ExperienceLevel,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
    skillExperienceLevelsId?: string | null,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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
      __typename: "ModelSkillExperienceLevelConnection",
      items:  Array< {
        __typename: "SkillExperienceLevel",
        id: string,
        level: ExperienceLevel,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        skillExperienceLevelsId?: string | null,
        userExperienceLevelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        projectId: string,
        userId: string,
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

export type OnCreateProjectTechnologiesSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTechnologiesFilterInput | null,
};

export type OnCreateProjectTechnologiesSubscription = {
  onCreateProjectTechnologies?:  {
    __typename: "ProjectTechnologies",
    id: string,
    projectId: string,
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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
    skillId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      projects?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
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

export type OnCreateProjectUsersSubscriptionVariables = {
  filter?: ModelSubscriptionProjectUsersFilterInput | null,
};

export type OnCreateProjectUsersSubscription = {
  onCreateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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

export type OnUpdateProjectUsersSubscriptionVariables = {
  filter?: ModelSubscriptionProjectUsersFilterInput | null,
};

export type OnUpdateProjectUsersSubscription = {
  onUpdateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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

export type OnDeleteProjectUsersSubscriptionVariables = {
  filter?: ModelSubscriptionProjectUsersFilterInput | null,
};

export type OnDeleteProjectUsersSubscription = {
  onDeleteProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    projectId: string,
    userId: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      skills?:  {
        __typename: "ModelProjectTechnologiesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      experienceLevels?:  {
        __typename: "ModelSkillExperienceLevelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      projects?:  {
        __typename: "ModelProjectUsersConnection",
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
