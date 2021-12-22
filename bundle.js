//(function (d3) {
    'use strict';
    //The const declaration creates a read-only reference to a value. It does not mean the value 
    const svg = d3.select('svg');
    const width = +svg.attri('width');
    const height = +svg.attri('height');
    //It appends a 'g' element to the SVG. g element is used to group SVG shapes together.
    const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const circle = g.append('cirlce');

    //circle.attr('r', height / 2);
    circle.attr('r',120);
    circle.attr('fill','yellow');
    circle.attr('stroke','black');

    const eyeSpacing = 56;
    const eyeYOffest = -30;
    const eyeRadius = 12;
    const eyebrowWidth = 30;
    const eyebrowHeight = 10;
    const eyebrowYOffest = -30;

    const eyesG = g.append('g')
    .attr('transform', `translate(0,${eyeYOffset})`);

    const leftEye = eyesG.append('circle')
     .attr('r', eyeRadius)
     .attr('cx', -eyeSpacing);

     const rightEye = eyesG
     .append('circle')
      .attr('r', eyeRadius)
      .attr('cx', eyeSpacing);

     const eyebrowG = eyesG.append('g')
     .attr('transform',`translate(0,${eyebrowYOffset})`)
     
     //Animation in D3; duration specifies the animation duriation in milliseconds for each eyebrows

     eyebrowG.transition().duration(2000)
      .attr('transform', `translate(0, ${eyebrowYOffest -20}) rotate(20)`)
     .transition().duration(2000)
      .attr('transform', `translate(0,${eyebrowYOffest-20}) rotate(-20)`);

     const leftEyebrow = eyebrowG
     .append('rect')
       .attr('x', -(eyeSpacing + eyebrowWidth) /2-30)
       .attr('width', eyebrowWidth)
       .attr('height', eyebrowHeight);

     const rightEyebrow = eyebrowG
     .append('rect')
     .attr('x', eyeSpacing - eyebrowWidth / 2)
     .attr('width', eyebrowWidth)
     .attr('height', eyebrowHeight);

     const mouth = g
     .append('path')
     .attr('d', d3.arc()({
         innerRadius: 40,
         outerRadius: 50,
         startAngle: Math.PI / 2,
         endAngle: Math.PI * 3 / 2
     }));

//}(d3));
