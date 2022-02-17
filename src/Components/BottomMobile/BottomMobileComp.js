import styled from 'styled-components';



function BottomMobileComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="BottomMobileComp-wrapper display-flex  justify-content-between align-item-center   pb-1 pt-1 ">
                    <i className="fas fa-home  font-2" aria-hidden="true" />
                    <i className="fas fa-search  font-2" aria-hidden="true" />

                     <div className="plus-button-background   ">
                            <i className="fas fa-plus  font-2 plus-button" aria-hidden="true" />
                    </div>   

                    <i className="fas fa-comments  font-2" aria-hidden="true" />
                    <i className="fas fa-user  font-2" aria-hidden="true" />
         </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* height:24px; */

    /* margin-top: var(--margin-top-fix-nav);  */  /*only BottomMobileComp */
    
    .BottomMobileComp-wrapper{
      /* width: var(--BottomMobileComp-content-width);
        margin-left: auto;
        margin-right: auto;  */    



        .plus-button-background{
                 background-color: #ffc800;
                width: 4.7rem;
                height: 4.7rem;  
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                /* margin-bottom: 16px; */

            .plus-button{
                background-color: #673500;
                width: 2.5rem;
                height: 2.5rem; 
                border-radius: 50%;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                
    
            }
        }




    }

`;

export default BottomMobileComp;
