import { Project } from "../../../models";

export interface NetworkProps {
  data: GraphDataType;
  properties?: ForcePropertiesType;
}

export type ProjectToNetworkType = Project[];

export type ForcePropertiesType = {
  center: {
    x: number;
    y: number;
  };
  charge: {
    enabled: boolean;
    strength: number;
    distanceMin: number;
    distanceMax: number;
  };
  collide: {
    enabled: boolean;
    strength: number;
    radius: number;
    iterations: number;
  };
  forceX: {
    enabled: boolean;
    strength: number;
    x: number;
  };
  forceY: {
    enabled: boolean;
    strength: number;
    y: number;
  };
  link: {
    enabled: boolean;
    distance: number;
    iterations: number;
  };
};
export type GraphNodeType = {
  id: string;
  group: number;
  attr?: Function;
  append?: Function;
};
export type GraphLinkType = {
  source: string;
  target: string;
  value: number;
  attr: Function;
};
export type GraphDataType = {
  nodes: GraphNodeType[];
  links: GraphLinkType[];
};
export type SvgTypeType = {
  attr: Function;
  selectAll: Function;
  append: Function;
  node: Function;
};
