/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      skills {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      skills {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      skills {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      projects {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      projects {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      projects {
        items {
          id
          projectId
          skillId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSkillExperienceLevel = /* GraphQL */ `
  mutation CreateSkillExperienceLevel(
    $input: CreateSkillExperienceLevelInput!
    $condition: ModelSkillExperienceLevelConditionInput
  ) {
    createSkillExperienceLevel(input: $input, condition: $condition) {
      id
      level
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      skillExperienceLevelsId
      userExperienceLevelsId
    }
  }
`;
export const updateSkillExperienceLevel = /* GraphQL */ `
  mutation UpdateSkillExperienceLevel(
    $input: UpdateSkillExperienceLevelInput!
    $condition: ModelSkillExperienceLevelConditionInput
  ) {
    updateSkillExperienceLevel(input: $input, condition: $condition) {
      id
      level
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      skillExperienceLevelsId
      userExperienceLevelsId
    }
  }
`;
export const deleteSkillExperienceLevel = /* GraphQL */ `
  mutation DeleteSkillExperienceLevel(
    $input: DeleteSkillExperienceLevelInput!
    $condition: ModelSkillExperienceLevelConditionInput
  ) {
    deleteSkillExperienceLevel(input: $input, condition: $condition) {
      id
      level
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      skillExperienceLevelsId
      userExperienceLevelsId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      experienceLevels {
        items {
          id
          level
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          skillExperienceLevelsId
          userExperienceLevelsId
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProjectTechnologies = /* GraphQL */ `
  mutation CreateProjectTechnologies(
    $input: CreateProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    createProjectTechnologies(input: $input, condition: $condition) {
      id
      projectId
      skillId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProjectTechnologies = /* GraphQL */ `
  mutation UpdateProjectTechnologies(
    $input: UpdateProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    updateProjectTechnologies(input: $input, condition: $condition) {
      id
      projectId
      skillId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProjectTechnologies = /* GraphQL */ `
  mutation DeleteProjectTechnologies(
    $input: DeleteProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    deleteProjectTechnologies(input: $input, condition: $condition) {
      id
      projectId
      skillId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        projects {
          nextToken
          startedAt
        }
        experienceLevels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProjectUsers = /* GraphQL */ `
  mutation CreateProjectUsers(
    $input: CreateProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    createProjectUsers(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProjectUsers = /* GraphQL */ `
  mutation UpdateProjectUsers(
    $input: UpdateProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    updateProjectUsers(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProjectUsers = /* GraphQL */ `
  mutation DeleteProjectUsers(
    $input: DeleteProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    deleteProjectUsers(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        skills {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        email
        experienceLevels {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
