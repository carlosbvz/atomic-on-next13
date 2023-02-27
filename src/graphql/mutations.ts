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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTechnology = /* GraphQL */ `
  mutation CreateTechnology(
    $input: CreateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    createTechnology(input: $input, condition: $condition) {
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
export const updateTechnology = /* GraphQL */ `
  mutation UpdateTechnology(
    $input: UpdateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    updateTechnology(input: $input, condition: $condition) {
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
export const deleteTechnology = /* GraphQL */ `
  mutation DeleteTechnology(
    $input: DeleteTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    deleteTechnology(input: $input, condition: $condition) {
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
export const createTechnologyExperienceLevel = /* GraphQL */ `
  mutation CreateTechnologyExperienceLevel(
    $input: CreateTechnologyExperienceLevelInput!
    $condition: ModelTechnologyExperienceLevelConditionInput
  ) {
    createTechnologyExperienceLevel(input: $input, condition: $condition) {
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
export const updateTechnologyExperienceLevel = /* GraphQL */ `
  mutation UpdateTechnologyExperienceLevel(
    $input: UpdateTechnologyExperienceLevelInput!
    $condition: ModelTechnologyExperienceLevelConditionInput
  ) {
    updateTechnologyExperienceLevel(input: $input, condition: $condition) {
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
export const deleteTechnologyExperienceLevel = /* GraphQL */ `
  mutation DeleteTechnologyExperienceLevel(
    $input: DeleteTechnologyExperienceLevelInput!
    $condition: ModelTechnologyExperienceLevelConditionInput
  ) {
    deleteTechnologyExperienceLevel(input: $input, condition: $condition) {
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
export const createProjectTechnologies = /* GraphQL */ `
  mutation CreateProjectTechnologies(
    $input: CreateProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    createProjectTechnologies(input: $input, condition: $condition) {
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
export const updateProjectTechnologies = /* GraphQL */ `
  mutation UpdateProjectTechnologies(
    $input: UpdateProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    updateProjectTechnologies(input: $input, condition: $condition) {
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
export const deleteProjectTechnologies = /* GraphQL */ `
  mutation DeleteProjectTechnologies(
    $input: DeleteProjectTechnologiesInput!
    $condition: ModelProjectTechnologiesConditionInput
  ) {
    deleteProjectTechnologies(input: $input, condition: $condition) {
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
