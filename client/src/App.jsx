import * as React from 'react';
import Registration from "./components/Registration"
import Home from './components/Home'
import ViewEvent from "./components/ViewEvent"
import Admin from './components/AdminLogin'
import AdminHome from './components/AdminHome';
import { Routes,Route } from 'react-router-dom';
import Payment from './components/Payment';
import Success from './components/Success';
const App =()=>{
  return (<div>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/register/:i' element={ <Registration/>}/>
      <Route path='/payment/:i' element={ <Payment/>}/>
      <Route path='/success' element={ <Success/>}/>
      <Route path='/admin' element={ <AdminHome/>}/>
    </Routes>

  </div>)
}

export default App