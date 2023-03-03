import React from 'react';

const HeadingSection = ({children}) => {
  
    const makingArray=children.split(", ")
    console.log(makingArray)
    return (
        <>    
            <h2 className='text-4xl text-center text-green-400 font-bold'>{makingArray[0]}</h2>
             <h2 className='text-3xl text-center text-grey-400 '>{makingArray[1]}</h2>
        </>

    );
};

export default HeadingSection;