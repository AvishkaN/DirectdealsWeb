import styled from 'styled-components';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// import Hotel from './../../../assets/svg/hotel.svg';



function PopUpShowList({className="",selectedItemIdex,CategoryList,secondList=['Maharagama','Piliyandala','Dehiwala','Kottawa',"Ampara",]}) {
  return (
    <DIV className={`${className}`}>
         <div className="category-section mt-4">
                      <div className="row">
                            <div className="col-12 ">

                                 { 
                                 
                                 CategoryList.map((categorieItem,i)=>(
                                   <React.Fragment key={Math.random()}  >
                                        <div className='categorie-item  background-hover display-flex border-b align-item-center first-list-item'>
                                                {categorieItem.categoryIconSvg}
                                            <div className='  font-1-4  pb-3 pt-3 first-list-item-text ms-3 '>{categorieItem.listTxt}</div>
                                            <div className="arrow-icon  ms-auto me-3  ">

                                                  <ArrowForwardIosIcon  className={`font-2 text-color-grey  ${secondList.itemIndex == i ?'rotate90' :'rotate0'}`} ></ArrowForwardIosIcon>
                                            </div>

                                        </div>


                                    {/*  */}


                                    <div className="col-12 ps-3  ">
                                    { 
                                    secondList.itemIndex == i &&
                                        secondList.FilteredObj?.subCategories.map(categorieItem=>(
                                            <div className='categorie-item  background-hover display-flex border-b '>
                                                <div className=' w-95 font-1-3  pb-2 pt-3 second-list-item'>{categorieItem}</div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                   </React.Fragment>


                                 ))
                                 }

                            </div>

                      </div>
                    </div>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .categorie-item{

    }
 

      .arrow-icon{   

        @media(max-width:1108px){     
          /* width: 16% !important; */
        }

        }


      .first-list-item-text{
        @media(max-width:454px){        
              font-size: 1.4rem;
        }

      }  

      .border-b{
        border-bottom: 1px solid #e7edee;
      }

      .second-list-item{
        color: #5f5fb8;
        font-weight: bold;
      }

`;

export default PopUpShowList;
