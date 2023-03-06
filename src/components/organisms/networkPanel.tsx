"use client";

import { projectToNetworkAdapter } from '@/adapters/projectToNetworkAdapter';
import Network from '@/organisms/network';
import { listProjects } from '@/services/projectServices';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledNetworkPanel = styled.div`
  svg {
    flex-basis: 100%;
    min-width: 200px;
  }
  .links line {
    stroke: #aaa;
  }
  .nodes circle {
    pointer-events: all;
  }
`;

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
    <StyledNetworkPanel>
      <Network data={projects} />
    </StyledNetworkPanel>
  );
}
