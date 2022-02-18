import styled from 'styled-components';
import FeatureItem from './FeatureItem';



function FeatureSection({className="",product}) {
  return (
    <DIV className={`${className} row  gy-2`}>
           {
               
                product.features.feturesList.map((summeryItem)=>(

                    <div className="col-4">
                        <FeatureItem svgIcon={product.features.svgIcon}   txt={summeryItem} ></FeatureItem>

                    </div>

                ))
        }
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FeatureSection */



    
 
`;

export default FeatureSection;
