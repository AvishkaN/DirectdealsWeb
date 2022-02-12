import styled from 'styled-components';
import ItemOverviewCard from './ItemOverviewCard';

import HistoryIcon from '@mui/icons-material/History';
import SpeedIcon from '@mui/icons-material/Speed';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarsIcon from '@mui/icons-material/Stars';



function ItemOverview({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ItemOverview-wrapper">
            <h2 class="fw-bold font-2-4">Item Overview</h2>

            <div className="item-container mt-5 pb-3">
                <div className="row gy-3"> 

                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  className='item-overview-card' bottomText={"Request"}  text={"HISTORY CHECK"} svgIcon={<HistoryIcon className="font-2-5 mt-1 mb-1"></HistoryIcon>}></ItemOverviewCard>

                    </div>
                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  bottomText={"Denali"}  text={"TRIM"} svgIcon={<StarsIcon className="font-2-5 mt-1 mb-1"></StarsIcon>}></ItemOverviewCard>

                    </div>     
                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  bottomText={"0"}  text={"KILOMETERS"} svgIcon={<SpeedIcon className="font-2-5 mt-1 mb-1"></SpeedIcon>}></ItemOverviewCard>

                    </div>
                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  bottomText={"Grey"}  text={"COLOR"} svgIcon={<InvertColorsIcon className="font-2-5 mt-1 mb-1"></InvertColorsIcon>}></ItemOverviewCard>

                    </div>
                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  bottomText={"Request"}  text={"YEAR"} svgIcon={<CalendarTodayIcon className="font-2-5 mt-1 mb-1"></CalendarTodayIcon>}></ItemOverviewCard>

                    </div>
                    <div className="col-4  col-sm-4 col-lg-2  pb-2 pt-2">
                         <ItemOverviewCard  bottomText={"Request"}  text={"HISTORY CHECK"} svgIcon={<HistoryIcon className="font-2-5 mt-1 mb-1"></HistoryIcon>}></ItemOverviewCard>

                    </div>

                </div>
            </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ItemOverview */
    
    .ItemOverview-wrapper{
      /* width: var(--ItemOverview-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .item-overview-card{
            .bottom-text{
                color:var(--color-primary);
            }
        }

    }
`;

export default ItemOverview;
