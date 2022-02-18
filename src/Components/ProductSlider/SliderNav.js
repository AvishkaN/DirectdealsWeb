import styled from 'styled-components';



function Row2({className="",data,activeImg}) {
  return (
    <DIV className={` all-images display-flex justify-content-space-between ${className}`}>
                    {
                                data.map((img,i)=>(
                                    <div className={` w-18 border-radius-5 nav-img ${ (i== activeImg) && 'row-active' }`}>
                                            <img src={img} className='w-100' alt="" />
                                    </div>

                                ))
            }  
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    
    .Row2-wrapper{
      
    }
  

    .nav-img{
      opacity: .5;
      transition: all .2s;  

    }

    .row-active{
          opacity: 1 !important;
                /* border: 3px solid var(--color-primary); */
    }

`;

export default Row2;
