"use client";

import NetworkCreator from "@/utils/networkCreator";
import { useEffect, useRef, useState } from "react";
import mockData from "./graph.json";
import mockData2 from "./graph2.json";

declare const window: any;

// values for all forces
const forceProperties = {
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

type Props = {};

export default function Network(props: Props) {
  const [data, setData] = useState(mockData);
  const graphEl = useRef(null);

  useEffect(() => {
    const graphNode: any = graphEl.current;
    if (window.d3) {
      NetworkCreator.init({
        d3lib: window.d3,
        data,
        anchor: graphNode,
        properties: forceProperties,
      });
    } else {
      console.log("D3 not loaded");
    }
  }, [data]);

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
