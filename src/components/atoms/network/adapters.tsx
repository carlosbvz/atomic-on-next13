import { GraphDataType, ProjectAdapterType } from "./types";

function getNodes(data: ProjectAdapterType[]) {
  return (
    data?.map?.((project: ProjectAdapterType, index: number) => {
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
  data: ProjectAdapterType[]
): GraphDataType {
  console.log("data", data);

  return {
    nodes: getNodes(data),
    links: [],
  };
}
