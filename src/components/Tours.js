import React, { useState } from 'react'
import Card from './Card';
import data from '../data'
const Tours = () => {
    const[tours,setTours]=useState(data);
    const[notInterestedButton,setNotInterestedButton]=useState(true);

    function removeTour(id){
        const newTours=tours.filter((tour)=>tour.id!==id)
        setTours(newTours);
    }

    function addTour(id){
        const newTours=tours.filter((tour)=>tour.id===id)
        setTours(newTours);
        setNotInterestedButton(false);
    }

    if(tours.length===0){
        return(
            <div className='refresh'>
                <h2>No Tour Refresh</h2>
                <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
            </div>
        )
    }
  return (
    <div className='container'>
      <div className='title'>
        <h2>Goku Plans</h2>
      </div>
      <div className='cards'>
        {tours.map((singleTour) => {
          return (
            <Card {...singleTour} key={singleTour.id} removeTour={removeTour} addTour={addTour} notInterestedButton={notInterestedButton} />
          );
        })}
      </div>
    </div>
  );
}

export default Tours;