import React from 'react';
import './App.css';
import React,{useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';
import React, { Component } from 'react';
const API_URL = 'www.devcodecampmusiclibrary.com/api/music';

// navbar / dropdowm menu

function App() {
  return (
    <Navbar>
      <navItem icon="album"/>
      <navItem icon="artist"/>
      <navItem icon="genre"/>
      <navItem icon="song title"/>
      <navItem icon="release date"/>
    <DropDownMenu/>
    </Navbar>
    
  );
}
function DropDownMenu(){
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  
  function setHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props){
      return(
        <a href="#" className="menuItem" onClick={()=> props.goToMenu && setActiveMenu()}>
          <span className="icon-Button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-Button">{props.rightIcon}</span>
        </a>
      );
}
  return(
    <div className="dropdown" style={{height:menuHeight}}>
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={700}
      className="menu-primary"
      onEnter={setMenuHeight}
      > 
        <div className="menu">
          <DropdownItem>Artist</DropdownItem>
          <DropdownItem>genre</DropdownItem>
          <DropdownItem>release date</DropdownItem>
          <DropdownItem>song</DropdownItem>
        </div>
    </CSSTransition>
    <CSSTransition 
      in={activeMenu === 'settings'} 
      unmountOnExit 
      timeout={700}
      className="menu-secondary"
      > 
      <div className="menu">
        <DropdownItem>Settings</DropdownItem>
   </div>
    </CSSTransition>
  </div>
  );
}

function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>

  );
}

function NavItem(props){
  const [open, setOpen] =useState(false);
  return(
    <li className="nav-item">
      <a href="#" className="icon-Button" onClick={()=> setOpen(!open)}>
        {props.icon}
        </a>
        {open && props.children}
    </li>

  );
}
// axios with table 


class App extends Component {
  state = {
    music: []
  }
  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ music: data })
      console.log(this.state.music)
     })
  }
  
}
render();{
// add table here
  return (
     <div className="container">
      <div className="col-xs-8">
      <h1>React Axios Example</h1>
      {this.state.users.map((user) => (
        <div className="card">
         <div className="card-body">
             <h5 className="card-title">{music.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            {music.table}            
            </h6>
          </div>
        </div>
      ))}
      </div>
     </div>
  );
}



export default App;
