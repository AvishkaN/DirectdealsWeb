import styled from 'styled-components';
import SearchContainer from './SearchContainer/SearchContainer';
import Slider from './Slider/Slider';
import LinkSection from './LinksSection/LinkSection';
import ProductsRow from './../Home/RentSectionPopular/ProductsRow';
import { useEffect } from 'react';

const data=[
  {
  priceTag:"RS. 750", 
  isProperty:true, 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InZ6cDczYTZ3b3ExMDEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.Zy-2-01WxmW2EO4LHNi-vdrvCUbjMR2kYzpDVy5fsOQ/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"RS. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InM0cTNvMWt4MDl1MS1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjAsInAiOiJjZW50ZXIsMSIsImEiOjEwMH1dfQ.uwDeOT6f0NXfjzQD9VpPtCdGXgQw5JH-sc0tiqscWhc/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"RS. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Ink3bzcxcmFhc2s0LURVQklaWkxFIiwidyI6W3siZm4iOiI1amV1aTdxZnppZTYxLURVQklaWkxFIiwicyI6MCwicCI6ImNlbnRlciwxIiwiYSI6MTAwfV19.3bMIfwvBO3rRrcWF9zdVvX5jA8U1byIQgga_nWN1uDo/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"RS. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Im12ZjhlNWUzOGhxcTItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.NRIhRXwmAoV8ZLK7JU0uSwVXV1vr7SUWwJusmqMAVEg/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"RS. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InVpdDlsMTl4Y3J3MDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.VTv3YSgCTYbOGlPzMZTUfYDsUG3I23a7-hB7vHcoNUY/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"New. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Im12ZjhlNWUzOGhxcTItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.NRIhRXwmAoV8ZLK7JU0uSwVXV1vr7SUWwJusmqMAVEg/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  priceTag:"New. 7500", 
  PropertyInfolist:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InVpdDlsMTl4Y3J3MDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.VTv3YSgCTYbOGlPzMZTUfYDsUG3I23a7-hB7vHcoNUY/image;p=main",
  nameOrYear:"Al jimi"
  },

  // {
  // priceTag:"RS. 7500", 
  // list:['5 Beds','5 Baths'], 
  // imgSrc:"",
  // nameOrYear:"Al jimi"
  // },
]


function PropertyPage({className=""}) {
  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

  },[]);
  return (
    <DIV className={`${className}`}>
         <div className="PropertyPage-wrapper">
                 <SearchContainer></SearchContainer>
                 {/* <Slider></Slider> */}
                 <ProductsRow className="mt-5 product-row-property-page" title={"Popular Properties"} data={data}></ProductsRow>
                 <LinkSection></LinkSection>
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%; 

    
    .PropertyPage-wrapper{
      margin-top:6rem;  
      width: var(--page-content-width);
      margin-left: auto;
      margin-right: auto; 

      .product-row-property-page{
        .products-card-items-row{
          flex-wrap:wrap;  

          .card-item{  
            @media (max-width: 600px){
                width: 50%;  
            }    
        }


        }
      }

    
        
    
    }
`;

export default PropertyPage;
