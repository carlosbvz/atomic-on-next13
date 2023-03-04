"use client";

import Network, { projectToNetworkAdapter } from '@/atoms/network';
import { listProjects } from '@/services/projectServices';
import { useEffect, useState } from 'react';

export default function NetworkPanel() {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const projectsData = await listProjects();
      setProjects(
        projectToNetworkAdapter(projectsData.data?.listProjects?.items as any)
      );
    }
    loadData();
  }, []);

  return (
    <div>
      <Network data={projects} />
    </div>
  );
}
