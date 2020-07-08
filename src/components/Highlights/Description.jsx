import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
  return (
    <Fade>
      <div className='center_wrapper'>
        <h2> Highlights </h2>{' '}
        <div className='highlight_description'>
          <ul>
            <li>Building WhatsApp in a Day with React Native and GraphQL - Vladimir Novick</li>
            <li>Building your First Design System: from Scratch to Production - Siddharth Kshetrapal</li>
            <li>React Native - Unknown</li>
            <li>Test React Applications - Kent C. Dodds</li>
            <li>React Performance - Kent C. Dodds</li>
            <li>React Native Animations - Vladimir Novick</li>
            <li>CSS in JS - Oleg Isonen</li>
            <li>GraphQL - Kitze</li>
            <li>Advanced React - Alex Lobera</li>
            <li>Typescript for React Devs - Michel Weststrate</li>
          </ul>
        </div>{' '}
      </div>{' '}
    </Fade>
  );
};

export default Description;
