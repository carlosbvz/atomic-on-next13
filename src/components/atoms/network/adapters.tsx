import { Project } from "../../../models";
import { GraphDataType, ProjectToNetworkType } from "./types";

function getNodes(data: ProjectToNetworkType) {
  return (
    data?.map?.((project: Project, index: number) => {
      return {
        id: project.name,
        group: index,
      };
    }) || []
  );
}

/**
 * @description This is a wrapper for the Network component
 * when using Project data
 * @param props ProjectToNetworkType
 * @returns  Network
 */
export function projectToNetworkAdapter(
  data: ProjectToNetworkType
): GraphDataType {
  console.log("data", data);

  return {
    nodes: getNodes(data),
    links: [],
  };
}
