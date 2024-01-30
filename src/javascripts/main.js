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

// Icon 1
let svg1 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'black')
    .style('fill', 'transparent')

let svg1Circle = svg1.append('circle')
    .attr('cx', -20)
    .attr('cy', -20)
    .attr('r', 4)
    .style('fill', 'pink')
    .style('stroke', 'pink')

function animateSvg1Circle() {
    svg1Circle
        .transition()
        .duration(2000)
        .attr('r', 30)
        .attr('cx', 50)
        .attr('cy', 50)
        .transition()
        .duration(2000)
        .attr('r', 4)
        .attr('cx', -20)
        .attr('cy', -20)
        .on('end', animateSvg1Circle);
}
animateSvg1Circle()

// Icon 2
let svg2 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'beige')
    .style('fill', 'transparent')

let svg2Square1 = svg2.append('rect')
    .attr('x', 20)
    .attr('y', 20)
    .attr('width', 60)
    .attr('height', 60)
    .style('stroke', 'salmon')
    .style('fill', 'salmon')

let svg2Square2 = svg2.append('rect')
    .attr('x', 30)
    .attr('y', 30)
    .attr('width', 40)
    .attr('height', 40)
    .style('stroke', 'maroon')
    .style('fill', 'maroon')

let svg2Square3 = svg2.append('rect')
    .attr('x', 40)
    .attr('y', 40)
    .attr('width', 20)
    .attr('height', 20)
    .style('stroke', 'black')
    .style('fill', 'black')

function animateSvg2Square1() {
    svg2Square1
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(-90, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(-180, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(-270, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(0, 50, 50)')
        .on('end', animateSvg2Square1)
}
animateSvg2Square1()
function animateSvg2Square2() {
    svg2Square2
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(90, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(180, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(270, 50, 50)')
        .transition()
        .duration(1000)
        .attr('transform', 'rotate(0, 50, 50)')
        .on('end', animateSvg2Square2)
}
animateSvg2Square2()
function animateSvg2Square3() {
    svg2Square3
        .transition()
        .duration(500)
        .attr('transform', 'rotate(-90, 50, 50)')
        .transition()
        .duration(500)
        .attr('transform', 'rotate(-180, 50, 50)')
        .transition()
        .duration(500)
        .attr('transform', 'rotate(-270, 50, 50)')
        .transition()
        .duration(500)
        .attr('transform', 'rotate(0, 50, 50)')
        .on('end', animateSvg2Square3)
}
animateSvg2Square3()

// Icon 3
let svg3 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'lightblue')
    .style("fill", "transparent")

let svg3Square = svg3.append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .attr('x', 5)
    .attr('y', 5)
    .style('stroke', 'green')
    .style('fill', 'green')

function animateSvg3Square() {
    svg3Square
        .transition()
        .duration(1000)
        .attr('x', 85)
        .attr('y', 5)
        .transition()
        .duration(1000)
        .attr('x', 5)
        .attr('y', 85)
        .transition()
        .duration(1000)
        .attr('x', 85)
        .attr('y', 85)
        .transition()
        .duration(1000)
        .attr('x', 5)
        .attr('y', 5)
        .on('end', animateSvg3Square)
}
animateSvg3Square()

// Icon 4
let svg4 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'slategray')
    .style("fill", "transparent")

let svg4Circle1 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'red')
    .style('stroke', 'red')

let svg4Circle2 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'orange')
    .style('stroke', 'orange')

let svg4Circle3 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'yellow')
    .style('stroke', 'yellow')

let svg4Circle4 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'green')
    .style('stroke', 'green')

let svg4Circle5 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'blue')
    .style('stroke', 'blue')

let svg4Circle6 = svg4.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 0)
    .style('fill', 'purple')
    .style('stroke', 'purple')

function animateSvg4Circle1() {
    svg4Circle1
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4Circle2)
}
function animateSvg4Circle2() {
    svg4Circle2
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4Circle3)
}
function animateSvg4Circle3() {
    svg4Circle3
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4Circle4)
}
function animateSvg4Circle4() {
    svg4Circle4
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4Circle5)
}
function animateSvg4Circle5() {
    svg4Circle5
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4Circle6)
}
function animateSvg4Circle6() {
    svg4Circle6
        .transition()
        .duration(1000)
        .attr('r', 80)
        .on('end', animateSvg4CirclesReset)
}
animateSvg4Circle1()

function animateSvg4CirclesReset() {

    svg4Circle1
        .transition()
        .duration(1)
        .attr('r', 0)
    svg4Circle2
        .transition()
        .duration(1)
        .attr('r', 0)
    svg4Circle3
        .transition()
        .duration(1)
        .attr('r', 0)
    svg4Circle4
        .transition()
        .duration(1)
        .attr('r', 0)
    svg4Circle5
        .transition()
        .duration(1)
        .attr('r', 0)
    svg4Circle6
        .transition()
        .duration(2000)
        .attr('r', 0)
        .on('end', animateSvg4Circle1)
}

// Icon 5
let svg5 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'lightgreen')
    .style("fill", "transparent")

let svg5Rect1 = svg5.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 25)
    .attr('height', 150)
    .style('stroke', 'green')
    .style('fill', 'green')

let svg5Rect2 = svg5.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 150)
    .attr('height', 25)
    .style('stroke', 'green')
    .style('fill', 'green')

function animateSvg5Rect1() {
    svg5Rect1
        .transition()
        .duration(1410)
        .attr('x', 75)
        .transition()
        .duration(1410)
        .attr('x', 0)
        .on('end', animateSvg5Rect1)
}
animateSvg5Rect1()

function animateSvg5Rect2() {
    svg5Rect2
        .transition()
        .duration(1570)
        .attr('y', 75)
        .transition()
        .duration(1570)
        .attr('y', 0)
        .on('end', animateSvg5Rect2)
}
animateSvg5Rect2()

// let svg1 = d3.select('main')
//     .append('svg')
//     .attr('width', 100)
//     .attr('height', 100)
//     .style('background', '#222')
//     .style("fill", "transparent")
//
// let svg1Circle = svg1.append('circle')
//     .attr('cx', 50)
//     .attr('cy', 50)
//     .attr('r', 4)
//     .style('fill', 'pink')
//     .style('stroke', 'pink')

// function animateSvg1Circle()
// {
//     svg1Circle
//         .transition()
//         .duration(2000)
//         .attr('r', 4)
//         .transition()
//         .duration(2000)
//         .attr('r', 30)
//         .on('end', animateSvg1Circle);
// }
// animateSvg1Circle()