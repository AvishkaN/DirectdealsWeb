import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { HideMobileNavFN, selectClicks, ShowHideAllFN } from '../../Redux/slices/clickSlice';
import MobileNav from './MobileNav/MobileNav';
import LocationPopUp from './LocationPopUp/LocationPopUp';
import CategoryPopUp from './CategoryPopUp/CategoryPopUp';
import PostAdPopUp from './PostAdPopUp/PostAdPopUp';




function Overlay({className=""}) {

  const dispatch=useDispatch();
  const clicks=useSelector(selectClicks);



  const handleClick=(e)=>{
    
    const IsSelectOverlay=(e.target.classList[0]=='Overlay-wrapper');

    const closeBtn=e.target.closest('#closeIcon');

    console.log(closeBtn);
    

    if(IsSelectOverlay){ // hide mobile nav and overlay
        // dispatch(HideMobileNavFN());
        dispatch(ShowHideAllFN());
    }
    if(closeBtn){ // hide mobile nav and overlay
        dispatch(ShowHideAllFN());
    }

  };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="Overlay-wrapper cursor-p">
           {console.log(clicks)}
             {clicks.showMobileNav &&  <MobileNav  className=' w-30  mobile-navv p-3'></MobileNav>}
             {clicks.showLocationPopUp &&    <LocationPopUp className='w-65  overlay-inside-popup  ms-auto me-auto mt-5'></LocationPopUp>}
             {clicks.showCategoryPopUp &&    <CategoryPopUp className='w-65  overlay-inside-popup  ms-auto me-auto mt-5'></CategoryPopUp>}
             {clicks.showPostAd &&    <PostAdPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></PostAdPopUp>}
     
     
     
             {/* {clicks.showMobileNav &&    <LocationPopUp className='w-65 ms-auto me-auto mt-5'></LocationPopUp>}
             {clicks.showMobileNav &&    <LocationPopUp className='w-65 ms-auto me-auto mt-5'></LocationPopUp>} */}

          
            
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    height: 100%;  
    background: #00000091;  
    position: absolute;
    top: 0;
    left: 0; 
    z-index:1000; 
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Overlay */
    
    .Overlay-wrapper{
      /* width: var(--Overlay-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mobile-navv{
          margin-left: auto;  

          @media(max-width:499px){     
                      width: 50% !important;
        }


          .nav-right-button{
            width:100% !important; 

            &:first-child{
              /* background: red;  */
            }
          }
        }


        .overlay-inside-popup{
              @media(max-width:609px){     
                          width: 92% !important;
            }
            
          }
          
          .overlay-inside-popup-post-ad{
                @media(max-width:903px){     
                  width: 91% !important;
              }

        }

     

    }
`;

export default Overlay;
