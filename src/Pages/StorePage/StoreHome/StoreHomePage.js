import styled from 'styled-components';



function StoreHomePage({className="",store}) {
  return (
    <DIV className={`${className}`} backgroundImg={store.backgroundImage}>
         <div className="StoreHomePage-wrapper">
               <div className="banner "> </div>


               <div className="shop-description">
                   <div className="row justify-content-around ">

                                <div className="col-9 ">
                                      <div className="text text-color-grey-ori  font-1-8 ">{store.shopDescription}</div>
                                </div>

                                <div className="col-2">
                                         <div className="box-img w-100">
                                                  <img src={store.boxImg} alt="" className='w-100' />
                                        </div>

                                </div>
                               
                  
                  
                   </div>
               </div>
       
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

        }

    }
`;

export default StoreHomePage;
