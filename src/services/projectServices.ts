import { ListProjectsQuery } from '@/API';
import { listProjectsWithSkillsAndUsers } from '@/graphql/custom/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';

export async function listProjects() {
  const res = await API.graphql<GraphQLQuery<ListProjectsQuery>>({
    query: listProjectsWithSkillsAndUsers,
  });
  return res;
}
