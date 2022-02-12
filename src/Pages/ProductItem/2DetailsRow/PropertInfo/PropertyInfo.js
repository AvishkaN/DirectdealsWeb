import styled from 'styled-components';
import PropertItem from './PropertItem';


import ShowerIcon from '@mui/icons-material/Shower';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function PropertyInfo({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PropertyInfo-wrapper">
         <h2 class="fw-bold font-2-4">Property Info</h2>


                <div className="list border-radius-5 p-4 mt-5">
                        <PropertItem   className='mt-3'  iconText={"Room For Rent"}  text={'Villa'} svgIcon={<ShowerIcon className="font-3 pb-2 "></ShowerIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                        <PropertItem   className='mt-3'  iconText={"Room For Rent"}  text={'Villa'} svgIcon={<ShowerIcon className="font-3 pb-2 "></ShowerIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                        <PropertItem   className='mt-3'  iconText={"Room For Rent"}  text={'Villa'} svgIcon={<AccessTimeIcon className="font-3 pb-2 "></AccessTimeIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                        <PropertItem   className='mt-3'  iconText={"Room For Rent"}  text={'Villa'} svgIcon={<ShowerIcon className="font-3 pb-2 "></ShowerIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                        <PropertItem   className='mt-3'  iconText={"Room For Rent"}  text={'Villa'} svgIcon={<ShowerIcon className="font-3 pb-2 "></ShowerIcon>}></PropertItem>
                        <PropertItem   className='mt-3' iconText={"Room Type"}  text={'Private Room'} svgIcon={<MeetingRoomIcon className="font-3 pb-2 "></MeetingRoomIcon>}></PropertItem>
                </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PropertyInfo */
    
    .PropertyInfo-wrapper{
      /* width: var(--PropertyInfo-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .list{  
            border: 1px solid rgb(238, 240, 241);
        }

    }
`;

export default PropertyInfo;
