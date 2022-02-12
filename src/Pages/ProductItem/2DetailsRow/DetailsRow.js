import styled from 'styled-components';
import PropertFirstDescription from './PropertyFirstDescription/PropertFirstDescription';
import Description from '../1SliderRow/Description/Description';
import Ameties from './Amenties/Ameties';
import PropertyInfo from './PropertInfo/PropertyInfo';
import Map from './Map/Map';
import Form from '../2DetailsRow/Form/Form';
import ItemOverview from './ItemOverview/ItemOverview';




function DetailsRow({className="",product,AmetiesList}) {
  return (
    <DIV className={`${className}`}>
         <div className="DetailsRow-wrapper">
              {product[0].property  &&     <PropertFirstDescription className='mt-6'></PropertFirstDescription>}   
              {product[0].vehicle &&      <ItemOverview className='mt-5'></ItemOverview>}
            <PropertyInfo  className='mt-6'></PropertyInfo>
            <Description className='mt-6'></Description>
            <Ameties  list={AmetiesList} className='mt-6'></Ameties>
            <Map  className='mt-6 cusor-p'></Map>
            <Form  className='mt-6 '></Form>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only DetailsRow */
    /* background: red;  */
    
    .DetailsRow-wrapper{
      /* width: var(--DetailsRow-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mt-6{   
          margin-top: 4.5rem!important;
        }   

    }
`;

export default DetailsRow;
