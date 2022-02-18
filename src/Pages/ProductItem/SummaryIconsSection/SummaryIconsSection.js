import styled from 'styled-components';
import SummaryIcon from './SummaryIcon';

import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import CarGear from '@mui/icons-material/DisplaySettingsOutlined';
import GasStationIcon from '@mui/icons-material/LocalGasStationOutlined';
import MeterIcon from '@mui/icons-material/SpeedOutlined';



function SummaryIconSection({className="",product}) {
  return (
    <DIV className={`${className} `}>
         <div className="SummaryIconSection-wrapper row  gy-5 background-aqu display-flex">


                    {
                        product.summery.map((summeryItem)=>(
                          <div className="col-sm-3 col-6">

                            <SummaryIcon key={Math.random()}   svgIcon={summeryItem.svgIcon} label={summeryItem.label}  txt={summeryItem.txt} ></SummaryIcon>
                          </div>

                        ))
                    }

       
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SummaryIconSection */
    
    .SummaryIconSection-wrapper{
      /* width: var( --this-page-size); */
        /* margin-left: auto; */
        /* margin-right: auto;  */

    }
`;

export default SummaryIconSection;
