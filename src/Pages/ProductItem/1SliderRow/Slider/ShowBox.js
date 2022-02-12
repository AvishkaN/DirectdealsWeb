import styled from 'styled-components';
import ArowLeft from '../../../../Components/UI/Arrow/ArowLeft';
import ArrowRight from '../../../../Components/UI/Arrow/ArrowrRight';



function ShowBox({className="",data,activeImg}) {


  return (
    <DIV className={`${className}`}>
                    <div className="showBox ">


                    <div className=" img-container  display-flex">
                            {
                            data.map((img,i)=>(
                                
                                <div className={`w-100 ${(i==activeImg) && 'display-flex'} ps-5 pe-5 `}>
                                        <img src={img} className={`w-100`}  alt="" />
                                </div>

                            ))
                        }  
                    </div>


                    <ArowLeft className='showbox-arrow arrow-icon-left  cursor-p '></ArowLeft>
                    <ArrowRight className='showbox-arrow arrow-icon-right  cursor-p '></ArrowRight>

                    </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ShowBox */
    
      /* width: var(--ShowBox-content-width);
        margin-left: auto;
        margin-right: auto;  */
        .showBox{ 
           height: 65vh;
           /* background: black;   */
           position: relative;
           overflow-y: hidden;
           /* overflow-y: hidden;    */
           
           @media(max-width:700px){
              height: 42vh;

            }

            .img-container{
                overflow: auto;
                flex-wrap: nowrap;    
                overflow-y: hidden; 
                background: var(--color-black);
                height: 100%;

                div{   
                    display: none;

                    img{   
                        transition: all .3s;  
                    }
                }
            }

            .arrow-icon-left{
                position: absolute;
                left: 0;
                top: 52%;     
                width: 40px;   
                height: 40px;    
              }
              
              .arrow-icon-right{
              position: absolute;  
              right: 0;
              top: 52%;       
              width: 40px;   
              height: 40px;    

            }
            

    }
`;

export default ShowBox;
