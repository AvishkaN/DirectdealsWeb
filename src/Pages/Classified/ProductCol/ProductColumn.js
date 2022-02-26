import styled from 'styled-components';
import MobilePhoto1 from './../../../assets/img/productImages/fitted (1).jpg';
import MobilePhoto2 from './../../../assets/img/productImages/fitted.jpg';
import Link from '../../../Components/UI/Link/Link';
import Product from './Product';

import TimeIconSvg from '@mui/icons-material/AccessTimeOutlined';
import TagIconSvg from '@mui/icons-material/LocalOfferOutlined';
import LocationIconSvg from '@mui/icons-material/FmdGoodOutlined';

const classifiedProducts=[
    // {
    //     image:"https://i.ikman-st.com/laptop-for-sale-colombo-4435/a9a2f172-2212-4df8-bc94-7679f07f2157/620/466/fitted.jpg",
    //     productName:" Solar led display",
    //     AdType:"Classified",
    //     location:"malabe",
    //     Price:"Rs 15, 000",
    //     nearBy:"nearby 1 Km",
    // },
    {
        image:"https://i.ikman-st.com/laptop-for-sale-colombo-4435/a9a2f172-2212-4df8-bc94-7679f07f2157/620/466/fitted.jpg",
        productName:" Solar led display",
        
        list:{
            date:{
                text:"17 Mar 2021, 3:49pm",
                icon:<TimeIconSvg className=""></TimeIconSvg>
            },
            location:{
                text:"malabe",
                icon:<LocationIconSvg className="" ></LocationIconSvg>
            },
            category:{
                text:"land",
                icon:<TagIconSvg></TagIconSvg>
            },


            
        },
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",

        premiumMember:true,
    },
    {
        image:"https://i.ikman-st.com/laptop-for-sale-colombo-4435/a9a2f172-2212-4df8-bc94-7679f07f2157/620/466/fitted.jpg",
        productName:" Solar led display",
        
        list:{
            date:{
                text:"17 Mar 2021, 3:49pm",
                icon:<TimeIconSvg className=""></TimeIconSvg>
            },
            location:{
                text:"malabe",
                icon:<LocationIconSvg className="" ></LocationIconSvg>
            },
            category:{
                text:"land",
                icon:<TagIconSvg></TagIconSvg>
            },


            
        },
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",

        premiumMember:true,
    },
    {
        image:"https://i.ikman-st.com/laptop-for-sale-colombo-4435/a9a2f172-2212-4df8-bc94-7679f07f2157/620/466/fitted.jpg",
        productName:" Solar led display",
        
        list:{
            date:{
                text:"17 Mar 2021, 3:49pm",
                icon:<TimeIconSvg className=""></TimeIconSvg>
            },
            location:{
                text:"malabe",
                icon:<LocationIconSvg className="" ></LocationIconSvg>
            },
            category:{
                text:"land",
                icon:<TagIconSvg></TagIconSvg>
            },


            
        },
        Price:"Rs 15, 000",
        nearBy:"nearby 1 Km",

        premiumMember:true,
    },


];



function ProductColumn({className="",}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductColumn-wrapper row">

        {
        classifiedProducts.map(product=>(
            <div className=" col-sm-12 col-6    ">

                        <Link to="/single-product">
                                <Product className='product-item  me-2 ms-2  mb-3 cursor-p  w-90' product={product}></Product>
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
            border-top: 0.5px solid #d4ded9;
            border-bottom: 0.5px solid #d4ded9;

          

            box-shadow: 0 0 8px 0 #d4ded9;
           border-radius: 4px;
            &:hover{
            }

            @media(max-width:1085px){
                width: 100% !important;
            }
        }

    }
`;

export default ProductColumn;
