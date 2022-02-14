import styled from 'styled-components';



function StoreFooter({className="",store}) {
  return (
    <DIV className={`${className}`}>
         <div className="StoreFooter-wrapper">
               <div className="row">
                   {/* Details */}
                   <div className="col-6">
                    
                   </div>

                   {/*Map  */}
                   <div className="col-6">
                            
                   </div>


               </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: #252122;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreFooter */
    
    .StoreFooter-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 


    }
`;

export default StoreFooter;
