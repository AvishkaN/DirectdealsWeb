import styled from 'styled-components';



function ItemOverviewCard({className="",svgIcon,text,bottomText}) {
  return (
    <DIV className={`${className}`}>
         <div className="ItemOverviewCard-wrapper text-center">

             <div className="font-1-2 fw-bold">{text}</div>
                {svgIcon}
                <div className="bottom-text">
                    {bottomText}
                </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: yellow;   */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ItemOverviewCard */

    box-shadow:rgb(0, 0,0,  0.08) 0px 0px 15px -3px, rgb(0, 0 ,0 , 0.04) 0px 4px 6px -2px !important;
    
    .ItemOverviewCard-wrapper{
      /* width: var(--ItemOverviewCard-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ItemOverviewCard;
