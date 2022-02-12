import styled from 'styled-components';



function Card({className="",imgSrc,img,priceTag,nameOrYear,PropertyInfolist,productCategory}) {
  return (
    <DIV className={`${className}`}>
         <div className="Card-wrapper p-3">
                <img className='w-100 item-image' src={imgSrc} alt="" />
                <div className="details">
                   <div className="price-tag text-color-primary fw-bold text-sm-center mt-3">{priceTag} </div>
                        {PropertyInfolist &&(  <div className="name display-flex ">
                            <li key={Math.random}  className='w-42 font-1-3 '>{PropertyInfolist[0]}</li> 
                            <li key={Math.random}  className='w-42 font-1-3 '>{PropertyInfolist[1]}</li> 
                            </div> )}

                    {productCategory &&(
                        <div className="productCategory">
                                {productCategory}
                        </div>
                    )}
                   <div className="country-name text-color-grey"> {nameOrYear}</div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Card */
    /* background-color: grey;  */
    border-radius: 10px; 
    transition: all .1s;  

    &:hover{
        background-color: #ebe9e9; 
        /* box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px !important;  */
        
    }
    
    .Card-wrapper{
        /* box-shadow: 5px 5px 15px 5px #000000;  */
      /* width: var(--Card-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .item-image{
            border-radius: 10px; 
            object-fit: cover;


            /* @media(min-width:576px){
                height: 146px;  

            } */
            @media(min-width:300px){ 
                height: 146px;  

            }
        }
        .details{  

            .price-tag{
                /* background-color: #fff;   */
                /* box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);    */
                /* box-shadow: 5px 5px 15px 5px #000000;  */

                @media(min-width:768px){
                    text-align: left !important;  
                }
            }

            .name{

                @media(max-width:438px){     
                      flex-direction:column;
                }  

               li{

                @media(max-width:1279px){     
                      list-style: none;  
                    }  
                @media(max-width:1279px){     
                      list-style: none;  
                    }  
                @media(max-width:992px){     
                    list-style: disc;
                }  
                @media(max-width:611px){     
                   width:50% ;  
                }  
                
                @media(max-width:438px){     
                    width:100% ;  
                    list-style: none;  

                }  


                   &:first-child {
                    list-style: none;  
                    }

                    &::marker{
                        /* color:red; 
                        margin: 0;  */
                    }
                    
                }
            }

        }

    }
`;

export default Card;
