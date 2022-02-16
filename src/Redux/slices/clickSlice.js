import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{   
        showOverlay:false, 
        showMobileNav:false, 


        storeMobileNav:null, 

        showLocationPopUp:false, 
        showCategoryPopUp:false, 


    },
    reducers:{
        ShowMobileNavFN:(state)=>{     

            state.showOverlay=true;   
            state.showMobileNav=true;   
        },

        setStoreMobileNav:(state,action)=>{     

            state.showOverlay=true;   
            state.storeMobileNav=action.payload;   

        },


        ShowLocationPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showLocationPopUp=true;    
        },
        ShowCategoryPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showCategoryPopUp=true;    
        },





        SetClassifedLocationFN:(state,action)=>{     

            state.classifiedPageSelectedLocation=action.payload;    
        },

        SetShowPostAdFN:(state,action)=>{     

            state.showPostAd=true;    
            state.showOverlay=true;    
        },



        SetClassifedCategoryFN:(state,action)=>{     

            state.classifiedPageSelectedCategory=action.payload;    
        },

        
        ShowHideAllFN:(state)=>{     

            state.showOverlay=false;  
            state.showMobileNav=false; 

            state.storeMobileNav=null; 
    
            state.showLocationPopUp=false; 
            state.showCategoryPopUp=false; 

            state.showPostAd=false; 

        },



     

    }
});



export const {
                            ShowMobileNavFN,
                            HideMobileNavFN,

                            setStoreMobileNav,

                            SetClassifedLocationFN,
                            SetClassifedCategoryFN,

                            ShowCategoryPopupFN,
                            ShowLocationPopupFN,

                            SetShowPostAdFN,


                            ShowHideAllFN,


                                                                        } =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

