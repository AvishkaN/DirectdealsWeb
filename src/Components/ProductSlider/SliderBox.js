import styled from 'styled-components';
import ArowLeft from '../UI/Arrow/ArowLeft';
import ArrowRight from '../UI/Arrow/ArrowrRight';



function ShowBox({className="",data,activeImg}) {


  return (
    <DIV className={`${className}`}>
                    <div className="showBox ">

                        
                            <div className=" img-container cursor-p  display-flex ">
                                    {
                                    data.map((img,i)=>(
                                        
                                        <div className={`w-100 ${(i==activeImg) && 'display-flex'} ps-4 pe-4 `}>
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

        .showBox{ 
          
          height: 65vh;
          /* background: black;   */
          position: relative;
          /* overflow-y: hidden; */
          
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

          &:hover .arrow-icon-left{
            left: 3%;
          }
          &:hover .arrow-icon-right{
            right: 3%;
          }

          .arrow-icon-left{
              position: absolute;
              left: 1%;
              top: 50%;      
              width: 40px;   
              height: 40px;    
              transition: left .2s;
              
              
            }
            
            .arrow-icon-right{
              position: absolute;  
              right: 1%;
              top: 50%;       
              width: 40px;   
              height: 40px;    
              transition: all .2s;
              
          }


          
            

    }
`;

export default ShowBox;
