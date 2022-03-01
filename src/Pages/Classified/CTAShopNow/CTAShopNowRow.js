import styled from 'styled-components';
import LorrySvgPng from '../../../assets/img/LorrySvg.png';
// import CartIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CartIcon from '@mui/icons-material/LocalGroceryStore';


function ShopNowRow({className=""}) {
  return (
    <DIV className={`${className}   display-flex align-items-center   `}>

      <div className="border-grey display-flex w-100  ps-4 pe-3  cursor-p ">

              <div className=" display-flex align-items-center  ">
                  <img src={LorrySvgPng} alt="" />
                  <div className="font-2 fw-bold text-color-primary  ms-2  font-family-cursive">Buy Now</div>
              </div>

              <CartIcon  className='font-2-5  ms-auto text-color-primary '></CartIcon>
      </div>




    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    img{
      width: 28px;

    }

 
`;

export default ShopNowRow;
