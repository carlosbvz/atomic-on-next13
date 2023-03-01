export const listProjectsWithSkillsAndUsers = /* GraphQL */ `
  query listProjects(
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
          items {
            skill {
              id
              name
            }
          }
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
    }
  }
`;
