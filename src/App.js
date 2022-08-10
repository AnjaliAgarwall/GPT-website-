import React from 'react'

import { Footer , Blog , Possibility,  WhatGPT3, Header}  from './containers';
import {CTA , Brand, Navbar} from './components';
const App = () =>{ 
  return (
    <div className='App'>
     <div className='gradients__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
  }
export default App;
