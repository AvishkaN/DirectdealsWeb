import styled from 'styled-components';
import Categorie from './Categorie';
import Hotel from './../../../../assets/svg/hotel.svg';
import Resturant from './../../../../assets/svg/Resturant.svg';
import BookShop from './../../../../assets/svg/bookShop.svg';
import stainoryIcon from './../../../../assets/svg/stainoryIcon.png';
import JewelleryIcon from './../../../../assets/img/jewellery.png';


import Saloon from './../../../../assets/img/Saloon.png';
import Parlor from './../../../../assets/img/Parlor.png';
import FoodCity from './../../../../assets/img/foodCity.png';

import Bakery from './../../../../assets/img/Bakery.png';
import FruiteShop from './../../../../assets/img/fruiteShop.png';
import vegitables from './../../../../assets/img/vegitables.png';


import CarIconSvg from '@mui/icons-material/DirectionsCarFilledOutlined';




import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';

import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { render } from '@testing-library/react';







function AllCategories({className="",AllCategoriesList,LocationList}) {
  return (
    <DIV className={`${className} `}>

         <div className="AllCategories-wrapper ">


           {
             AllCategoriesList.map(categoryIcon=>(

               <Categorie   className='mt-2'  text={categoryIcon.listTxt} number={categoryIcon.count}   svgIcon={categoryIcon.SvgIcon}    ></Categorie>
             ))
           }

          




         
         
         
            {/* <Categorie   className='mt-2'  text="Cars & Vehicles" number="(1278)"  svgIcon={<i className="ion-model-s cat-ico" />}></Categorie> */}
            {/* <Categorie   className='mt-2'  text="Resturant" number="(1278)"  svgIcon={<img src={Resturant} className=" w-8 category-icon "/>}></Categorie>
            <Categorie   className='mt-2'  text="Book Shop" number="(1278)"  svgIcon={<img src={BookShop} className=" w-8 category-icon "/>}></Categorie>
            <Categorie   className='mt-2'  text="Stationary Shop" number="(1278)"  svgIcon={<img src={stainoryIcon} className=" w-8 category-icon "/>}></Categorie>
            <Categorie   className='mt-2'  text="Jewelry" number="(1278)"  svgIcon={<img src={JewelleryIcon} className=" w-8 category-icon "/>}></Categorie>
            
            
            <Categorie   className='mt-2'  text="Saloon" number="(1278)"  svgIcon={<img src={Saloon} className=" w-8 category-icon "/>}></Categorie>
         
            <Categorie   className='mt-2'  text="Beauty Parlor" number="(1278)"  svgIcon={<img src={Parlor} className=" w-8 category-icon "/>}></Categorie>
            <Categorie   className='mt-2'  text="Food CIty" number="(1278)"  svgIcon={<img src={FoodCity} className=" w-8 category-icon "/>}></Categorie>

        <Categorie   className='mt-2'  text="Bakery" number="(1278)"  svgIcon={<img src={Bakery} className=" w-8 category-icon "/>}></Categorie>
            <Categorie   className='mt-2'  text="Fruite Shop" number="(1278)"  svgIcon={<img src={FruiteShop} className=" w-8 category-icon "/>}></Categorie>
       
            <Categorie   className='mt-2'  text="Vegetable Shop" number="(1278)"  svgIcon={<img src={vegitables} className=" w-8 category-icon "/>}></Categorie> */}


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllCategories */
    
    .AllCategories-wrapper{
      /* width: var(--AllCategories-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .category-icon{
          
        }

    }
`;

export default AllCategories;
