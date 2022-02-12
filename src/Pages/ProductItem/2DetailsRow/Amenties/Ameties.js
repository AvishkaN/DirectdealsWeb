import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';



function Amenties({className="",list=[]}) {
  return (
    <DIV className={`${className} `}>

    <h2 class="fw-bold font-2-4">Amenities</h2>



        <div className="row gy-2 mt-2">
            {
                list.map(li=>(
                    <div className="display-flex align-item-center  col-6">
                        <CheckIcon></CheckIcon>
                        <div className="">{li}</div>
                    </div>
                ))
            }

        </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Amenties */
    

`;

export default Amenties;
