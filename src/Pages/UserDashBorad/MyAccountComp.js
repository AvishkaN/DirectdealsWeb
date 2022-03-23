import styled from 'styled-components';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import Header from './Content/Header/Header';

import MyAccount from './Content/1MyAccount/MyAccount';
import PostAd from './Content/2PostAd/PostAd';
import MyAds from './Content/3MyAds/3MyAds';
import MyMemberShip from './Content/4MyMembership/MyMemberShip';
import PendingAds from './Content/5PendingAds/5PendingAds';
import PublishedAds from './Content/6PublishedAds/PublishedAds';
import LogOut from './Content/7LogOut/LogOut';

import { useDispatch } from 'react-redux';
import { selectClicks, SetShowPostAdFN, SetUserDashBoardSelectedCompFN } from '../../Redux/slices/clickSlice';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useLocation } from "react-router-dom"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';




function MyAccountComp({className=""}) {

    const dispatch=useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const clicks = useSelector(selectClicks);


  



    useEffect(()=>{
        const pathName=location.pathname;
        let comp;
        
        
        if(pathName==="/dashBoard/MyAccount"){
            comp={compName:"My Account",comp:<MyAccount></MyAccount>};
            // dispatch(SetUserDashBoardSelectedCompFN(<MyAccount></MyAccount>));
            
        }
        
        if(pathName==="/dashBoard/PostAd"){
            comp={compName:"Post Ad",comp:<PostAd></PostAd>};
            // comp=<PostAd></PostAd>;
            // dispatch(SetUserDashBoardSelectedCompFN(<PostAd></PostAd>));
            
        }
        if(pathName==="/dashBoard/MyAds"){
            comp={compName:"My Ads",comp:<MyAds></MyAds>};
            // comp=<MyAds></MyAds>;
            // dispatch(SetUserDashBoardSelectedCompFN(<MyAds></MyAds>));
            
        }
        if(pathName==="/dashBoard/MyMembership"){
            comp={compName:"My Membership",comp:<MyMemberShip></MyMemberShip>};
            // comp=<MyMemberShip></MyMemberShip>;
            // dispatch(SetUserDashBoardSelectedCompFN( <MyMemberShip></MyMemberShip>));
            
        }

        if(pathName==="/dashBoard/PendingAds"){
            comp={compName:"Pending Ads",comp:<PendingAds></PendingAds>};
            // comp=<PendingAds></PendingAds>;
            // dispatch(SetUserDashBoardSelectedCompFN(<PendingAds></PendingAds>));
            
        }
        if(pathName==="/dashBoard/PublishedAds"){
            comp={compName:"Pending Ads",comp:<PublishedAds></PublishedAds>};
            // comp=<PendingAds></PendingAds>;
            // dispatch(SetUserDashBoardSelectedCompFN(<PendingAds></PendingAds>));
            
        }
        
        if(pathName==="/dashBoard/LogOut"){
            // comp=<LogOut></LogOut>;
            comp={compName:"Log Out",comp:<LogOut></LogOut>};
                // dispatch(SetUserDashBoardSelectedCompFN(<LogOut></LogOut>));
                
            }

            
        if(comp){  // update state 
            
            dispatch(SetUserDashBoardSelectedCompFN(comp));
        }
        
        


    },[location.pathname]);


    useEffect(()=>{

        if(clicks.UserDashBoardSelectedComp){

            if(document.documentElement.clientWidth<600){
                navigate("/dashboard-mobile");
            }
            
        }


    },[clicks.UserDashBoardSelectedComp]);

  return (
    <DIV className={`${className}`} >
         <div className="MyAccountComp-wrapper w-100 row   ">


                {/* Nav */}
                 <div className="col-3 nv">
                     <div className="my-account-nav  h-100 background-aqu">
                        <MyAccountNav></MyAccountNav>
                     </div>
                 </div>

                {/* My account Content */}
                 <div className="col-9  background-aqu  content">
                     <div className="my-account-content h-100"> 

                                    {/*Conetnt Header  */}
                                    <Header></Header>


                                    <div className="content-bottom">
                                                        {/* MY Account */}
                                                        <Routes>
                                                            <Route path="MyAccount" element={<MyAccount></MyAccount>} />
                                                        </Routes>

                                                        {/* Post  Ad  Form */}
                                                        <Routes>
                                                            <Route path="PostAd" element={<PostAd  id="post-ad" className='h-100 '></PostAd>} />
                                                        </Routes>

                                                        {/* My Ads */}
                                                        <Routes>
                                                            <Route path="MyAds" element={<MyAds></MyAds>} ></Route>
                                                        </Routes>

                                                        {/* MyMemberShip */}
                                                        <Routes>
                                                            <Route path="MyMembership" element={<MyMemberShip></MyMemberShip>} />
                                                        </Routes>

                                                            {/* PendingAds */}
                                                        <Routes>
                                                            <Route path="PendingAds" element={<PendingAds></PendingAds>} />
                                                        </Routes>


                                                        {/* PublishedAds */}
                                                        <Routes>
                                                            <Route path="PublishedAds" element={<PublishedAds></PublishedAds>} />
                                                        </Routes>

                                                            {/* LogOut */}
                                                        <Routes>
                                                            <Route path="LogOut" element={<LogOut></LogOut>} />
                                                        </Routes>
                                    </div>



                     </div>
                 </div>









         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    display: flex;
    height:100%;
    /* flex-direction: column; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAccountComp */
    
    .MyAccountComp-wrapper{
        display: flex;
        height:100%;
        background: #F9FBFC;
        border-radius: 1% 1% 1% 1%;

        @media(max-width:600px){    
                flex-direction: column-reverse;
                justify-content: flex-end
        }

        .nv{

            @media(max-width:795px){     
                flex: 0 0 auto;
                width: 33.33333333%;
            }
            @media(max-width:600px){     
                flex: 0 0 auto;
                    height: 100%; 
                width:100%;
            }
            
            .nav-itesm-row{
                @media(max-width:600px){     
                        /* background: red;  */
                        display:flex; 
                        flex-wrap: wrap;  
                        flex-direction: column;
                        justify-content:space-between;

                        .-nav-item-row{      
                            flex-basis: 33%;
                            
                            @media(max-width:459px){     
                                flex-basis: 44%;   
                            }
                        }
                        }
                
            }
            
        }
        
        .content{
            @media(max-width:795px){       
                            flex: 0 0 auto;
                            width: 66.66666667%;
            }
            @media(max-width:600px){       
                            width: 100%;
                            /* min-height:30vh; */
            }

            
        }
        
        .my-account-nav{  
            border-radius: 2%;
            background: #FFF;
            box-shadow: 0px 8px 3px 3px var(--color-primary);
            /* min-height:70vh;   */

            @media(max-width:600px){      
                border-radius: 1% 1% 1% 1%;
                /* min-height: 48vh; */
            }
            
          
        }

        
    }
    .my-account-content{ 
        /* background-color: red;    */

        .content-bottom{
            @media(max-width:600px){    
                display: none; 
            }
        }

       
    }
`;

export default MyAccountComp;
