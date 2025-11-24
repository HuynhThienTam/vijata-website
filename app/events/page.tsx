import EventCarousel from '@/components/Event/EventCarousel';
import EventPageBanner from '@/components/Event/EventPageBanner';
import OurEvents from '@/components/Event/OurEvents';
import React from 'react'

const Events = () => {
  return (
    <div className='bg-white'>
      <EventPageBanner/>
      <OurEvents/>
    </div>
  );
};

export default Events;