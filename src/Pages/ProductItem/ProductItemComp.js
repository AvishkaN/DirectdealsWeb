import styled from 'styled-components';
import Slider from '../../Components/ProductSlider/Slider';
import ProductItemRight from './ProductItemRight/ProductItemRight';
import WarningText from './WarningText/WarningText';
import SummaryIconsSection from './SummaryIconsSection/SummaryIconsSection';
import Specification from './Specification/Specification';
import FeatureSection from './FeatureSection/FeatureSection';


import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import CarGear from '@mui/icons-material/DisplaySettingsOutlined';
import GasStationIcon from '@mui/icons-material/LocalGasStationOutlined';
import MeterIcon from '@mui/icons-material/SpeedOutlined';


// Spefication Icons
import FlagIcon from '@mui/icons-material/OutlinedFlag';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import CalenderIcon from '@mui/icons-material/DateRangeOutlined';

// Right Icon
import CorrectIcon from '@mui/icons-material/Check';
import RecentAds from '../StorePage/StorePages/StoreHome/RecentAds/RecentAds';



const product={

  productName:"KIA Spectra 2001",
  storeName:"Isuru Auto Land",
  storeLogoPng:"https://www.saleme.lk/saleme/images/prime-members/5025/profile_1728145815_5025.jpg",

  images:[
    "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6IjJmeTdsdDNrd3E4di1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjMwLCJwIjoiY2VudGVyLDEiLCJhIjo4MH1dfQ.qMTaqgzhPzw-95h3YrcJtV4LA6OeqQjX8OyUa9Y2ZBk/image;s=858x644"
    ,"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inpib3R3bmlrNGYwejEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.tob26lvxejLUhGJCxzDSIjS1sDUQhaB38ot75vP6NRo/image;s=858x644"
    ,"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inpib3R3bmlrNGYwejEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.tob26lvxejLUhGJCxzDSIjS1sDUQhaB38ot75vP6NRo/image;s=858x644"
    ,"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InV4MTMxa3czNXBvODEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.it9qTSaeaFUmoV184XRL0ZCPsyhC6fwjitg6ND9Z-DE/image;s=858x644",
    "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Imlzd3hsZnVlejVveDEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.YXoUi2jHpap8j1jhEe8FEIFc4VnzrJqiRa68F_oL67M/image;s=858x644"
  ],

  summery:[
    {
      svgIcon:<HistoryIcon className='font-4' ></HistoryIcon>,
      label:"Condition",
      txt:"Used",
    },
    {
      svgIcon:<CarGear className='font-4' ></CarGear>,
      label:"Transmission",
      txt:"Automatic",
    },
    {
      svgIcon:<GasStationIcon className='font-4' ></GasStationIcon>,
      label:"Fuel Type",
      txt:"Petrol",
    },
    {
      svgIcon:<MeterIcon className='font-4' ></MeterIcon>,
      label:"Kms Driven",
      txt:"kms",
    },

  ],


  specifications:[
    {
      svgIcon:<FlagIcon    className='w-5 font-2-7' ></FlagIcon>,
      label:"Condition",
      txt:"Used",
    },
    {
      svgIcon:<ArticleIcon    className='w-5 font-2-7' ></ArticleIcon>,
      label:"Transmission",
      txt:"Automatic",
    },
    {
      svgIcon:<CalenderIcon    className='w-5 font-2-7' ></CalenderIcon>,
      label:"Fuel Type",
      txt:"Petrol",
    },
    {
      svgIcon:<MeterIcon    className='w-5 font-2-7' ></MeterIcon>,
      label:"Kms Driven",
      txt:"kms",
    },
    {
      svgIcon:<ArticleIcon    className='w-5 font-2-7' ></ArticleIcon>,
      label:"Transmission",
      txt:"Automatic",
    },
    {
      svgIcon:<CalenderIcon    className='w-5 font-2-7' ></CalenderIcon>,
      label:"Fuel Type",
      txt:"Petrol",
    },
    
  ],

  features:{
      svgIcon:<CorrectIcon></CorrectIcon>,
      feturesList:[
        "A/C",
        "Air Bags",
        "Power Windows",
        "Alloy Wheel",
      ]
    }
  ,

  description:`
              good running condition . 
             finance can be Arranged. 
             call for more details.
  `,
  
  Location:"Kegalle",
  UpdateTime:"28 January 2022",
  MobileNumber:"94722814383 ",
  Email:"test@gmail.com",
  Price:"2,175,000",
  
};

const store={
  allAds:[

    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
        adName:"QMitsubishi L200 1994",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
        adName:"Nissan tres sunny 1986",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86931/saleme_61f35750ac550.jpg",
        adName:"Mitsubishi L200 1994",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86932/saleme_61f3582b2b48c.jpg",
        adName:"KIA Spectra 2001",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86934/saleme_61f35a37c2b32.jpg",
        adName:"Nissan tres sunny 1986",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86931/saleme_61f35750ac550.jpg",
        adName:"Mitsubishi L200 1994",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },
    {
        adPhot:"https://www.saleme.lk/saleme/images/uploads/86932/saleme_61f3582b2b48c.jpg",
        adName:"KIA Spectra 2001",
        location:"Kegalle",
        price:"3,450,000",
        description:"good running...",
        timeAndDate:"2 Feb 2022, 6:25pm ",
    },



  ],


};







function ProductItemComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductItemComp-wrapper row">

              {/* Slider */}
            <div className="col-lg-7   product-item-left ">
                     <Slider className='' images={product.images}></Slider>

            </div>

              {/* Right Details */}
            <div className="col-lg-4  product-item-right  mt-5">
                    <ProductItemRight product={product}></ProductItemRight>

            </div>


            <div className="product-item-details">

                    {/* Warning Text */}
                    <WarningText className=' m-2 mt-5'></WarningText>  

                    {/* Summary Icons Section */}

                    <SummaryIconsSection className='mt-5'   product={product} ></SummaryIconsSection>

                      {/* Specification Section */}
                      <div className="mt-4">
                              <div className="font-2 mt-4">Specifications</div>
                              <Specification className=''   product={product} ></Specification>

                      </div>

                          {/* Features */}
                      <div className="mt-4">
                              <div className="font-2 mt-4">Features</div>
                              <FeatureSection className='mt-4'   product={product} ></FeatureSection>

                      </div>



                      {/* Description */}
                      <div className="mt-4">
                              <div className="font-2 mt-4">Description</div>
                              <div className="">{product.description}</div>

                      </div>



            </div>

            {/* Similar Products */}
            <div className="mt-4">
                      {/*title   */}
                    <div className=" mt-4 background-secondary  border-radius-5 p-2 display-inline-block">
                          <span className="font-1-7  "> Similars Ads by </span>
                          <span className="font-1-7 fw-bold text-color-primary">{product.storeName}</span>
                  </div>


                  <RecentAds className=' mt-4  '    columnSizeClassName={" ad-col-3"}  store={store} sliceNum={-4}></RecentAds>


            </div>



         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    --this-page-size:60%;
    
    
    @media(max-width:992px){     
          --this-page-size:98%;
        }
    
    .ProductItemComp-wrapper{
    

        .product-item-details{ 
          /* background:yellow; */
          width: var(--this-page-size);
          margin-right: auto;
        }

    }
`;

export default ProductItemComp;
