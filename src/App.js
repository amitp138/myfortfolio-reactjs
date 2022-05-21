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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginPage,setLoginPage]=useState(true);
  
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
   if(username==='' || password===''){
    alert('please enter the fields properly ')
    
   }
   else{
   
     alert('login successfully..'+username)
     setLoginPage(false)
   }
  };
  
  return (
    
    <div className='app'>
     { loginPage?<Login password={password} username={username} handleUsername={handleUsername} 
       handlePassword={handlePassword} handleSubmit={handleSubmit}/>:
      <Router>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home username={username} />}/>
          <Route path='Aboutme' element={<Aboutme/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Blog' element={<Blog/>}/>
          <Route path='Services' element={<Services/>}/>
          </Route>
        </Routes>
      </Router>}
     
   
      </div>
         
  
  
      
    
  );
}

export default App;
