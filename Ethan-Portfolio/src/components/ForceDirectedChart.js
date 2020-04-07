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

class chart extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawChart(data)
    }
    drawChart(data)  {
      const svgCanvas = d3.select(this.refs.canvas)
        .append("svg")
        .attr("width", 600)
        .attr("height", 400)
        .style("border", "1px solid black")

      d3.select('svg')
        .append("circle")
        .attr('r',4)
        .attr('cx',30)
        .attr('cy',50)
    }
    render() { return <div ref="canvas"></div> }
}
export default chart