import React from "react";
import "./Services.css";
const Services = () => {
  const projects = [
    {
      pname: "Todo list",
      plink: "https://to-do-list-by-amitp.glitch.me/",
      pimg:'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      pname: "Calculator",
      plink: "https://calculator-amit.glitch.me/",
      pimg:'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
  ];
  return (
    <div className="services">
      <h1>Following are some of my projects</h1>
      <div className="projects">
        {projects.map((p) => (
          <div className="mappro">
            <img src={p.pimg} alt='pimg'/>
            <b>{p.pname}</b>
            <button>
              <a href={p.plink} rel="noreferrer" target="_blank">
                Go to website
              </a>
            </button>
            
          </div>
        ))}
       </div> 
     
      <b>Here is the link to my github account : </b>
      <button><a href="https://github.com/amitp138" target='_blank' rel='noreferrer'> github</a></button>
    <br/> <b> I have also participated in hackathons through devfolio and my profile link is:</b>
     <button><a href="https://devfolio.co/@amitp138" target="_blank" rel="noreferrer"> devfolio</a></button>
    </div>
  );
};

export default Services;
