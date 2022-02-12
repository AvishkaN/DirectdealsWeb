import styled from 'styled-components';
import FeatureIcon from './FeatureIcon';


import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';

import Location from '@mui/icons-material/LocationOn';

const data=[
    {
        price:"20000",
        features:{
            beds:"6",
            baths:"6",
            PrivateRoom:"3",
        }
    }
];



function PropertyFirstDesciption({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PropertyFirstDesciption-wrapper">
                <div className="price font-2 fw-bold text-color-primary">Rs.200,000</div>  
                <div className="FeatureIconsContainer display-flex  mt-2 ">
                        <FeatureIcon  text={"Private Room"} svgIcon={ <DoorFrontOutlinedIcon  className='font-2-5'></DoorFrontOutlinedIcon> }></FeatureIcon>
                        <FeatureIcon  text={"Attached Bathroom"} svgIcon={ <BathtubIcon  className='font-2-5'></BathtubIcon> }></FeatureIcon>
                        <FeatureIcon  text={"Private Room"} svgIcon={ <HotelIcon  className='font-2-5'></HotelIcon> }></FeatureIcon>
                </div>
                <div className="location display-flex align-item-center   mt-3 ">

                            <Location className='font-2 fw-bold'></Location>
                            <div className="font-1-5 fw-bold">Colombo</div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PropertyFirstDesciption */
    
    .PropertyFirstDesciption-wrapper{
      /* width: var(--PropertyFirstDesciption-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PropertyFirstDesciption;
