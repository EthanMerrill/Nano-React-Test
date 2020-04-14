import React, { Component } from 'react'
import * as d3 from 'd3'
//https://wattenberger.com/blog/react-and-d3
// function Circle(){
//   const ref = React.createRef()
//   console.log(ref)
//   const svgElement = d3.select(ref.current)
//   svgElement.selectAll("circle")
//     .join("circle")
//     .attr("r", 2)
//     .attr("color", "red")
//   const Circle = () => {
//       return (
//         <svg
//         viewBox="0 0 100 50"
//         ref={ref}
//       />    )
//     }
// }

function chart(props){
//   var svg = d3.select("svg"),
  var width = 960;
  var height = 600;

// var color = d3.scaleOrdinal(d3.schemeCategory20);

const forceX = d3.forceX(width / 2).strength(0.015)
const forceY = d3.forceY(height / 2).strength(0.015)

var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) {
      return d.id;
  }))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force('x', forceX)
  .force('y', forceY);

d3.json(props.data, function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", 4)
      .style("stroke", "black");

  var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter().append("g")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  var circles = node.append("circle")
      .attr("r", 5)
      .attr("fill", function(d) {
          if (d.group == 1) {
              return ("red")
          } else if (d.group == 2) {
              return ("blue")
          }
      })


  var hyperlink = node.append("svg:a")
      .text(function(d) {
          return d.id;
      })
      .attr("xlink:href", function(d) {
          return ("xlink:href", d.url)
      })
      .append("text")
      .attr('x', 6)
      .attr('y', 3)
      .text(function(d) {
          return d.id;
      })
      .append("circle")
      .attr("r", 4)
      .style("fill", "#666")
      .style("opacity", 0.5)

  node.append("title")
      .text(function(d) {
          return d.id;
      });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
      link
          .attr("x1", function(d) {
              return d.source.x;
          })
          .attr("y1", function(d) {
              return d.source.y;
          })
          .attr("x2", function(d) {
              return d.target.x;
          })
          .attr("y2", function(d) {
              return d.target.y;
          });

      node
          .attr("transform", function(d) {
              return "translate(" + d.x + "," + d.y + ")";
          })
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
  return(<svg width="960" height="600"></svg>)
}
export default chart