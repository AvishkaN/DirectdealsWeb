import styled from 'styled-components';

import HomePage from './Pages/Home/HomePage';
import StorePage from './Pages/StorePage/StorePage';
// import PropertPage from './Pages/ProperyPage/PropertPage';
import ProductItem from './Pages/ProductItem/ProductItem';
import ClassifiedPage from './Pages/Classified/ClassifiedPage';
import Login from './Pages/LoginAndRegister/Login/Login';
import Register from './Pages/LoginAndRegister/Register/Register';
import MyAccountPage from './Pages/UserDashBorad/MyAccountPage';
import UserDashBoardMobile from './Pages/UserDashBorad/UserDashBoardMobile/UserDashBoardMobile';
// import ClassifiedPage from './Pages/Classified/ClassifiedPage';
// import MyAccountPage from './Pages/MyAccount/MyAccountPage';


import NavBar from './Components/Nav/NavBar';
import StorePageMobileNav from './Components/Overlay/StoreMobilePageNav/StorePageMobileNav'
// import Login from './Pages/Login/Login';
// import MobielNavBar from './Components/Nav/MobileNavBar/MobielNavBar';
import Footer from './Components/Footer/Footer';
// import Test from './Components/Test/Test';


// import RegisterPage from './Pages/Register/Register';

import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectClicks, ShowMobileNavFN } from './Redux/slices/clickSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MobileNav from './Components/Overlay/MobileNav/MobileNav';
import BottomMobile from './Components/BottomMobile/BottomMobile';
import LinkComp from './Components/UI/Link/Link';



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
                                        <BottomMobile></BottomMobile>

                                      {/* <Test></Test> */}
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/single-product" element={ 
                                      <>
                                      <NavBar className='position-fixed w-100'></NavBar>

                                      <ProductItem></ProductItem>
                                      {/* <Test></Test> */}
                                      
                                        {/* TEMPORY  WIDTH*/}

                                        <div className="">
                                          window width  {document.documentElement.clientWidth}
                                        </div>
                                        {/* <BottomMobile></BottomMobile> */}


                                        <BottomMobile></BottomMobile>
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
                                          <BottomMobile></BottomMobile>

                                      </>
                                    } />


                                    <Route path="/allAds" element={ 
                                       <>
                                            <NavBar className='position-fixed w-100'></NavBar>

                                            <ClassifiedPage></ClassifiedPage>
                                            {/* <Test></Test> */}

                                              {/* TEMPORY  WIDTH*/}

                                              <div className="">
                                                window width  {document.documentElement.clientWidth}
                                              </div>
                                              {/* <BottomMobile></BottomMobile> */}


                                            <BottomMobile></BottomMobile>
                                            <Footer className='mt-6'></Footer>


                                      </>
                                    } />



                                    <Route path="/dashBoard/*" element={ 
                                       <>
                                            {/* <NavBar className='position-fixed w-100'></NavBar> */}




                                            <MyAccountPage></MyAccountPage>
                                            {/* <Test></Test> */}

                                              {/* TEMPORY  WIDTH*/}

                                              {/* <div className="">
                                                window width  {document.documentElement.clientWidth}
                                              </div> */}
                                              {/* <BottomMobile></BottomMobile> */}


                                            <BottomMobile></BottomMobile>
                                            {/* <LinkComp to="/dashboard-mobile">mobile dashboard</LinkComp> */}
                                            {/* <Footer className='mt-6'></Footer> */}


                                      </>
                                    } />



                                    <Route path="/dashboard-mobile" element={ 
                                       <>
                                            <NavBar className='position-fixed w-100'></NavBar>


                                            <UserDashBoardMobile></UserDashBoardMobile>
                                            {/* <Test></Test> */}

                                              {/* TEMPORY  WIDTH*/}

                                              {/* <div className="">
                                                window width  {document.documentElement.clientWidth}
                                              </div> */}
                                              {/* <BottomMobile></BottomMobile> */}


                                            <BottomMobile></BottomMobile>
                                            {/* <Footer className='mt-6'></Footer> */}


                                      </>
                                    } />



                                    <Route path="/login" element={ 
                                       <>

                                            <Login></Login>
                                      </>
                                    } />

                                    <Route path="/register" element={ 
                                       <>

                                            <Register></Register>
                                      </>
                                    } />





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






    }



`;

export default App;
