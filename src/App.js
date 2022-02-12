import styled from 'styled-components';

import HomePage from './Pages/Home/HomePage';
import PropertPage from './Pages/ProperyPage/PropertPage';
import ProductItem from './Pages/ProductItem/ProductItem';
import ClassifiedPage from './Pages/Classified/ClassifiedPage';
import MyAccountPage from './Pages/MyAccount/MyAccountPage';


import NavBar from './Components/Nav/NavBar';
import Login from './Pages/Login/Login';
import MobielNavBar from './Components/Nav/MobileNavBar/MobielNavBar';
import Footer from './Components/Footer/Footer';


import RegisterPage from './Pages/Register/Register';

import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectClicks } from './Redux/slices/clickSlice';
import { useEffect } from 'react';



function App() {

  const clicks=useSelector(selectClicks);


  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

    // turn off scroling opend mobile nav bar
  const html=document.querySelector('html');
  html.style.overflowY=`${clicks.showOverlay?'hidden':'initial'}`;

  },[clicks.showOverlay]);


  






  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content">
                          <div className="clear"></div>
                        <Routes>
                                    <Route path="/" element={ 
                                      <>
                                      <NavBar className='position-fixed w-100'></NavBar>
                                      {/* <MobielNavBar></MobielNavBar> */}

                                      <HomePage></HomePage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />

                                    {/* <Route path="/properties" element={ 
                                      <>
                                       <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <PropertPage></PropertPage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />

                                    <Route path="/product-item/:prodcuctId" element={ 
                                      <>
                                      <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <ProductItem></ProductItem>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/classified" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <ClassifiedPage></ClassifiedPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />

                                    <Route path="/myaccount" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <MyAccountPage></MyAccountPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/register" element={ 
                                      <> 

                                            <RegisterPage></RegisterPage>

                                      </>
                                    } />
                                    <Route path="/login" element={ 
                                      <> 

                                            <Login></Login>

                                      </>
                                    } /> */}



                        </Routes>

                </div>

                       {/* { clicks.showOverlay &&  <OverlayFull></OverlayFull>} */}
          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      
      width: 100%;
      position: relative; 
      
      .app-content{
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }



`;

export default App;
