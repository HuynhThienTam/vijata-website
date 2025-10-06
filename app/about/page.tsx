import BriefInfo from '@/components/About/BriefInfo';
import MottoAndFigures from '@/components/About/MottoAndFigures';
import React from 'react'

const About = () => {
  return (
    <div className="overflow-hidden">
      <BriefInfo/>
      <MottoAndFigures/>
    </div>
  );
};

export default About;