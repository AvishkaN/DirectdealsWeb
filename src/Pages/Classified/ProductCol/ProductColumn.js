import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
import Product from './Product';

const classifiedProducts=[
    {
        image:"https://i.ikman-st.com/i3-3-rd-gen-gaming-pc-for-sale-kandy/4d218f00-f5d7-4b10-944e-3815fb1f4387/620/466/fitted.jpg",
        productName:"Calculator CT-8866V Solar led display",
        AdType:"Classified",
        location:"malabe",
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",
    },
    {
        image:"https://i.ikman-st.com/borgwad-bx5-2019-for-sale-colombo/97c03d4c-b32c-434c-a470-3541caec731a/620/466/fitted.jpg",
        productName:"Calculator CT-8866V Solar led display",
        AdType:"Classified",
        location:"malabe",
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",
    },
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        productName:"Calculator CT-8866V Solar led display",
        AdType:"Classified",
        location:"malabe",
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",
    },
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        productName:"Calculator CT-8866V Solar led display",
        AdType:"Classified",
        location:"malabe",
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",
    },
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        productName:"Calculator CT-8866V Solar led display",
        AdType:"Classified",
        location:"malabe",
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",
    },

];



function ProductColumn({className="",}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductColumn-wrapper row">

        {
        classifiedProducts.map(product=>(
            <div className=" col-6  col-md-12 ">

                        <Link to="/single-product">
                                <Product className='product-item  ms-3 me-3 cursor-p mt-5 w-70' product={product}></Product>
                        </Link>
            </div>
            ))
        }
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProductColumn */
    
    .ProductColumn-wrapper{
      /* width: var(--ProductColumn-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .product-item{
            border-bottom: 0.5px solid #d4ded9;

            &:hover{
                box-shadow: 0 0 8px 0 #d4ded9;
               border-radius: 4px;
            }

            @media(max-width:1085px){
                width: 100% !important;
            }
        }

    }
`;

export default ProductColumn;
