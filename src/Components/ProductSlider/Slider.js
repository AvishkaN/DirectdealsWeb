import styled from 'styled-components';
import ShowBox from './SliderBox';
import SliderNav from './SliderNav';
import { useState } from 'react';






function Slider({className="",images}) {


  const [activeImg,setActiveImg]=useState(0);
  const [showMobileNumber,setshowMobileNumber]=useState(false);

  
  
  const handleClick=(e)=>{
    
    const iconLeft=e.target.closest('.arrow-icon-left ');
    const iconRight=e.target.closest('.arrow-icon-right   ');  
    const showMobileNumberBtn=e.target.closest('.show-phone-number-btn');  
    
    

    if(iconRight){
      if(activeImg==(images.length-1)){
        setActiveImg(0);

      }else{ 

        setActiveImg(activeImg+1);
      }
      

    }


    if(iconLeft){


      if(activeImg==(0)){
        setActiveImg(3);

      }else{ 

        setActiveImg(activeImg-1);
      }
      

    }

    if(showMobileNumberBtn){
      setshowMobileNumber(!showMobileNumber);
    }


  } 


  return (
    <DIV className={`${className}  `} onClick={handleClick}  images={images}>

        {/* Slider  Box*/}
         <div className="Slider-wrapper ">
                  {/* <h2 className="title fw-bold">Villas Compound </h2> */}
                  <ShowBox className='mt-5' data={images} activeImg={activeImg}></ShowBox>
         </div>


        {/* Slider  Nav */}
      <div className=" mt-5">
        
              <SliderNav className='' data={images} activeImg={activeImg}></SliderNav>

      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Slider-wrapper{

  
        
      
        
      }

`;

export default Slider;
