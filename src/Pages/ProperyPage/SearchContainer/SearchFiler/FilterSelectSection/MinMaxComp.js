import { useState } from 'react';
import styled from 'styled-components';
import FilterSelectTitle from '../../../../../Components/UI/SelectJs/FilterSelectTitle';
import MinMax from '../../../../../Components/UI/MinMax/MinMax';



function MinMaxComp({className="",priceColVal1="min",priceColVal2="Max",maxValuePlaceholder, minValuePlaceholder,IsPriceComp=false}) {      
  const [showList,setShowList]=useState(false);   
  const [minValue,setMinValue]=useState("");   
  const [maxValue,setMaxValue]=useState("");   
  

  const handleClick=(e)=>{   
    if(e.target.closest('.selected-name')){  // select name
      
      setShowList(!showList);  
    }
  };

  const setNumberMinMaxFn=(e)=>{  
    
    const value=e.target.closest('input').value;

    if(e.target.closest('.price-col-min')){  // is min selected
      setMinValue(`${IsPriceComp?'Rs ':''}`+value);
      
    }
    if(e.target.closest('.price-col-max')){  // is max selected
      setMaxValue(value);

    }
  }



  return (
    <DIV className={`${className}`}  onClick={handleClick} onChange={setNumberMinMaxFn}>
         <div className="MinMaxComp-wrapper">
               <FilterSelectTitle showList={showList}  selectedName={maxValue|| minValue ?  ` ${minValue}  ${maxValue&&`-${maxValue}`}`:"any"}></FilterSelectTitle>
               {showList &&   <MinMax   minValuePlaceholder={ minValuePlaceholder} maxValuePlaceholder={maxValuePlaceholder}  priceColVal1={priceColVal1} priceColVal2={priceColVal2} className='mt-2'></MinMax>}
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .MinMaxComp-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default MinMaxComp;
