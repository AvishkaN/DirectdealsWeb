import { CarRepairTwoTone } from '@mui/icons-material';
import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
import Card from './Card';



function RentPopularSection({className="",title,data}) {
  return (
    <DIV className={`${className}`}>
         <div className="RentPopularSection-wrapper">
         <div className="popularCategoriesRentTitle font-2-5">{title}</div>
         <div className="row products-card-items-row grid justify-content-space-between mt-4">

             {
                 data.map(carditem=>(
                    <div className='col-lg-2    col-sm-4 cursor-p card-item'>
                      <Link to={`/product-item/:${Math.random()*10000}`}>
                             <Card key={Math.random()*10000}  {...carditem}></Card>
                      </Link>
                    </div>
                 ))
             }

            {/* <div className='col-lg-2    col-sm-6 cursor-p card-item'>
                    <Card key={Math.random}  nameTag={`carditem.nameTag`} list={['5 Beds','5 Baths00000']}  imgSrc={`carditem.imgSrc`}  nameOrYear={"Al jimi"}></Card>
            </div> */}



         </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RentPopularSection */
    
    .RentPopularSection-wrapper{
      /* width: var(--RentPopularSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .card-item{
          @media(max-width:600px){ 
              width: 40%;      
          }
          @media(max-width:360px){ 
              width: 45%;       
          }

        }

        .col-md-2{
            @media(min-width:768px){ 
                width: 19.5% !important;    
            }
          }

          
          
          .products-card-items-row{
                @media(max-width:600px){    
                    overflow: auto;
                    flex-wrap:nowrap;    
              }

              &::-webkit-scrollbar {  // hide scrollbar
                  width: 0 !important 
              } 
              }

    }
`;

export default RentPopularSection;
