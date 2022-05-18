import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React,{useState} from 'react';
import Login from './components/Login';
import Aboutme from './components/Aboutme';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPage,setLoginPage]=useState(true);
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (email === "amitpande1008@gmail.com" && password === "amit123@jee") {
      alert("submit successfull...");
      setLoginPage(false)
      
    } else if (
      email === "amitpande1008@gmail.com" &&
      password !== "amit123@jee"
    ) {
      alert("password is wrong..");
    } else if (
      email !== "amitpande1008@gmail.com" &&
      password === "amit123@jee"
    ) {
      alert("email is wrong..");
    } else {
      alert("wrong credetials..");
    }
  };
  
  return (
    
    <div>
    
      <Router>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
          <Route path='Aboutme' element={<Aboutme/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Blog' element={<Blog/>}/>
          <Route path='Services' element={<Services/>}/>
          </Route>
        </Routes>
      </Router>
     
   
      </div>
         
  
  
      
    
  );
}

export default App;
