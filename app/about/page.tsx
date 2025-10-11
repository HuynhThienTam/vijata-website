import BriefInfo from '@/components/About/BriefInfo';
import MottoAndFigures from '@/components/About/MottoAndFigures';
import NotableActivities from '@/components/About/NotableActivities';
import Timeline from '@/components/About/Timeline';
import React from 'react'

const About = () => {
  return (
    <div className="overflow-hidden">
      <BriefInfo/>
      <MottoAndFigures/>
      <NotableActivities/>
      <Timeline/>
    </div>
  );
};

export default About;