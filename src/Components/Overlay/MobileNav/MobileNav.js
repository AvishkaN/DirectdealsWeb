import styled from 'styled-components';



function MobileNav({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MobileNav-wrapper">
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: #fff; 
    height: 100vh; 


    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNav */
    
    .MobileNav-wrapper{
      /* width: var(--MobileNav-content-width);
        margin-left: auto;
        margin-right: auto;  */
        align-items: flex-end;  
        


        .MobileNav{


            .NavRight-wrapper{        
                flex-direction: column;
                
                
                .nav-right-item-container{
                    width: 100% !important;    
                    .IconContainer-wrapper{
                        flex-direction: column;

                        .Icon-wrapper{
                            /* background: red;  */
                            flex-direction: row; 
                            margin-top: 1.3rem;  
                            /* justify-content: flex-end; */

                            .nav-right-icon{  
                                font-size: 2rem;
                            }
                            .nav-right-text { 
                                font-size: 1.6rem;
                                margin-left: 0.5rem  

                            }

                        }
                        
                    } 
                }
                .nav-right-button-container{
                    flex-direction: column;
                    width: 100% !important; 
                    margin-top: 3rem!important; 
                    
                    .nav-right-button{ 
                        /* text-align: left;   */
                        margin-top: 1.3rem;
                        
                    }
    
                }
            }



        }

    }
`;

export default MobileNav;
