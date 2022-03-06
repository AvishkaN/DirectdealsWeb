import styled from 'styled-components';
import { useState } from 'react';
import FilterSelectTitle from '../../../../Components/UI/SelectJs/FilterSelectTitle';
import DropDownList from '../../../../Components/UI/DropDownList/DropDownList';



function FilterSelect({className="",selectedColor="",filterSectionTitle,filterList,titleSvg,filterDefaultSelectedText,ShowListProp}) {

    const [showList,setShowList]=useState(false);
    const [selectedName,setSelectedName]=useState(filterDefaultSelectedText);



    const ShowListFN=(e)=>{

        setShowList(!showList);

        const IsCustomLinkSelected=e.target.closest('.custom-list-item');

        if(IsCustomLinkSelected){

            const selectedText=e.target.closest('.custom-list-item').innerText;
            setSelectedName(selectedText);   

        }


    }

  return (
    <DIV selectedColor={selectedColor}  className={`${className}`} IsShowList={showList} onClick={ShowListProp? ShowListProp:ShowListFN}>
         <div className="FilterSelect-wrapper " >

         {/* <FilterSelectTitle showList={showList}  selectedName={selectedName}></FilterSelectTitle> */}

            <div className="filter-section-title display-flex align-item-center">
                {titleSvg}

                <div className="fw-bold">
                    {selectedName}
                </div>

            </div>

            {
                showList && ( 

                 <DropDownList selectedColor={selectedColor}  selectedName={selectedName}  filterList={filterList}></DropDownList>
                )
            }
             


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FilterSelect */
    
    .FilterSelect-wrapper{

        .selected-name{
            background: var(--color-white);

            .arrow-icon{   
                transform:  ${props => props.IsShowList? 'rotate(180deg)': 'rotate(0deg)'};
                transition: all .3s;    
            }
        }
        



    }
`;

export default FilterSelect;
