import React,{useRef}  from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  const linkRef = useRef(null)
  const goto = (ref)=>{
      window.scrollTo({
          top:ref.offsetTop,
          left:0,
          behavior:'smooth'
      })
  }
  return (
    <>
      <Header goto={goto} linkRef={linkRef}/>
      <Main goto={goto} linkRef={linkRef}/>
    </>
  );
}

export default App;
