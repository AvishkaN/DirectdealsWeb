import styled from 'styled-components';
import Input from '../UI/Input/Input';
import SearchIcon from '@mui/icons-material/SearchOutlined';



function Search({className="",searchFiledClassName,SearchIconClassName,SearchText="Search"}) {
  return (
    <DIV className={`${className}  background-aqua `}>

      
        <div className="wrapper">

                <div className="display-flex search-input-field">
                    <input type="text"  placeholder={SearchText}/>

                </div>

                <div className="suggestionList background-yellow ">
                <li>Home</li>
                <li>Card</li>
                <li>Wear</li>
                <li>Cart</li>
                </div>
        </div>



    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .wrapper{
    width: 100%;
    position: relative;
}

        .search-input-field{
            
          
        }

        .suggestionList{

            position: absolute;
            border-bottom: none;
            border-top: none;
            z-index: 99;
            top: 100%;
            left: 0;
            right: 0;
            background:red;


        }


  
`;

export default Search;


