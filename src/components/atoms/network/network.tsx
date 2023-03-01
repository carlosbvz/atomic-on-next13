"use client";

import { useEffect, useRef } from "react";
import { ForcePropertiesType, NetworkProps } from "./types";
import NetworkCreator from "./utils";

declare const window: any;

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
  const { data, properties } = props;

  if (!data) return null;
  const graphEl = useRef(null);

  useEffect(() => {
    if (!data) return;

    const graphNode: any = graphEl.current;
    if (window.d3) {
      NetworkCreator.init({
        d3lib: window.d3,
        data,
        anchor: graphNode,
        properties: properties || defaultProperties,
      });
    } else {
      console.log("D3 not loaded");
    }
  }, [data]);

  return (
    <div>
      <svg
        ref={graphEl}
        style={{
          width: "100%",
          height: "500px",
        }}
      ></svg>
    </div>
  );
}
