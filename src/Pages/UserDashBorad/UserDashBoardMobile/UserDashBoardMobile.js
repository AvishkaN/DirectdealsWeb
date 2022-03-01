import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectClicks } from '../../../Redux/slices/clickSlice';
import UndoPage from './../../../Components/UI/UndoPage/UndoPage';



function UserdashBoardMobile({className=""}) {

    const clicks=useSelector(selectClicks);
    const navigate = useNavigate();


    useEffect(()=>{

        if(!clicks.UserDashBoardSelectedComp){
    
            navigate("/dashBoard");
            
        }


    },[clicks.UserDashBoardSelectedComp]);

  return (
    <DIV className={`${className} `}>
        {console.log(clicks.UserDashBoardSelectedComp?.comp)}
         <div className="UserdashBoardMobile-wrapper  ">
             <UndoPage title={clicks?.UserDashBoardSelectedComp?.compName}  >

                    {clicks.UserDashBoardSelectedComp?.comp}

             </UndoPage>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: 8rem;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only UserdashBoardMobile */
    
    .UserdashBoardMobile-wrapper{
      /* width: var(--UserdashBoardMobile-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default UserdashBoardMobile;
