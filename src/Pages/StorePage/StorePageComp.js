import styled from 'styled-components';
import StoreNav from './StorePageNav/StoreNav';
import StoreFooter from './StoreFooter/StoreFooter';
import StoreHomePage from './StorePages/StoreHome/StoreHomePage';
import StoreAllAdsPage from './StorePages/StoreAllAds/StoreAllAdsPage';
import ServicesPage from './StorePages/ServicesPage/ServicesPage';
import ContactUsPage from './StorePages/ContactUsPage/ContactUsPage';


import MenuIcon from '@mui/icons-material/Menu';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { setStoreMobileNav, ShowMobileNavFN } from '../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';
import DummyTxtPage from '../../Components/Dummy/DummyTxtPage';

const store={
    storeName:"Isuru Auto Land",
    backgroundImage:"https://www.saleme.lk/saleme/images/prime-members/5025/cover_2098242591_5025.jpg",
    boxImg:"https://www.saleme.lk/saleme/images/prime-members/5025/profile_1728145815_5025.jpg",
    shopDescription:"Isuru Auto Land has made a modern twist in the Sri Lankan automobile market with their innovative and dynamic business style. We are always ready to listen to your needs and deliver more than we promise. We believe that the satisfaction of the customers is what helps us be stable and successful in this particular field. It is our ultimate target to maintain our good name in the market and to serve our clients with utmost integrity, preserving their trust. You can always keep your trust on us for the superior quality and condition when it comes to our cars and please go through our listings to find your dream car. ",
    allAds:[

      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
          adName:"QMitsubishi L200 1994",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
          adName:"Nissan tres sunny 1986",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86931/saleme_61f35750ac550.jpg",
          adName:"Mitsubishi L200 1994",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86932/saleme_61f3582b2b48c.jpg",
          adName:"KIA Spectra 2001",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
          adName:"Nissan tres sunny 1986",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86931/saleme_61f35750ac550.jpg",
          adName:"Mitsubishi L200 1994",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },
      {
          adPhot:"https://www.saleme.lk/saleme/images/uploads/86932/saleme_61f3582b2b48c.jpg",
          adName:"KIA Spectra 2001",
          location:"Kegalle",
          price:"3,450,000",
          description:"good running...",
          timeAndDate:"2 Feb 2022, 6:25pm ",
      },



    ],

    Open:"06.00 am",
    Close:"09.00 pm",


    Adress:"687,meepitiya, kegalle, Sri Lanka",
    EMail:"spspriyantha@gmail.com",
    WhatsAppNumber:"94352221230  ",
    Mobile:"94722814383 /  94713773683  ",
    Facebook:{
      displayLink:"www.facebook.com/directgn",
      href:"https://www.facebook.com/directgn "
    },
    YouTube:{
      displayLink:"youtube.com/directgn",
      href:"https://youtube.com/directgn "
    },
    Twitter:{
      displayLink:"twitter.com/adaderanabizsin",
      href:"https://twitter.com/adaderanabizsin "
    },

  };


 


function StoreComp({className=""}) {

  const dispacth=useDispatch(store.storeName);


  const handleClick=(e)=>{
    console.log(e.target);
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
