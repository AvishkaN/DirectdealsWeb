import styled from 'styled-components';

const store={
    storeName:"Isuru Auto Land",
};



function StoreComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="StoreComp-wrapper">

                <div className="store-name">
                        {store.storeName}
                </div>
                

                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreComp */
    
    .StoreComp-wrapper{
      /* width: var(--StoreComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default StoreComp;
