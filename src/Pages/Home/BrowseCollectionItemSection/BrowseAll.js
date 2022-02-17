import styled from 'styled-components';


const browseAllCollectionData=[
  {
    collectionName:"Electronics",
    Img:"https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/4a90e2/external-phone-retro-80s-icongeek26-linear-colour-icongeek26.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Vehicles",
    Img:"https://img.icons8.com/plasticine/64/26e07f/car--v2.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Property",
    Img:"https://img.icons8.com/emoji/64/26e07f/house-emoji.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Home and Garden",
    Img:"https://img.icons8.com/fluency/64/26e07f/garden.png",
    AdsAmount:"120,100 ads",
  },




  {
    collectionName:"Animals",
    Img:"https://img.icons8.com/color/48/26e07f/dog.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Jobs",
    Img:"https://img.icons8.com/color/64/26e07f/find-matching-job.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Business & Industry",
    Img:"https://img.icons8.com/office/64/26e07f/manufacturing.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Hobby",
    Img:"https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-ball-sports-and-games-icongeek26-flat-icongeek26.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Service",
    Img:"https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/64/000000/external-service-customer-support-sbts2018-lineal-color-sbts2018.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Fashion & Beauty",
    Img:"https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-watch-travel-checklist-photo3ideastudio-flat-photo3ideastudio.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Essential",
    Img:"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/000000/external-exotic-cooking-with-olive-oil-and-other-essential-oil-restaurant-shadow-tal-revivo.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Education",
    Img:"https://img.icons8.com/external-becris-flat-becris/64/000000/external-education-literary-genres-becris-flat-becris.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Agriculture",
    Img:"https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-leaf-thanksgiving-wanicon-flat-wanicon.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Other",
    Img:"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/000000/external-information-panel-at-hospital-and-other-premises-hospital-shadow-tal-revivo.png",
    AdsAmount:"120,100 ads",
  },
  {
    collectionName:"Work Overseas",
    Img:"https://img.icons8.com/external-soft-fill-juicy-fish/64/000000/external-work-digital-nomad-soft-fill-soft-fill-juicy-fish-10.png",
    AdsAmount:"120,100 ads",
  },
];


function BrowseAll({className=""}) {
  return (
    <DIV className={`${className} pb-5  `}>
         <div className="BrowseAll-wrapper ">
                
                  <h3 className='fw-bold'>Browse items by category</h3>

                  <div className="browse-item-collection row gy-6 mt-4      ">
                    {
                      browseAllCollectionData.map(collectionData=>(
                        <div className="col-3 cursor-p browse-item pb-5">
                                <div className="row ">
                                  <div className="browse-item-col  col-4 col-md-3 ms-auto me-auto">
                                        <img src={collectionData.Img} className="w-100" alt="" />
                                  </div>
                                  <div className="col-12 col-md-9 text-center">
                                        <div className="name fw-bold  font-1-5">{collectionData.collectionName} </div>
                                        <div className="amount font-1-3">{collectionData.AdsAmount} </div>
                                  </div>
                                </div>
                        </div>
                      ))
                    }
                  </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only BrowseAll */
    
    .BrowseAll-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 


        .browse-item-collection{

          @media(max-width:958px){     
            justify-content: space-between;
         }

          @media(max-width:768px){       
            flex-wrap: nowrap; 
            overflow: auto;
         }

        }




        .browse-item{
           width:  24%;  
           
           @media(max-width:958px){     
             width:  27%;  
          }
           @media(max-width:464px){     
             width:  29%;  
          }
           @media(max-width:400px){     
             width:  31%;  
          }
          
          .browse-item-col{
                @media(max-width:471px){     
                  width:  50%;  
              }

          }
        }

    }
`;

export default BrowseAll;
