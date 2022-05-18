import './Contact.css';
import React,{useState} from 'react'
import * as faIcon from "react-icons/ai";

function Contact()  {
  const handleSubmit=()=>{
    alert('Thank you for your query'+name)
    
  }
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [phno,setPhno]=useState('')
 const [query,setQuery]=useState('')
 const handlename=(e)=>{
  setName(e.target.value)
 }
 const handlemail=(e)=>{
  setEmail(e.target.value)
}
const handlephno=(e)=>{
  setPhno(e.target.value)
}
const handlequery=(e)=>{
  setQuery(e.target.value)
}
  return (
    <div className='contact'>
      
      
      <form>
      <h1>Contact me for work/general Enquires</h1>
        <div className='texttog'>
        <b>Name</b>
        <input type='text' className='inp' onChange={handlename} value={name} placeholder='Enter your name'></input>
        </div>
        <div className='texttog'>
        <b>Email</b>
        <input type='text' className='inp' onChange={handlemail} value={email} placeholder='Enter your email'></input>
        </div>
        <div className='texttog'>
        <b>Phone No:</b>
        <input type='text' className='inp' onChange={handlephno} value={phno} placeholder= 'Enter your phone number'></input>
        </div>
        <div className='texttog'>
        <b>What is your enquiry?</b>
        <input type='text'className='inp' onChange={handlequery} value={query} placeholder='Enter your query'></input>
        </div>
        <div className='footer'>
        <div className='checktog'>
        <input type='checkbox' className='checkinp'></input>
        <p>I want you to work on a project with me</p>
        </div>
        <button className='formsub' onClick={handleSubmit}>submit</button>
        </div>
      </form>
      <div className='social'>
        
   <button><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/amit-pandey-a56378211/'><faIcon.AiFillLinkedin/> Linkedin</a></button>
   <button><a target="_blank" rel='noreferrer' href="https://twitter.com/AmitPan1008"> <faIcon.AiOutlineTwitter/> Twitter</a></button>
   <button><a target="_blank" rel='noreferrer' href='https://www.instagram.com/amitpande1008/'><faIcon.AiFillInstagram/> Instagram</a></button>
   <button><a target="_blank" rel='noreferrer' href='https://github.com/amitp138'><faIcon.AiFillGithub/> Github</a></button>
  <button> <a target="_blank" rel='noreferrer' href="mailto:amitpande1008@gmail.com"><faIcon.AiFillMail/>Mail</a> </button>
  <button><a href=" https://wa.me/9653180127"target="_blank" rel='noreferrer'><faIcon.AiOutlineWhatsApp/> Whatsapp</a></button>
  </div> </div>
  )
}

export default Contact