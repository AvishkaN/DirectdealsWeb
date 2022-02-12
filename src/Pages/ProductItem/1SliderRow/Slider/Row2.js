import styled from 'styled-components';



function Row2({className="",data,activeImg}) {
  return (
    <DIV className={` all-images display-flex justify-content-space-between ${className}`}>
                    {
                                data.map((img,i)=>(
                                    <div className={` w-20 border-radius-5  ${ (i== activeImg) && 'row-active' }`}>
                                            <img src={img} className='w-100' alt="" />
                                    </div>

                                ))
            }  
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Row2 */

    .row-active{
        border: 2px solid var(--color-primary);
    }
    
    .Row2-wrapper{
      /* width: var(--Row2-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }

    img{
        transition: all .3s;  
    }
`;

export default Row2;
