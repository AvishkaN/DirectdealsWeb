import styled from 'styled-components';
import Search from '../../../Components/Search/Search';
import DropDownList from '../../../Components/UI/DropDownList/DropDownList';
import FilterSelect from '../../../Components/UI/SelectJs/FilterSelect';
import AllCategories from './AllCategories/AllCategories';

import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import { districtsSuggestion } from '../../../Data/Data';


const AllCategoriesList=[

    {
      listTxt:"Cars & Vehicles",
      SvgIcon:<i className="ion-model-s cat-ico   text-color-primary   font-1-9  " />,
      count:"(6690)"
    },
    
    {
      listTxt:"Electronics",
      SvgIcon:<i className="lnr lnr-laptop-phone cat-ico   text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Property",
      SvgIcon:<i className="ion-ios-home-outline cat-ico   text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Fashion, Health & Beauty ",
      SvgIcon:<i className="lnr lnr-shirt linier-icon cat-ico   text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Home & Garden",
      SvgIcon:<i className="lnr lnr-sun cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Animals",
      SvgIcon:<i className="ion-ios-paw-outline cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Education",
      SvgIcon:<i className="lnr lnr-graduation-hat cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Food & Agriculture",
      SvgIcon:<i className="lnr lnr-leaf linier-icon cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Services",
      SvgIcon:<i className="ion-wrench cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Others",
      SvgIcon:<i className="ion-ios-albums-outline cat-ico text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Hotel, Travels & Tours",
      SvgIcon:<i className="ion-beer cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
    {
      listTxt:"Jobs",
      SvgIcon:<i className="ion-briefcase cat-ico  text-color-primary font-1-9    " />,
      count:"(8185)"
    },
  
   
  
  
  
  ];



const LocationsList=[

    {
      listTxt:"Colombo",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(6690)"
    },
    
    {
      listTxt:"Gampaha",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Kandy",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Kurunagla ",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Kandy",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Kegalle",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Galle",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Matara",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Matale",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Ratnapura",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Puttalam",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Anuradhapura",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Badulla",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Hambantota",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Nuwara Eliya",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Polonnaruwa",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Ampara",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Moneragala",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Batticaloa",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
    {
      listTxt:"Trincomalee",
      SvgIcon:<LocationIcon className="ion-model-s cat-ico   text-color-primary   font-2  " />,
      count:"(28)"
    },
  
   
  
  
  
  ];
  



function FilterColumn({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FilterColumn-wrapper">

                {/* Sort results by */}
             <div className="sort">
                    <div className="text-color-grey-ori font-1-3">Sort results by</div>
                    <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Price Range"} filterList={["Date: Newest on top","Date: Oldest on top","Price: High to low","Price: Low to high"]} filterDefaultSelectedText={"Date:Newest on top"} DropDownListItemclassName="p-2 font-1-5"></FilterSelect>
             </div>

              {/* Nearby Location */}
             <div className="mt-4">
                    <div className="text-color-grey-ori font-1-3">Nearby Location</div>
                    <Search  
                            className='search border-radius-5   mt-2 '
                            searchFiledClassName='  search-field-className p-2   border-radius-5'
                            SearchIconClassName=' search-icon-className  font-2-3 text-color-primary  '
                            ListItemClassName='  list-item-className  p-2 '

                    />

             </div>


                {/* Filer Ads By */}
            <div className="filter-ads-by mt-4">
                  <div className=" text-color-grey-ori font-1-3 ">Filter ads by</div>


                <div className='display-flex align-item-center '> 
                    <input  className='' type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                    <label htmlFor="vehicle1" className='ms-2 ps-3 pe-3  border-radius-5 text-color-white fw-bold cursor-p font-1-1  background-primary  '> URGENT</label><br />
                </div>


                <div className='display-flex align-item-center '> 
                
                    <input  className='' type="checkbox" id="FEATURED" name="vehicle1" defaultValue="FEATURED" />
                    <label htmlFor="FEATURED" className='features ms-2 ps-3 pe-3  border-radius-5 text-color-white fw-bold cursor-p font-1-1 background-green  '> FEATURED</label><br />
                </div>
            </div>


            <div className="type-of mt-4 ">
                    <div className="text-color-grey-ori font-1-3">Type of poster</div>
                    <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Price Range"} filterList={["Members","Authorized Agent","Non-members","All"]} filterDefaultSelectedText={"All"} DropDownListItemclassName="p-2 font-1-5"></FilterSelect>
             </div>



 


            
            <div className="all-categories">


                    {/* Category Section */}
                    <div className="font-1-4 mt-5">Category</div>
                      <AllCategories  className='mt-2'  AllCategoriesList={AllCategoriesList}></AllCategories>
                        

                    {/* Location Section */}
                    <div className="font-1-4 mt-5"> Location </div>
                      <AllCategories className='mt-2'   AllCategoriesList={LocationsList}></AllCategories>

            </div>



         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FilterColumn */
    
    .FilterColumn-wrapper{
      /* width: var(--FilterColumn-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .filter-select{  
            border: 1px solid #e7edee;


            .selected-name{
              border-bottom: 1px solid var(--color-grey-ori);
                padding: 0.5rem!important;    
            }
        }


        .filter-ads-by{
            label{
                /* background: #d95e46;    */
            }

            .features{
                /* background: #673500;      */
            }
        }

    }


    .search{
        border:1px solid #e7edee ;
        
        .search-field-className{

        }
        .search-icon-className{

        }
        .list-item-className{

        }

        


    }
`;

export default FilterColumn;
