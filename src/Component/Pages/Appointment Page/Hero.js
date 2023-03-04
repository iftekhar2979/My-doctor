import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Hero = ({selected,setSelected}) => {
   
    
    return (
        <div>
        <div className="hero  bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
        <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      
        />
          <div>
            <img src="https://www.evolveip.net/hubfs/Imported_Blog_Media/Call-Center-Etiquette-New.jpg" alt="" />
          </div>
        </div>
      </div>
        
        </div>
    );
};

export default Hero;