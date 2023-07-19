import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useState } from "react";
export function CustomContentProgressBar({progress,color,icon}) {
    const [percentage, setPercentage] = useState(50);
  return (
    <div className="bar" style={{width:70,height:70}}>
     <CircularProgressbarWithChildren value={progress}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `${color}`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.0turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f88',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizontally centered. */}
            <img
              style={{ width: 25, marginTop: 3 }}
              src={icon}
              alt="icon"
            />
            <div style={{ fontSize: 11, marginTop: 5, textAlign:'center' }}>
              <strong>{progress}%</strong>
            </div>
          </CircularProgressbarWithChildren>
          </div>
      );
}
