import styled from 'styled-components';
import {useState} from 'react';
import SliderCard from './SliderCard';


import ArrowLeft from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowRight from '@mui/icons-material/ArrowForwardIosOutlined';


const data=[
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/apartment.jpg",
        text:"Apartment for Sale"
    },
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/multiple-units.jpg",
        text:"Villa for Sale"
    },
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/multiple-units.jpg",
        text:"Commercial for Sale"
    },
    
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/apartment.jpg",
        text:"Apartment for sale"
    },
    
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/multiple-units.jpg",
        text:"Commercial for Sale"
    },
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/multiple-units.jpg",
        text:"Commercial for Sale"
    },
    
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/apartment.jpg",
        text:"Apartment for sale"
    },
    
    {
        backgrounImg:"https://dbzproperty-a.akamaihd.net/property/desktop/latest/images/home/categories/multiple-units.jpg",
        text:"Commercial for Sale"
    },
];

const changeTransform=(sliderCardWrapper)=>{
    const transformedValue=sliderCardWrapper.style?.transform?.match(/(\d+)/)[0];
                
    sliderCardWrapper.style.transform = ` translateX(${10+Number(transformedValue)+'%'})  `;

};



function Slider({className=""}) {

    const [dataArr, setDataArr] = useState(data);


    const handleClick=(e)=>{    

            const leftArrow=e.target.closest('.arrow-left');
            const rightArrow=e.target.closest('.arrow-right');


            const sliderCardWrapper=e.target.closest('div').querySelector(".slider-card-container");
           
            if(leftArrow){   
                sliderCardWrapper.style.transform = "translateX(-10%)";

                
                const dataArrCopy=[...dataArr];


                const removeEl=dataArrCopy.splice(-2);

                const newArr=[...removeEl,...dataArrCopy];

                setDataArr(newArr);

            }
            if(rightArrow){   


                const transformedValue=sliderCardWrapper.style?.transform?.match(/(\d+)/)[0];
                
                sliderCardWrapper.style.transform = ` translateX(${(10-Number(transformedValue))+'%'})  `;


                // changeTransform(sliderCardWrapper);

                const dataArrCopy=[...dataArr];

                const removeEl=dataArrCopy.splice(2);

                const newArr=[...removeEl,...dataArrCopy];

                setDataArr(newArr);

            }
    };

  return (
    <DIV className={`${className} mt-5`} onClick={handleClick}>
         <div className="Slider-wrapper">
                <h2 className="title font-2-5 " >
                        Popular Categories
                </h2>

             <div className=" row mt-5 slider-card-container">

              { dataArr.map(dataItem=>(
                    <div className="col-2">
                                    <SliderCard backgroundImg={dataItem.backgrounImg}   text={dataItem.text} className='cursor-p border-radius-5'></SliderCard>

                        </div>)
                ) 
                 }



             </div> 

             <ArrowLeft className='arrow  background-white cursor-p text-black font-3 border-radius-circle   p-2 arrow-left'></ArrowLeft>
             <ArrowRight className='arrow  background-white cursor-p text-black  font-3 border-radius-circle p-2  arrow-right'></ArrowRight>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Slider */
          
    @media(max-width:1000px){     
                      display: none;
        }

    
    .Slider-wrapper{
      /* width: var(--Slider-content-width);
        margin-left: auto;
        margin-right: auto;  */
        position: relative;

        .slider-card-container{   
            flex-wrap: nowrap;  
            transform: translateX(-10%);   
            transition: transform .3s;   
            
        }

        .arrow{
            width: 42px;   
            height: auto;
        }


        .arrow-left{
            position: absolute;
            top: 55%;      
            left: 0;   
        }
        .arrow-right{
            position: absolute;
            top: 55%;       
            right: 0;     

        }
        

    }
`;

export default Slider;
