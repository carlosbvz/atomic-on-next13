import { DataStore } from "@aws-amplify/datastore";
import { Project } from "../models";

export async function listProjects() {
  return await DataStore.query(Project);
}
