import React, { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("");

  useEffect( () =>{
    setCurrentPage(location.pathname);
  }, [location] );

  const getNavClass = () =>{
    switch( currentPage ){
      case '/exam' : 
        return "navbar navbar-exam" ;
      case '/third' : 
        return "navbar navbar-third" ;
      case '/page4' :
        return "navbar navbar-page4" ;
      case '/page6' :
            return "navbar navbar-page4" ;
      default :
        return "" ;
    }
  }

  const getPageTitle = () =>{
    switch(location.pathname){
      case '/exam' :
        return "Exam Papers" ;
      case '/third' :
        return "Odiya Typing - Roll No : 1048" ;
      case '/page4' :
        return "Instructions For Odia Typing [ Roll No - 1048 ]" ;
        case '/page6' :
          return "Odia Typing Test" ;
      default :
        return "" ; 
    }
  }


  return (
    <div className={getNavClass()} >
      <h1>{getPageTitle()}</h1>
    </div>
  )
}

export default Navbar
