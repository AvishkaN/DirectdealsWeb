import styled from 'styled-components';
import MinMaxComp from './FilterSelectSection/MinMaxComp';
import FilterSelect from '../../../../Components/UI/SelectJs/FilterSelect';
import Input from '../../../../Components/UI/Input/Input';
import Button from './../../../../Components/UI/Button/Button';



function SeachFilterRow2({className="",selectedNav,SetSelectedNav}) {   



  
  return (
    <DIV className={`${className}`}>
         <div className="SeachFilterRow2-wrapper row display-flex gx-2">
                        <div className="col-1">  
                            <div className="select-title text-color-white font-1-2">{'City'}</div>
                            <FilterSelect  filterSectionTitle={"City"} filterList={["colombo","kandy","matara","negambo","maharagama","kottawa","matara"]} filterDefaultSelectedText={"Kandy"}></FilterSelect>

                        </div>
                        <div className="col">  
                                <div className="select-title text-color-white font-1-2">{'Location'}</div>
                                <Input text={"Enter Neighrhood or Building"} className='input border-radius-5'></Input>

                        </div>

                       {(selectedNav==="filter-nav-1" || selectedNav==="filter-nav-2") && ( <div className="col-1">  
                            <div className="select-title text-color-white font-1-2">{'Property Type'}</div>
                            <FilterSelect  filterSectionTitle={"Price Range"} filterList={["colombo","kandy","matara","negambo","maharagama","kottawa","matara"]} filterDefaultSelectedText={"Kandy"}></FilterSelect>


                        </div>)}

                        <div className="col-1">  
                            <div className="select-title text-color-white font-1-2">{'Price Range'}</div>
                            <MinMaxComp priceColVal1={"Min"} priceColVal2={"Max"} IsPriceComp={true}></MinMaxComp>

                        </div>


                       {(selectedNav==="filter-nav-3" || selectedNav==="filter-nav-4")  && (<div className="col-1">  
                            <div className="select-title text-color-white font-1-2">{'Zoned For'}</div>
                            <FilterSelect  filterSectionTitle={"Price Range"} filterList={["colombo","kandy","matara","negambo","maharagama","kottawa","matara"]} filterDefaultSelectedText={"Kandy"}></FilterSelect>


                        </div>)}

                       {selectedNav==="filter-nav-1" &&( <div className="col-1">  
                            <div className="select-title text-color-white font-1-2">{'Beds'}</div>
                            <MinMaxComp priceColVal1={"Min bedrooms"} priceColVal2={"Max bedrooms"}   minValuePlaceholder={"1"} maxValuePlaceholder={"2"}></MinMaxComp>

                        </div>)}


                        <div className="col-1">  
                            <div className="select-title text-color-white font-1-2 opacity-0">{'.'}</div>
                            <FilterSelect  filterSectionTitle={"Any"} filterList={["colombo","kandy","matara","negambo","maharagama","kottawa","matara"]} filterDefaultSelectedText={"More"}></FilterSelect>

                        </div>




                        <div className="col-1 display-flex search-filter-col">  
                              <Button className='search-filter-button background-primary   font-1-4   text-color-white  p-3 mt-4 border-radius-5' text={"Search"}></Button>
                        </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: var(--color-black); */
    background: #000000a6;           
    border-radius: 10px;   
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SeachFilterRow2 */
    
    .SeachFilterRow2-wrapper{
      /* width: var(--SeachFilterRow2-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .input{
          .Input-wrapper{
            input{
              padding: 1rem   
            }
          }
        }

        .search-filter-col{
        flex-direction: column;
          /* justify-content: flex-end;  */
        }


        .col-1{
          width: 11.7%;   
        }

    }
`;

export default SeachFilterRow2;
