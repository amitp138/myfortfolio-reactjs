import React from 'react'
import './Home.css';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
 
 
 
  return (
    <div className='home'>
     <div className='passage'>
       <div className='nottype'>
       Hi,<br/>
       
        I am<br/>
      <div className='name'> AMIT PANDEY</div>
        </div>
        <div className='typing'>
        <Typewriter
        loop
        cursor
        cursorStyle='|'
        typeSpeed ={50}  
        deleteSpeed={60}
        delaySpeed={1000}
        words={['i am a web developer','i like playing cricket']}/>  
   </div>
        </div>
        
        
    </div>
  )
}

export default Home