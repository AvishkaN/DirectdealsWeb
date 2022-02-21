import styled from 'styled-components';

import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';



function NotifiactionIcon({className="",svgIcon,count=""}) {
  return (
    <DIV className={`${className}   `}>

        {svgIcon}
        {/* <NotificationIcon></NotificationIcon> */}
        {/* <div className="notification-circle background-red  display-flex align-items-center text-color-white justify-content-center border-radius-circle">
            
            {count}
            </div> */}

    </DIV>
  );
}


const DIV=styled.div`
        /* width: 100%; */


    /* position:relative; */


    .notification-circle{
        
        /* position: absolute;
        top: 0;
        right:0; */
    }


`;

export default NotifiactionIcon;
