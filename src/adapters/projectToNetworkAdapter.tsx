import { GraphDataType, ProjectAdapterType } from "@/atoms/network/types";

/**
 * @description This is a wrapper for the Network component
 * when using Project data
 * @param props ProjectToNetworkType
 * @returns  Network
 */
export function projectToNetworkAdapter(
  data: ProjectAdapterType[]
): GraphDataType {
  const nodes: any = [];
  const links: any = [];

  data?.forEach?.((project: ProjectAdapterType, index: number) => {
    const { name: projectName } = project;

    project.skills?.items?.forEach?.((skill) => {
      const { name: skillName } = skill?.skill || {};
      if (!skillName) return;

      // Has to be always created
      links.push({
        source: skillName,
        target: projectName,
        value: index,
      });

      // Check if the node already exists
      const nodeExists = nodes.find((node: any) => node.id === skillName);
      if (nodeExists) return;
      nodes.push({
        id: skillName,
        group: index,
        color: "red",
      });
    });

    nodes.push({
      id: projectName,
      group: index,
    });
  });

  return {
    nodes,
    links,
  };
}
