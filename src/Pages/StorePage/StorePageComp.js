import styled from 'styled-components';
import StoreNav from './StorePageNav/StoreNav';
import StoreHomePage from './StorePages/StoreHome/StoreHomePage';
import StoreAllAdsPage from './StorePages/StoreAllAds/StoreAllAdsPage';
import ServicesPage from './StorePages/ServicesPage/ServicesPage';
import ContactUsPage from './StorePages/ContactUsPage/ContactUsPage';
import StoreFooter from './StoreFooter/StoreFooter2';


import MenuIcon from '@mui/icons-material/Menu';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { setStoreMobileNav, ShowMobileNavFN } from '../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';

import DummyTxtPage from '../../Components/Dummy/DummyTxtPage';
import { useEffect } from 'react';
import ScroolWindowTop from '../../Functions/DOM/ScrollWindowTop';
import { storePageData as store } from '../../Data/Data';




 


function StoreComp({className=""}) {

  const dispacth=useDispatch(store.storeName);


  useEffect(()=>{ 
    // Scrool window to Top
    ScroolWindowTop()
  },[]);


  const handleClick=(e)=>{
    const menuIcon=e.target.closest('#store-page-menu');

    if(menuIcon){
        dispacth(setStoreMobileNav({storeName:store.storeName}));
    }
  };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
      

         <div className="StoreComp-wrapper">
         

                <div className="store-name  background-aqu display-flex align-items-center justify-content-between  pt-3 pb-4 ">
                      <MenuIcon id="store-page-menu" className='font-3-5 ms-4 cursor-p ' ></MenuIcon>
                       <h1 className='text-center ms-auto me-auto  ' >{store.storeName}</h1> 
                </div>


            <StoreNav className='background-aqu ' id="store-nav-deskstop"></StoreNav>

                {/* Pages */}
              <div className="mt-5">

                  <Routes>
                      <Route path="/Home" element={<StoreHomePage store={store} />} />
                </Routes>

                  <Routes>
                      <Route path="/AllAds" element={<StoreAllAdsPage store={store} />} />
                </Routes>

                  <Routes>
                      <Route path="/Services" element={<ServicesPage store={store} />} />
                </Routes>

                  <Routes>
                      <Route path="/Contact" element={<ContactUsPage storeData={store} />} />
                </Routes>
                  <Routes>
                      <Route path="/AboutUs" element={<DummyTxtPage  title="About Us"  className='w-85 ms-auto me-auto' />} />
                </Routes>
                  <Routes>
                      <Route path="/privacyPolicy" element={<DummyTxtPage title="Privacy Policy"  className='w-85 ms-auto me-auto' />} />
                </Routes>

                <StoreFooter storeData={store}></StoreFooter>

              </div>


                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreComp */
    --storeWidth:80%;
    
    
    @media(max-width:1273px){     
      --storeWidth:91%;
        }

    
    .StoreComp-wrapper{
      /* width: var(--StoreComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .store-name{
          height:11vh; 
          overflow-y: hidden;

          #store-page-menu{
            display: none;
                @media(max-width:800px){     
                  display:flex;
                }

          }

          h1{
            
            @media(max-width:600px){     
                  font-size: 2.3rem !important;
              }
          }


          @media(max-width:600px){     
                box-shadow: 0 2px 16px 0 rgba(0,0,0,0.1);
            }




        }



    }


    #store-nav-deskstop{
      @media(max-width:800px){     
                      display: none;
        }
    }
`;

export default StoreComp;
