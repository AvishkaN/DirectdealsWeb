import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LinkComp from '../../../Components/UI/Link/Link';
import Car from '@mui/icons-material/DirectionsCarFilledOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function Li({className="",title,number,SvgIcon}) {
  return (
    <DIV className={`${className}`}>
         <div className="Li-wrapper">
                <h4 className="list-title display-flex align-item-center fw-bold"> 
                      <span> {SvgIcon}  </span>     
                       <span className='font-size-inherit ms-1'>{title}</span>  
                      <span className='ms-3 overfloy-y-hidden text-color-grey'>({number})</span>
                 </h4>

                 <div className="link-list mt-3">

                      <LinkComp to="/" text="Used Cars for Sale"></LinkComp>
                      <LinkComp to="/" text="Motorcycles"></LinkComp>
                      <LinkComp to="/" text="Auto Accessories & Parts"></LinkComp>
                      <LinkComp to="/" text="Heavy Vehicles"></LinkComp>

                 </div>



                <div className="arrow-row display-flex align-items-center text-color-primary cursor-p mt-1">
                        All in Motors  <ArrowForwardIcon className='ms-2 arrow-icon'></ArrowForwardIcon>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Li */
    
    .Li-wrapper{
      /* width: var(--Li-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .arrow-row{

          .arrow-icon{
            transition: all .2s;
          }

          &:hover .arrow-icon{
            margin-left: 1rem!important; 
          }
        }

    }
`;

export default Li;
