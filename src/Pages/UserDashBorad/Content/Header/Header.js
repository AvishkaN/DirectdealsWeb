import styled from 'styled-components';
import NotificationIconCount from './NotificationIconCount';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


import { Avatar } from '@mui/material';

function ConatentHeader({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ConatentHeader-wrapper row">
                {/* <h1>Header</h1> */}

                {/* <div className="content-left col-3">
                    search
                </div> */}

                <div className="content-right  ms-auto col-3 display-flex  align-items-center text-color-primary  ">
                        <NotificationIconCount  className=' cursor-p ms-auto'  svgIcon={<NotificationIcon className="font-2-4 "></NotificationIcon>}  count={2} ></NotificationIconCount>
                        <NotificationIconCount  className=' cursor-p ms-2'  svgIcon={ <ChatIcon className="font-2-4 "></ChatIcon>}  count={2} ></NotificationIconCount>
                        <NotificationIconCount  className=' cursor-p ms-2'  svgIcon={ <SettingsOutlinedIcon className="font-2-4 "></SettingsOutlinedIcon>}  count={2} ></NotificationIconCount>
                      
                     
                        <Avatar  className='ms-4  me-2 mt-2 avatar cursor-p ' src={"https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg"}  >A</Avatar>
                </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ConatentHeader */
    /* background:green;    */
    
    .ConatentHeader-wrapper{
      /* width: var(--ConatentHeader-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .avatar{
            width: 3.5rem;
            height: 3.5rem;
        }

    }
`;

export default ConatentHeader;
