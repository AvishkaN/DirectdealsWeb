import styled from 'styled-components';

import HomePage from './Pages/Home/HomePage';
import StorePage from './Pages/StorePage/StorePage';
// import PropertPage from './Pages/ProperyPage/PropertPage';
// import ProductItem from './Pages/ProductItem/ProductItem';
// import ClassifiedPage from './Pages/Classified/ClassifiedPage';
// import MyAccountPage from './Pages/MyAccount/MyAccountPage';


import NavBar from './Components/Nav/NavBar';
import StorePageMobileNav from './Components/Overlay/StoreMobilePageNav/StorePageMobileNav'
// import Login from './Pages/Login/Login';
// import MobielNavBar from './Components/Nav/MobileNavBar/MobielNavBar';
import Footer from './Components/Footer/Footer';


// import RegisterPage from './Pages/Register/Register';

import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectClicks, ShowMobileNavFN } from './Redux/slices/clickSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MobileNav from './Components/Overlay/MobileNav/MobileNav';



function App() {

  const clicks=useSelector(selectClicks);
  const dispatch=useDispatch();


  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

    // turn off scroling opend mobile nav bar
  const html=document.querySelector('html');
  html.style.overflowY=`${clicks.showOverlay?'hidden':'initial'}`;

  },[clicks.showOverlay]);


  const handleClick=(e)=>{
    // console.log(e.target.closest('#mobileNav-open-icon'));
    const mobileNavOpenIcon=e.target.closest('#mobileNav-open-icon');


    if(mobileNavOpenIcon){
      dispatch(ShowMobileNavFN());
    }

  };



  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content" onClick={handleClick}>

                        <Routes>
                                    <Route path="/" element={ 
                                      <>
                                      <NavBar className='position-fixed w-100'></NavBar>

                                      <HomePage></HomePage>
                                      
                                        {/* TEMPORY  WIDTH*/}

                                        <div className="">
                                          window width  {document.documentElement.clientWidth}
                                        </div>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/store/*" element={ 
                                       <>
                                        {/* TEMPORY  WIDTH*/}

                                        <div className="">
                                          window width  {document.documentElement.clientWidth}
                                        </div>
                                          <StorePage></StorePage>




                                          <StorePageMobileNav  ShowstoreMobileNav={clicks.storeMobileNav} ></StorePageMobileNav>

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
                <MobileNav showNav={clicks.showMobileNav} className={`w-35  p-3 `}></MobileNav>
                { clicks.showOverlay &&  <OverlayFull></OverlayFull>}

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

      .mobile-navv{
          transition: all .2s;

          position: fixed;
          top: 0;
          left: 0;

          @media(max-width:600px){     
                      width: 48% !important;
          }
          @media(max-width:437px){     
                      width: 60% !important;
          }
          @media(max-width:345px){     
                      width: 70% !important;
          }


        }







    }



`;

export default App;
