import styled from 'styled-components';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import PostAd from './Content/PostAd/PostAd';
import Header from './Content/Header/Header';

import { useDispatch } from 'react-redux';
import { SetShowPostAdFN } from '../../Redux/slices/clickSlice';
import { Route, Routes } from 'react-router-dom';

import { useLocation } from "react-router-dom"




function MyAccountComp({className=""}) {

    const dispatch=useDispatch();
    const location = useLocation();


    const handleClick=(e)=>{
        // console.log(e.target.closest('#post-ad-ad'));
        // console.log(e.target.closest('#1'));
        // console.log(e.target.closest('.1'));
        console.log(e.target);
        console.log(location.pathname);


        // console.log(e.target.closest('.1'));

        const PostAdButton=e.target.closest('#post-ad-ad');

        if(PostAdButton){

            dispatch(SetShowPostAdFN());

        }
    }

  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="MyAccountComp-wrapper w-100   ">

             <div className="row w-100">

                {/* Nav */}
                 <div className="col-3 nv">
                     <div className="my-account-nav  h-100 background-aqu">
                        <MyAccountNav></MyAccountNav>
                     </div>
                 </div>

                {/* My account Content */}
                 <div className="col-9  background-aqu  content">
                     <div className="my-account-content h-100"> 
                                <div className=" h-100 ">

                                    {/*Conetnt Header  */}
                                    <Header></Header>


                                    {/* Post  Ad  Form */}
                                    <Routes>
                                        <Route path="MyAccount" element={<h1  className='h-100 '>Header</h1>} />
                                    </Routes>

                                    <Routes>
                                        <Route path="PostAd" element={<PostAd  id="post-ad" className='h-100 '></PostAd>} />
                                    </Routes>


                                    <Routes>
                                        <Route path="MyAds" element={<h1   className='h-100 '>MyAds</h1>} />
                                    </Routes>

                                    <Routes>
                                        <Route path="MyMembership" element={<h1   className='h-100 '>membership</h1>} />
                                    </Routes>

                                    <Routes>
                                        <Route path="PendingAds" element={<h1  className='h-100 '>Pending Ads</h1>} />
                                    </Routes>

                                    <Routes>
                                        <Route path="PublishedAds" element={<h1  className='h-100 '>PublishedAds</h1>} />
                                    </Routes>

                                    <Routes>
                                        <Route path="LogOut" element={<h1  className='h-100 '>LogOut</h1>} />
                                    </Routes>


                                </div> 
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
      /* width: var(--MyAccountComp-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* min-height: 72vh; */
        background: #F9FBFC;
        border-radius: 1% 1% 1% 1%;

        .nv{

            @media(max-width:795px){     
                flex: 0 0 auto;
                width: 33.33333333%;
            }
            @media(max-width:600px){     
                flex: 0 0 auto;
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
            box-shadow: 0px 8px 3px 3px rgba(0 ,0 ,0,0.12);
            /* min-height:70vh;   */

            @media(max-width:600px){      
                border-radius: 1% 1% 1% 1%;
                /* min-height: 48vh; */
            }
            
          
        }

        .my-account-content{
        }

    }
`;

export default MyAccountComp;
