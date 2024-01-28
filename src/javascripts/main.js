// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Nicholas Stephenson"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO
import * as d3 from "d3";

let svg1 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#222')
    .style("fill", "transparent")

let svg1Circle = svg1.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 4)
    .style('fill', 'pink')
    .style('stroke', 'pink')

function animateSvg1Circle()
{
    svg1Circle
        .transition()
        .duration(2000)
        .attr('r', 4)
        .transition()
        .duration(2000)
        .attr('r', 30)
        .on('end', animateSvg1Circle);
}
animateSvg1Circle()