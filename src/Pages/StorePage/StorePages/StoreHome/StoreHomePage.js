import styled from 'styled-components';
import ShowMoreTxt from '../../../../Components/UI/ShowMoreTxt/ShowMoreTxt';
import RecentAds from './RecentAds/RecentAds';
import ServicesSection from './../../ServicesSection/ServicesSection';



function StoreHomePage({className="",store}) {
  return (
    <DIV className={`${className}`} backgroundImg={store.backgroundImage}>
         <div className="StoreHomePage-wrapper">
           {/* Banner */}
               <div className="banner "> </div>


                  {/* Shop Description */}
               <div className="shop-description mt-6 pb-4">
                   <div className="shop-description-row row justify-content-around ">


                                  {/* Description Text  */}
                                <div className="col-9  description-text">  
                                      <div className="text text-color-grey-ori  font-1-8 ">
                                         <ShowMoreTxt className='font-1-8 text-center' showMoreTextClassName={'text-color-primary  text-color-link   '}  paragraph={store.shopDescription} words={90}/>

                                        </div>
                                </div>

                                  {/* Box Img  */}
                                <div className="col-2 box-img">
                                         <div className=" w-100">
                                                  <img src={store.boxImg} alt="" className='w-100' />
                                        </div>

                                </div>
                               
                  
                  
                   </div>
               </div>

               {/* Recent Ads */}
               <div className="mt-5 pb-4 recent-ads ">
                    <h2 className='fw-bold text-center  font-2-3'> Recent Ads  </h2>

                    <RecentAds className=' mt-5 ' AllAds={store} sliceNum={-3}></RecentAds>
               </div>

               {/* Services */}
               <div className="mt-6 pb-4  cursor-p">
                    <h2 className='fw-bold text-center  font-2-3'> Our Services  </h2>
                     
                      <ServicesSection className='mt-4'></ServicesSection>
               </div>


               {/* Footer */}




       
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreHomePage */
    
    .StoreHomePage-wrapper{
      /* width: var(--StoreHomePage-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .banner{
            height:40vh;
            background-image: url(${props => props.backgroundImg});
            background-position: center center;
             background-size: cover;
        }

        .shop-description{
                width: var(--storeWidth);
                margin-left: auto;
                margin-right: auto; 


                .shop-description-row{

                  .description-text{

                    @media(max-width:1171px){     
                       width: 99%;
                    }
                  }
                  
                  .box-img{
                    @media(max-width:1171px){     
                        display: none;
                    }

                  }
                }

        }


        .recent-ads{
          /* background:red;  */
        }

    }
`;

export default StoreHomePage;
