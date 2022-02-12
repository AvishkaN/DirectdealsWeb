import styled from 'styled-components';



function ProductItem({className="",svgIcon,text,iconText}) {
  return (
    <DIV className={`${className} display-flex `}>
        <div className="w-50 display-flex align-item-center">
            {svgIcon}
            <div className="font-1-3">{iconText}</div>
        </div>
            <div className="text">
                    {text}
            </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: yellow;     */
    border-bottom: 1px solid rgb(238, 240, 241);

    &:last-child{
        border-bottom: 0;
    }

`;

export default ProductItem;
