import { Project } from "../../../models";
import { GraphDataType, ProjectToNetworkType } from "./types";

/**
 * @description This is a wrapper for the Network component
 * when using Project data
 * @param props ProjectToNetworkType
 * @returns  Network
 */
export function projectToNetworkAdapter(
  data: ProjectToNetworkType
): GraphDataType {
  function getNodes() {
    return data.map((project: Project, index: number) => {
      return {
        id: project.name,
        group: index,
      };
    });
  }
  return {
    nodes: getNodes(),
    links: [],
  };
}
