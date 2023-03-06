"use client";

import NetworkCreator, { ForcePropertiesType, GraphDataType, GraphNodeType } from '@/utils/NetworkUtils';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface NetworkProps {
  data: GraphDataType;
  properties?: ForcePropertiesType;
}

declare const window: any;

const StyledSvg = styled.svg`
  width: 100%;
  height: 500px;
`;

// Default values for all forces
const defaultProperties: ForcePropertiesType = {
  center: {
    x: 0.5,
    y: 0.5,
  },
  charge: {
    enabled: true,
    strength: -30,
    distanceMin: 1,
    distanceMax: 2000,
  },
  collide: {
    enabled: true,
    strength: 0.7,
    iterations: 1,
    radius: 5,
  },
  forceX: {
    enabled: false,
    strength: 0.1,
    x: 0.5,
  },
  forceY: {
    enabled: false,
    strength: 0.1,
    y: 0.5,
  },
  link: {
    enabled: true,
    distance: 40,
    iterations: 1,
  },
};

export default function Network(props: NetworkProps) {
  const { data, properties = defaultProperties } = props;
  const graphEl = useRef(null);

  useEffect(() => {
    if (!data) return;

    const anchor: GraphNodeType | null = graphEl.current;
    const d3lib = window?.d3;
    if (d3lib) {
      NetworkCreator.init({
        d3lib,
        data,
        anchor,
        properties,
      });
    } else {
      console.log("D3 not loaded");
    }
  }, [data, properties]);

  return <StyledSvg ref={graphEl} />;
}
