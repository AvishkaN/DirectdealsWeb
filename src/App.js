import styled from 'styled-components';

import HomePage from './Pages/Home/HomePage';
import StorePage from './Pages/StorePage/StorePage';
// import PropertPage from './Pages/ProperyPage/PropertPage';
import ProductItem from './Pages/ProductItem/ProductItem';
import AllAdsPage from './Pages/AllAds/AllAdsPage';
import Login from './Pages/LoginAndRegister/Login/Login';
import Register from './Pages/LoginAndRegister/Register/Register';
import MyAccountPage from './Pages/UserDashBorad/MyAccountPage';
import UserDashBoardMobile from './Pages/UserDashBorad/UserDashBoardMobile/UserDashBoardMobile';


import NavBar from './Components/Nav/NavBar';
import StorePageMobileNav from './Components/Overlay/StoreMobilePageNav/StorePageMobileNav'
import ScreenWidthCalcComp from './Components/ScreenWidthCalculator/ScreenWidthCalc'
import Footer from './Components/Footer/Footer';



import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectClicks, SetShowPostAdFN, ShowLocationPopupFN, ShowMobileNavFN, ShowNearbyLocationPopUpFN } from './Redux/slices/clickSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MobileNav from './Components/Overlay/MobileNav/MobileNav';
import BottomMobile from './Components/BottomMobile/BottomMobile';
import LinkComp from './Components/UI/Link/Link';
import UndoPage from './Components/UI/UndoPage/UndoPage';



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
    console.log(e.target);



    const mobileNavOpenIcon=e.target.closest('#mobileNav-open-icon');
    const LocationIcon=e.target.closest('.show-btn-location');
    const NearbyLocationIcon=e.target.closest('.show-btn-nearby-location');
    const PostAdMobileBottom=e.target.closest("#Post-ad-mobile");



    if(mobileNavOpenIcon){
      dispatch(ShowMobileNavFN());
    }
    if(LocationIcon){
      dispatch(ShowLocationPopupFN());
    }
    if(PostAdMobileBottom){
      dispatch(SetShowPostAdFN());
    }
    if(NearbyLocationIcon){
      dispatch(ShowNearbyLocationPopUpFN());
    }



  };



  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content" onClick={handleClick}>

                        <Routes>
                                    {/* Home Page */}
                                    <Route path="/" element={ 
                                      <>
                                      <NavBar className='position-fixed w-100'></NavBar>

                                      <HomePage></HomePage>
                                      {/* <ScreenWidthCalcComp></ScreenWidthCalcComp> */}
                                      
                                       
                                        <BottomMobile></BottomMobile>

                                        {/* <Test></Test> */}
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    {/* Single Product */}
                                    <Route path="/product-item/:prodcuctId" element={ 
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


                           

                                      {/* StorePage */}
                                    <Route path="/store/*" element={ 
                                       <>
                                        {/* TEMPORY  WIDTH*/}

                                        {/* <ScreenWidthCalcComp></ScreenWidthCalcComp> */}




                                          <StorePage></StorePage>
                                          <StorePageMobileNav  ShowstoreMobileNav={clicks.storeMobileNav} ></StorePageMobileNav>
                                          <BottomMobile></BottomMobile>

                                      </>
                                    } />


                                    {/* All Ads */}
                                    <Route path="/allAds" element={ 
                                       <>
                                            <NavBar className='position-fixed w-100'></NavBar>

                                            <AllAdsPage></AllAdsPage>


                                            <BottomMobile></BottomMobile>
                                            <Footer className='mt-6'></Footer>


                                      </>
                                    } />


                                      {/* Dash Board  Dekstop Mod*/}
                                    <Route path="/dashBoard/*" element={ 
                                       <>




                                            <MyAccountPage></MyAccountPage>


                                            <BottomMobile></BottomMobile>


                                      </>
                                    } />



                                      {/* Dashboard mobile */}
                                    <Route path="/dashboard-mobile" element={ 
                                       <>
                                            <NavBar className='position-fixed w-100'></NavBar>


                                            <UserDashBoardMobile></UserDashBoardMobile>


                                            <BottomMobile></BottomMobile>


                                      </>
                                    } />


                                    {/* Login */}
                                    <Route path="/login" element={ 
                                       <>

                                            <Login></Login>
                                      </>
                                    } />

                                    {/* Register  */}
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
