import styled from 'styled-components';



function ProductDetailIcon({className="",svgIcon,text}) {
  return (
    <DIV className={`${className} display-flex  align-item-center  font-1-3 text-color-grey-ori`}>
        {console.log(svgIcon)}
        {console.log(text)}
         {svgIcon}
         <div className="font-size-inherit ms-1">{text}</div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProductDetailIcon */

    @media(max-width:396px){     
                     font-size: 1.2rem;
        }

`;

export default ProductDetailIcon;
