/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSkillExperienceLevel = /* GraphQL */ `
  query GetSkillExperienceLevel($id: ID!) {
    getSkillExperienceLevel(id: $id) {
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
export const listSkillExperienceLevels = /* GraphQL */ `
  query ListSkillExperienceLevels(
    $filter: ModelSkillExperienceLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillExperienceLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        level
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncSkillExperienceLevels = /* GraphQL */ `
  query SyncSkillExperienceLevels(
    $filter: ModelSkillExperienceLevelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillExperienceLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        level
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProjectTechnologies = /* GraphQL */ `
  query GetProjectTechnologies($id: ID!) {
    getProjectTechnologies(id: $id) {
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
export const listProjectTechnologies = /* GraphQL */ `
  query ListProjectTechnologies(
    $filter: ModelProjectTechnologiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTechnologies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        skillId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncProjectTechnologies = /* GraphQL */ `
  query SyncProjectTechnologies(
    $filter: ModelProjectTechnologiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectTechnologies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectId
        skillId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const projectTechnologiesByProjectId = /* GraphQL */ `
  query ProjectTechnologiesByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTechnologiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTechnologiesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        skillId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const projectTechnologiesBySkillId = /* GraphQL */ `
  query ProjectTechnologiesBySkillId(
    $skillId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTechnologiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTechnologiesBySkillId(
      skillId: $skillId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        skillId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        skill {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const getProjectUsers = /* GraphQL */ `
  query GetProjectUsers($id: ID!) {
    getProjectUsers(id: $id) {
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
export const listProjectUsers = /* GraphQL */ `
  query ListProjectUsers(
    $filter: ModelProjectUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        userId
        project {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncProjectUsers = /* GraphQL */ `
  query SyncProjectUsers(
    $filter: ModelProjectUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const projectUsersByProjectId = /* GraphQL */ `
  query ProjectUsersByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectUsersByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const projectUsersByUserId = /* GraphQL */ `
  query ProjectUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
