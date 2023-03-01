// import { DataStore } from "@aws-amplify/datastore";
// import { Project } from "../models";

// export async function listProjects() {
//   return await DataStore.query(Project);
// }

import { ListProjectsQuery } from '@/API';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
// import * as queries from "@/graphql/queries";

const customQuery = /* GraphQL */ `
  query MyQuery {
    listProjects {
      items {
        id
        name
        skills {
          items {
            skill {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export async function listProjects() {
  const res = await API.graphql<GraphQLQuery<ListProjectsQuery>>({
    query: customQuery,
  });
  return res;
}
