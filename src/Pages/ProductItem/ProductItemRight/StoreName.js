import styled from 'styled-components';
import Button from './../../../Components/UI/Button/Button';



function StoreName({className="",product}) {
  return (
    <DIV className={`${className}  `}>
         <div className="StoreName-wrapper row justify-content-between">
                {/* Store Name */}
                <div className="col-lg-8  col-10  ">
                      <div className="font-2 fw-bold text-center">
                             {product.storeName}
                      </div>

                      <Button  className="background-primary mt-4 w-90 text-color-white font-1-6">View Store</Button>
                </div>

                {/* Img */}
                <div className="col-lg-4  col-2 display-flex">
                    <img className='w-85 ms-auto' src={product.storeLogoPng} alt="" />
                </div>



         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreName */
    
    .StoreName-wrapper{
      /* width: var(--StoreName-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default StoreName;
