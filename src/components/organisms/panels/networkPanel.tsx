"use client";

import Network, { projectToNetworkAdapter } from "@/atoms/network";
import { listProjects } from "@/services/projectServices";
import { useEffect, useState } from "react";
import mockData from "./graph.json";
import mockData2 from "./graph2.json";

export default function NetworkPanel() {
  const [data, setData] = useState(mockData);
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const projectsData = await listProjects();
      console.log("projectsData", projectsData);
      setProjects(projectToNetworkAdapter(projectsData));
    }
    loadData();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          if (data === mockData) {
            setData(mockData2);
          } else {
            setData(mockData);
          }
        }}
      >
        Re Create
      </button>
      <Network data={projects} />
    </div>
  );
}
