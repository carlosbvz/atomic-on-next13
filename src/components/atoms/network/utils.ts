import {
  ForcePropertiesType,
  GraphDataType,
  GraphLinkType,
  GraphNodeType,
  SvgTypeType,
} from "./types";

const Network = (function () {
  let d3: any;
  // svg objects
  let svg: SvgTypeType;
  let link: GraphLinkType;
  let node: GraphNodeType;
  let width: number;
  let height: number;
  // the data - an object with nodes and links
  let graph: GraphDataType;
  //////////// FORCE SIMULATION ////////////
  let simulation: any;
  let forceProperties: ForcePropertiesType;

  // add forces to the simulation
  function initializeForces() {
    // add forces and associate each with a name
    simulation
      .force("link", d3.forceLink())
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide())
      .force("center", d3.forceCenter())
      .force("forceX", d3.forceX())
      .force("forceY", d3.forceY());
    // apply properties to each of the forces
    updateForces();
  }

  // update the display positions after each simulation tick
  function ticked() {
    link
      .attr("x1", function (d: any) {
        return d.source.x;
      })
      .attr("y1", function (d: { source: { y: any } }) {
        return d.source.y;
      })
      .attr("x2", function (d: { target: { x: any } }) {
        return d.target.x;
      })
      .attr("y2", function (d: { target: { y: any } }) {
        return d.target.y;
      });

    node
      ?.attr?.("cx", function (d: { x: any }) {
        return d.x;
      })
      .attr("cy", function (d: { y: any }) {
        return d.y;
      });
    d3.select("#alpha_value").style(
      "flex-basis",
      simulation.alpha() * 100 + "%"
    );
  }

  //////////// UI EVENTS ////////////

  function dragstarted(d: { fx: any; x: any; fy: any; y: any }) {
    if (!d3?.event?.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d: { fx: any; fy: any }) {
    d.fx = d3?.event?.x;
    d.fy = d3?.event?.y;
  }

  function dragended(d: { fx: null; fy: null }) {
    if (!d3?.event?.active) simulation.alphaTarget(0.0001);
    d.fx = null;
    d.fy = null;
  }

  // apply new force properties
  function updateForces() {
    // get each force by name and update the properties
    simulation
      .force("center")
      .x(width * forceProperties.center.x)
      .y(height * forceProperties.center.y);
    simulation
      .force("charge")
      .strength(
        forceProperties.charge.strength * Number(forceProperties.charge.enabled)
      )
      .distanceMin(forceProperties.charge.distanceMin)
      .distanceMax(forceProperties.charge.distanceMax);
    simulation
      .force("collide")
      .strength(
        forceProperties.collide.strength *
          Number(forceProperties.collide.enabled)
      )
      .radius(forceProperties.collide.radius)
      .iterations(forceProperties.collide.iterations);
    simulation
      .force("forceX")
      .strength(
        forceProperties.forceX.strength * Number(forceProperties.forceX.enabled)
      )
      .x(width * forceProperties.forceX.x);
    simulation
      .force("forceY")
      .strength(
        forceProperties.forceY.strength * Number(forceProperties.forceY.enabled)
      )
      .y(height * forceProperties.forceY.y);
    simulation
      .force("link")
      .id(function (d: { id: any }) {
        return d.id;
      })
      .distance(forceProperties.link.distance)
      .iterations(forceProperties.link.iterations)
      .links(forceProperties.link.enabled ? graph.links : []);

    // updates ignored until this is run
    // restarts the simulation (important if simulation has already slowed down)
    simulation.alpha(1).restart();
  }

  //////////// DISPLAY ////////////
  // update the display based on the forces (but not positions)
  function updateDisplay() {
    node
      .attr?.("r", forceProperties.collide.radius)
      // .attr("stroke", forceProperties.charge.strength > 0 ? "blue" : "red")
      .attr("stroke", "blue")
      .attr("fill", function (d: any) {
        return d?.color || "blue";
      })
      .attr(
        "stroke-width",
        forceProperties.charge.enabled
          ? Math.abs(forceProperties.charge.strength) / 15
          : 0
      );

    link
      .attr("stroke-width", forceProperties.link.enabled ? 1 : 0.5)
      .attr("opacity", forceProperties.link.enabled ? 1 : 0);
  }
  // convenience function to update everything (run after UI input)
  function update() {
    updateForces();
    updateDisplay();
  }

  // generate the svg objects and force simulation
  function initializeDisplay() {
    // set the data and properties of link lines
    link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line");

    // set the data and properties of node circles
    node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter()
      .append("circle")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // node tooltip
    node?.append?.("title").text(function (d: { id: any }) {
      return d.id;
    });
    // visualize the graph
    updateDisplay();
  }
  // set up the simulation and event to update locations after each tick
  function initializeSimulation() {
    simulation.nodes(graph.nodes);
    initializeForces();
    simulation.on("tick", ticked);
  }

  function init({
    d3lib,
    data,
    anchor,
    properties,
  }: {
    d3lib: any;
    data: any;
    anchor: any;
    properties: any;
  }) {
    // Set up
    d3 = d3lib;
    forceProperties = properties;
    simulation = d3.forceSimulation();

    if (svg) {
      svg.selectAll("*").remove();
    }

    svg = d3.select(anchor);

    width = +svg.node().getBoundingClientRect().width;
    height = +svg.node().getBoundingClientRect().height;
    graph = data;

    // Initialize
    initializeDisplay();
    initializeSimulation();

    // update size-related forces
    d3.select(window).on("resize", function () {
      width = +svg.node().getBoundingClientRect().width;
      height = +svg.node().getBoundingClientRect().height;
      updateForces();
    });
  }

  return {
    init,
    update,
  };
})();

export default Network;
