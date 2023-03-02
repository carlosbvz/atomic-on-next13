export interface NetworkProps {
  data: GraphDataType;
  properties?: ForcePropertiesType;
}

/**
 * This is an interesting case.
 * There is a model type called Project which in escence
 * represents the Project's schema (from graphQL).
 * We are not using that type, but creating a new type,
 * so that this component can remain isolated (as an atom)
 */
export type ProjectAdapterType = {
  name: string;
};
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
