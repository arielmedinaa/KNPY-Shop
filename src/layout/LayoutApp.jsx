import React from 'react';
import TopNavLanding from '../landing/components/TopNavLanding';
import LandingPage from '../Landing/LandingPage';

const LayoutApp = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-visible relative">
      <div className='absolute top-0 left-0 right-0 z-50 shadow-sm'>
        <TopNavLanding />
      </div>
      
      <LandingPage />
      <main className="flex-1 overflow-visible">
      </main>
    </div>
  )
}

export default LayoutApp