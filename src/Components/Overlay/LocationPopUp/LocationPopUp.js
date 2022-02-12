import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FilterDataName from '../../../Functions/FilterDataByName';
import { SetClassifedLocationFN, ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import PopUpShowList from '../../UI/PopUpShowList/PopUpShowList';

import PopUp from '../PopUp/PopUp';

const locationList=[
    {
        categoryName:"Colombo",
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "Nugegoda",
        ]
    },
    {
        categoryName:"Matara",
        subCategories:[
            "Matara City",
            "Dikwella",
            "Akuressa",
            "Weligama",
            "Hakmana",
        ]
    },
    {
        categoryName:"Kandy",
        subCategories:[
            "Kandy City",
            "Gampola",
            "Katugasthota",
            "Gampola",
            "Katugastota",
            "Peradeniya",
        ]
    },
    {
        categoryName:"Badulla",
        subCategories:[
            "Badulla City",
            "Banadarwela",
            "Welimada",
            "Mahiyanganaya",
        ]
    },
    {
        categoryName:"Anuradhapura",
        subCategories:[
            "Anuradhapura City",
            "Kekirawawa",
            "Medawachchiya",
            "Tambuttegama",
            "Eppawala",
        ]
    },
    {
        categoryName:"Colombo",
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "Nugegoda",
        ]
    },
    {
        categoryName:"Matara",
        subCategories:[
            "Matara City",
            "Dikwella",
            "Akuressa",
            "Weligama",
            "Hakmana",
        ]
    },
    {
        categoryName:"Kandy",
        subCategories:[
            "Kandy City",
            "Gampola",
            "Katugasthota",
            "Gampola",
            "Katugastota",
            "Peradeniya",
        ]
    },
    {
        categoryName:"Badulla",
        subCategories:[
            "Badulla City",
            "Banadarwela",
            "Welimada",
            "Mahiyanganaya",
        ]
    },
    {
        categoryName:"Anuradhapura",
        subCategories:[
            "Anuradhapura City",
            "Kekirawawa",
            "Medawachchiya",
            "Tambuttegama",
            "Eppawala",
        ]
    },
    {
        categoryName:"Colombo",
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "Nugegoda",
        ]
    },
    {
        categoryName:"Matara",
        subCategories:[
            "Matara City",
            "Dikwella",
            "Akuressa",
            "Weligama",
            "Hakmana",
        ]
    },
    {
        categoryName:"Kandy",
        subCategories:[
            "Kandy City",
            "Gampola",
            "Katugasthota",
            "Gampola",
            "Katugastota",
            "Peradeniya",
        ]
    },
    {
        categoryName:"Badulla",
        subCategories:[
            "Badulla City",
            "Banadarwela",
            "Welimada",
            "Mahiyanganaya",
        ]
    },
    {
        categoryName:"Anuradhapura",
        subCategories:[
            "Anuradhapura City",
            "Kekirawawa",
            "Medawachchiya",
            "Tambuttegama",
            "Eppawala",
        ]
    },
    {
        categoryName:"Colombo",
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "Nugegoda",
        ]
    },
    {
        categoryName:"Matara",
        subCategories:[
            "Matara City",
            "Dikwella",
            "Akuressa",
            "Weligama",
            "Hakmana",
        ]
    },
    {
        categoryName:"Kandy",
        subCategories:[
            "Kandy City",
            "Gampola",
            "Katugasthota",
            "Gampola",
            "Katugastota",
            "Peradeniya",
        ]
    },
    {
        categoryName:"Badulla",
        subCategories:[
            "Badulla City",
            "Banadarwela",
            "Welimada",
            "Mahiyanganaya",
        ]
    },
    {
        categoryName:"Anuradhapura",
        subCategories:[
            "Anuradhapura City",
            "Kekirawawa",
            "Medawachchiya",
            "Tambuttegama",
            "Eppawala",
        ]
    },
];



function LocationPopUp({className=""}) {

    const[SelectedSecondTextsArr,SetSelectedSecondTextsArr]=useState([]);
    const dispatch=useDispatch();




    const handleClick=(e)=>{

        const selectedTitleText=e.target?.closest('.first-list-item')?.querySelector('.first-list-item-text').innerText;
        const selectedSecondListItem=e.target?.closest('.second-list-item')?.innerText;


        if(selectedTitleText){ // selected title


            const selectedSecondTextsArr=FilterDataName(selectedTitleText,locationList)?.subCategories;
    
    
            SetSelectedSecondTextsArr(selectedSecondTextsArr);  // update selected second array
    
            document.querySelector('.PopUp-wrapper').scroll(0,0); //  scroll to top
    
        }
        // console.log(e.target);


        if(selectedSecondListItem){   // set selcted location to redux state
            dispatch( SetClassifedLocationFN(selectedSecondListItem));
            dispatch(ShowHideAllFN());

            // console.log(selectedSecondListItem);
        }


    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
           <PopUp to="/">
                    
                    <div className="title fw-bold font-1-8 text-color-primary">Select city Or Division</div>

                    <PopUpShowList locationList={locationList}  secondList={SelectedSecondTextsArr}></PopUpShowList>

              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LocationPopUp */
    

`;

export default LocationPopUp;
