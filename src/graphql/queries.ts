/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      technologies {
        items {
          id
          projectId
          technologyId
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
        technologies {
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
        technologies {
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
export const getTechnology = /* GraphQL */ `
  query GetTechnology($id: ID!) {
    getTechnology(id: $id) {
      id
      name
      projects {
        items {
          id
          projectId
          technologyId
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
          technologyExperienceLevelsId
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
export const listTechnologies = /* GraphQL */ `
  query ListTechnologies(
    $filter: ModelTechnologyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechnologies(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncTechnologies = /* GraphQL */ `
  query SyncTechnologies(
    $filter: ModelTechnologyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTechnologies(
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
export const getTechnologyExperienceLevel = /* GraphQL */ `
  query GetTechnologyExperienceLevel($id: ID!) {
    getTechnologyExperienceLevel(id: $id) {
      id
      level
      technology {
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
      technologyExperienceLevelsId
      userExperienceLevelsId
    }
  }
`;
export const listTechnologyExperienceLevels = /* GraphQL */ `
  query ListTechnologyExperienceLevels(
    $filter: ModelTechnologyExperienceLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechnologyExperienceLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        level
        technology {
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
        technologyExperienceLevelsId
        userExperienceLevelsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTechnologyExperienceLevels = /* GraphQL */ `
  query SyncTechnologyExperienceLevels(
    $filter: ModelTechnologyExperienceLevelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTechnologyExperienceLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        level
        technology {
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
        technologyExperienceLevelsId
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
          technologyExperienceLevelsId
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
      technologyId
      project {
        id
        name
        technologies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      technology {
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
        technologyId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        technology {
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
        technologyId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        technology {
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
        technologyId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        technology {
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
export const projectTechnologiesByTechnologyId = /* GraphQL */ `
  query ProjectTechnologiesByTechnologyId(
    $technologyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTechnologiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTechnologiesByTechnologyId(
      technologyId: $technologyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        technologyId
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        technology {
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
