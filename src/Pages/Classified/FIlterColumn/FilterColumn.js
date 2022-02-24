import styled from 'styled-components';
import Search from '../../../Components/Search/Search';
import DropDownList from '../../../Components/UI/DropDownList/DropDownList';
import FilterSelect from '../../../Components/UI/SelectJs/FilterSelect';
import AllCategories from './AllCategories/AllCategories';



function FilterColumn({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FilterColumn-wrapper">

             <div className="sort">
                    <div className="font-1-4">Sort results by</div>
                    <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Price Range"} filterList={["Date: Newest on top","Date: Oldest on top","Price: High to low","Price: Low to high"]} filterDefaultSelectedText={"Date:Newest on top"}></FilterSelect>
             </div>

             <div className="mt-4">
                    <div className="font-1-4">Nearby Location</div>
                    <Search  
                            className='search border-radius-5   mt-2 '
                            searchFiledClassName='  search-field-className p-2   border-radius-5'
                            SearchIconClassName=' search-icon-className  font-2-3 text-color-primary  '
                            ListItemClassName='  list-item-className  p-2 '

                    />

             </div>


            <div className="filter-ads-by mt-3">
                  <div className="font-1-4">Filter ads by</div>


                <div className='display-flex align-item-center mt-3'> 
                    <input  className='' type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                    <label htmlFor="vehicle1" className='ms-2 ps-3 pe-3  border-radius-5 text-color-white fw-bold cursor-p font-1-1'> URGENT</label><br />
                </div>


                <div className='display-flex align-item-center mt-3'> 
                
                    <input  className='' type="checkbox" id="FEATURED" name="vehicle1" defaultValue="FEATURED" />
                    <label htmlFor="FEATURED" className='features ms-2 ps-3 pe-3  border-radius-5 text-color-white fw-bold cursor-p font-1-1'> FEATURED</label><br />
                </div>
            </div>


            <div className="type-of mt-5">
                    <div className="font-1-4">Type of poster</div>
                    <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Price Range"} filterList={["Members","Authorized Agent","Non-members","All"]} filterDefaultSelectedText={"All"}></FilterSelect>
             </div>


            <div className="all-categories">
                      <AllCategories></AllCategories>
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
            border: 1px solid var(--color-grey);


            .selected-name{
                padding: 0.5rem!important;    
            }
        }


        .filter-ads-by{
            label{
                background: #d95e46;   
            }

            .features{
                background: #673500;     
            }
        }

    }


    .search{
        border:1px solid var(--color-grey) ;
        
        .search-field-className{

        }
        .search-icon-className{

        }
        .list-item-className{

        }

        


    }
`;

export default FilterColumn;
