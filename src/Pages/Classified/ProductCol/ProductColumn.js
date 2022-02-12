import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
import Product from './Product';

const classifiedProducts=[
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",   
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",  
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",     
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",       
         productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },


    
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",   
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",  
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",     
        productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },
    {
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",       
         productName:"Calculator CT-8866V Solar led display",
        Address:"253A Galle Road, 04",
        telNo:"071 127 8952",
        Web:"www.retret.com",
        CategoryAndType:"Electronics & Others",
    },

];



function ProductColumn({className="",}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductColumn-wrapper">

        {
        classifiedProducts.map(product=>(
            <Link to="/product-item/:7884546546324165">
                    <Product className='product-item  ms-3 me-3 cursor-p mt-5 w-70' price={product.price} Address={product.Address}  image={product.image} name={product.productName} telNo={product.telNo} Web={product.Web}  CategoryAndType={product.CategoryAndType}></Product>
            </Link>
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
