import styled from 'styled-components';
import StoreNav from './StorePageNav/StoreNav';
import StoreHomePage from './StoreHome/StoreHomePage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const store={
    storeName:"Isuru Auto Land",
    backgroundImage:"https://www.saleme.lk/saleme/images/prime-members/5025/cover_2098242591_5025.jpg",
    boxImg:"https://www.saleme.lk/saleme/images/prime-members/5025/profile_1728145815_5025.jpg",
    shopDescription:"Isuru Auto Land has made a modern twist in the Sri Lankan automobile market with their innovative and dynamic business style. We are always ready to listen to your needs and deliver more than we promise. We believe that the satisfaction of the customers is what helps us be stable and successful in this particular field. It is our ultimate target to maintain our good name in the market and to serve our clients with utmost integrity, preserving their trust. You can always keep your trust on us for the superior quality and condition when it comes to our cars and please go through our listings to find your dream car. ",


  };



function StoreComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="StoreComp-wrapper">

                <h1 className="store-name text-center background-aqu pt-3 pb-4">
                        {store.storeName}
                </h1>

            <StoreNav className='background-aqu' ></StoreNav>


              <div className="mt-4">

                <Routes>
                    <Route path="/home" element={<StoreHomePage store={store} />} />
              </Routes>

              </div>


                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreComp */
    --storeWidth:80%;

    
    .StoreComp-wrapper{
      /* width: var(--StoreComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .store-name{
          height:11vh; 
        }

    }
`;

export default StoreComp;
