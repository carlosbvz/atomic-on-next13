/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
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
export const onCreateSkillExperienceLevel = /* GraphQL */ `
  subscription OnCreateSkillExperienceLevel(
    $filter: ModelSubscriptionSkillExperienceLevelFilterInput
  ) {
    onCreateSkillExperienceLevel(filter: $filter) {
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
export const onUpdateSkillExperienceLevel = /* GraphQL */ `
  subscription OnUpdateSkillExperienceLevel(
    $filter: ModelSubscriptionSkillExperienceLevelFilterInput
  ) {
    onUpdateSkillExperienceLevel(filter: $filter) {
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
export const onDeleteSkillExperienceLevel = /* GraphQL */ `
  subscription OnDeleteSkillExperienceLevel(
    $filter: ModelSubscriptionSkillExperienceLevelFilterInput
  ) {
    onDeleteSkillExperienceLevel(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProjectTechnologies = /* GraphQL */ `
  subscription OnCreateProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onCreateProjectTechnologies(filter: $filter) {
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
export const onUpdateProjectTechnologies = /* GraphQL */ `
  subscription OnUpdateProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onUpdateProjectTechnologies(filter: $filter) {
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
export const onDeleteProjectTechnologies = /* GraphQL */ `
  subscription OnDeleteProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onDeleteProjectTechnologies(filter: $filter) {
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
export const onCreateProjectUsers = /* GraphQL */ `
  subscription OnCreateProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
  ) {
    onCreateProjectUsers(filter: $filter) {
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
export const onUpdateProjectUsers = /* GraphQL */ `
  subscription OnUpdateProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
  ) {
    onUpdateProjectUsers(filter: $filter) {
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
export const onDeleteProjectUsers = /* GraphQL */ `
  subscription OnDeleteProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
  ) {
    onDeleteProjectUsers(filter: $filter) {
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
