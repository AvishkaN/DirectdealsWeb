import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{  
        showOverlay:false, 
        showMobileNav:false, 

        showLocationPopUp:false, 
        showCategoryPopUp:false, 

        showPostAd:false, 

        classifiedPageSelectedLocation:"Location",
        classifiedPageSelectedCategory:"Category",

    },
    reducers:{
        ShowMobileNavFN:(state)=>{     

            state.showOverlay=true;   
            state.showMobileNav=true;   
        },
        HideMobileNavFN:(state)=>{     

            state.showOverlay=false;    
            state.showMobileNav=false;   
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
    
            state.showLocationPopUp=false; 
            state.showCategoryPopUp=false; 

            state.showPostAd=false; 

        },



     

    }
});



export const {
                            ShowMobileNavFN,
                            HideMobileNavFN,

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

