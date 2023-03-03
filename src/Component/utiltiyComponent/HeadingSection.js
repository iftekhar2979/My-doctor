import React from 'react';

const HeadingSection = ({children}) => {
  
    const makingArray=children.split(", ")
    
    return (
        <>    
            <h2 className='text-4xl text-center text-green-400 font-bold my-4'>{makingArray[0]}</h2>
             <h2 className='text-3xl text-center text-grey-400 mb-4'>{makingArray[1]}</h2>
             <div className="divider"></div> 
        </>

    );
};

export default HeadingSection;