import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FilterDataName from '../../../Functions/FilterDataByName';
import { SetClassifedCategoryFN, ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import CustomizePopUpShowList from './CustomizePopUpShowList';
import MobileCustomizePopUpShowList from './Mobile/MobileCustomizePopUpShowList';






import PopUp from '../PopUp/PopUp';
import ScroolWindowTop from '../../../Functions/DOM/ScrollWindowTop';
import ScreenWidthCalc from '../../../Functions/DOM/CalcScreenWidth';




const CategoryList=[

    {
      listTxt:"Cars & Vehicles",
      categoryIconSvg:<i className="ion-model-s cat-ico   text-color-primary   font-1-9  " />,
      subCategories:[
          "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
      ] 
    },
    
    {
      listTxt:"Electronics",
      categoryIconSvg:<i className="lnr lnr-laptop-phone cat-ico   text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Property",
      categoryIconSvg:<i className="ion-ios-home-outline cat-ico   text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Fashion Health & Beauty",
      categoryIconSvg:<i className="ion-ios-home-outline cat-ico   text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
   
    {
      listTxt:"Home & Garden",
      categoryIconSvg:<i className="lnr lnr-sun cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Animals",
      categoryIconSvg:<i className="ion-ios-paw-outline cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "qqq",
    ]
    },
    {
      listTxt:"Education",
      categoryIconSvg:<i className="lnr lnr-graduation-hat cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Food & Agriculture",
      categoryIconSvg:<i className="lnr lnr-leaf linier-icon cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Services",
      categoryIconSvg:<i className="ion-wrench cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Others",
      categoryIconSvg:<i className="ion-ios-albums-outline cat-ico text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Hotel, Travels & Tours",
      categoryIconSvg:<i className="ion-beer cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Jobs",
      categoryIconSvg:<i className="ion-briefcase cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
  
   
  
  
  
  ];



function CategoryPopUp({className=""}) {

    const[SelectedSecondTextsArr,SetSelectedSecondTextsArr]=useState([]);
    const dispatch=useDispatch();




    const handleClick=(e)=>{

        const selectedTitleText=e.target?.closest('.first-list-item')?.querySelector('.first-list-item-text').innerText;
        const selectedSecondListItem=e.target?.closest('.second-list-item')?.innerText;


        if(selectedTitleText){ // selected title


            const selectedSecondTextsArrNew=FilterDataName(selectedTitleText,CategoryList);
              
              SetSelectedSecondTextsArr(selectedSecondTextsArrNew);  // update selected second array
    
    
        }


        if(selectedSecondListItem){   // set selcted location to redux state
            dispatch( SetClassifedCategoryFN(selectedSecondListItem));
            dispatch(ShowHideAllFN());

        }


    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
           <PopUp to="/"  height={'default'}>
                    
                    <div className="title fw-bold font-1-8 text-color-primary">Select Category</div>

                    {console.log(ScreenWidthCalc())}

                    {
                        
                        ScreenWidthCalc() < 900 && <MobileCustomizePopUpShowList  CategoryList={CategoryList} secondList={SelectedSecondTextsArr}></MobileCustomizePopUpShowList>
                   
                   }

                    {
                        
                        ScreenWidthCalc() > 900 && <CustomizePopUpShowList  CategoryList={CategoryList} secondList={SelectedSecondTextsArr}></CustomizePopUpShowList>
                   
                   }


              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    

`;

export default CategoryPopUp;
