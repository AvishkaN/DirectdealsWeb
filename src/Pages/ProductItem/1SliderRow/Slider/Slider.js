import styled from 'styled-components';
import ShowBox from './ShowBox';
import Row2 from './Row2';
import { useState } from 'react';
import Button from '../../../../Components/UI/Button/Button';



const data=[
  {
    productName:"4 Villas Compound",
    images:[
      "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6IjJmeTdsdDNrd3E4di1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjMwLCJwIjoiY2VudGVyLDEiLCJhIjo4MH1dfQ.qMTaqgzhPzw-95h3YrcJtV4LA6OeqQjX8OyUa9Y2ZBk/image;s=858x644"
      ,"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inpib3R3bmlrNGYwejEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.tob26lvxejLUhGJCxzDSIjS1sDUQhaB38ot75vP6NRo/image;s=858x644"
      ,"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InV4MTMxa3czNXBvODEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.it9qTSaeaFUmoV184XRL0ZCPsyhC6fwjitg6ND9Z-DE/image;s=858x644",
      "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Imlzd3hsZnVlejVveDEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.YXoUi2jHpap8j1jhEe8FEIFc4VnzrJqiRa68F_oL67M/image;s=858x644"
    ],
    price:"200,000",
    postedBy:"Arna CB",
    profileLogo:"https://dbzlpvfeeds-a.akamaihd.net/images/auto_agents/rsz_binhamoodah.png",
    phoneNumber:"+971504046011"

  },
];



function Slider({className=""}) {


  const [activeImg,setActiveImg]=useState(0);
  const [showMobileNumber,setshowMobileNumber]=useState(false);

  
  
  const handleClick=(e)=>{
    
    const iconLeft=e.target.closest('.arrow-icon-left ');
    const iconRight=e.target.closest('.arrow-icon-right   ');  
    const showMobileNumberBtn=e.target.closest('.show-phone-number-btn');  
    
    

    if(iconRight){
      if(activeImg==(data[0].images.length-1)){
        setActiveImg(0);

      }else{ 

        setActiveImg(activeImg+1);
      }
      

    }


    if(iconLeft){


      if(activeImg==(0)){
        setActiveImg(3);

      }else{ 

        setActiveImg(activeImg-1);
      }
      

    }

    if(showMobileNumberBtn){
      setshowMobileNumber(!showMobileNumber);
    }


  } 


  return (
    <DIV className={`${className}  `} onClick={handleClick}>

      <div className="row-1 row justify-content-space-around">

         <div className="Slider-wrapper col-lg-7">
                  <h2 className="title fw-bold">Villas Compound </h2>
                  <ShowBox className='mt-5' data={data[0].images} activeImg={activeImg}></ShowBox>
         </div>

         <div className="price-container col-lg-3 mt-sm-5">
                <div className="price font-2-7 fw-bold text-color-primary">Rs.   {data[0].price}</div>
       
                <div className="detail-box p-3 mt-3">
                  <div className="row">
                    <div className="col-7">

                          <div className="posted-by font-1-4">posted by</div>
                          <div className="posted-by fw-bold">Bin Hamoodah Auto</div>

                    </div>
                    <div className="col-4">
                      <img src={data[0].profileLogo} alt="" />
                    </div>
                  </div>

                   <Button className='phone-number show-phone-number-btn border-radius-10 pt-3 pb-3 font-1-5 mt-3' 
                          text={`${showMobileNumber?data[0].phoneNumber  :'Show Phone Number'}`}
                          ></Button>
                </div>
        </div>

      </div>

      <div className="row-2 mt-5 ms-5">
        
              <Row2 className='w-35' data={data[0].images} activeImg={activeImg}></Row2>

      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Slider-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

  
        
        .image-gallery{
            
        }

        
      }
      .phone-number{  
        /* background: var(--color-primary); */
        border:2px solid var(--color-primary);

        @media(max-width:992px){
          width: 50%;    
        }
      }


      .price-container{

        .detail-box{ 
          /* border: 2px solid var(--color-grey); */
          box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px 3px;
              @media(max-width:992px){   
                margin-right: 1rem !important;  
                margin-left: 1rem !important;  
                margin-bottom: 1rem !important;  
              }


            .row{

            }
         }


      }
`;

export default Slider;
