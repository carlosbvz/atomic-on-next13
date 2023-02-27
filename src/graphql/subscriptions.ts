/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateTechnology = /* GraphQL */ `
  subscription OnCreateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onCreateTechnology(filter: $filter) {
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
export const onUpdateTechnology = /* GraphQL */ `
  subscription OnUpdateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onUpdateTechnology(filter: $filter) {
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
export const onDeleteTechnology = /* GraphQL */ `
  subscription OnDeleteTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onDeleteTechnology(filter: $filter) {
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
export const onCreateTechnologyExperienceLevel = /* GraphQL */ `
  subscription OnCreateTechnologyExperienceLevel(
    $filter: ModelSubscriptionTechnologyExperienceLevelFilterInput
  ) {
    onCreateTechnologyExperienceLevel(filter: $filter) {
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
export const onUpdateTechnologyExperienceLevel = /* GraphQL */ `
  subscription OnUpdateTechnologyExperienceLevel(
    $filter: ModelSubscriptionTechnologyExperienceLevelFilterInput
  ) {
    onUpdateTechnologyExperienceLevel(filter: $filter) {
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
export const onDeleteTechnologyExperienceLevel = /* GraphQL */ `
  subscription OnDeleteTechnologyExperienceLevel(
    $filter: ModelSubscriptionTechnologyExperienceLevelFilterInput
  ) {
    onDeleteTechnologyExperienceLevel(filter: $filter) {
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
export const onCreateProjectTechnologies = /* GraphQL */ `
  subscription OnCreateProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onCreateProjectTechnologies(filter: $filter) {
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
export const onUpdateProjectTechnologies = /* GraphQL */ `
  subscription OnUpdateProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onUpdateProjectTechnologies(filter: $filter) {
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
export const onDeleteProjectTechnologies = /* GraphQL */ `
  subscription OnDeleteProjectTechnologies(
    $filter: ModelSubscriptionProjectTechnologiesFilterInput
  ) {
    onDeleteProjectTechnologies(filter: $filter) {
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
