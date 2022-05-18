import React from 'react'
import './Aboutme.css';

const Aboutme = () => {

  return (
    <div className='aboutme'>
      
    <p><b> I am an undergraduate student at Rajiv Gandhi Institute of Technology<br/>
       Mumbai, India, pursuing a Bachelor of Engineering in Computer Science.<br/> 
       I am passionate about Machine Learning, <br/>
       Open Source and blockchain <br/> </b>
</p>
<h1>My Skills </h1>
<div className='btn'>
  <div className='skillview'>
  <h1>HTML:</h1>
<button className='html'></button>
</div>

<div className='skillview'>
<h1>CSS:</h1>
<button className='css'></button>
</div>

<div className='skillview'>
<h1>JAVASCRIPT:</h1>
<button className='js'></button>
</div>

<div className='skillview'>
<h1>REACT JS:</h1>
<button className='react'></button>
</div>

<div className='skillview'>
<h1>C++:</h1>
<button className='cpp'></button>
</div>
</div>
</div>
  )
}

export default Aboutme