import styled from 'styled-components';
import Input from '../../../Components/UI/Input/Input';



function SearchBar({className=""}) {
  return (
    <DIV className={`${className}`}>
          <div className="search-div mt-3   display-flex align-item-center  background-white  border-radius-25  ms-auto me-auto p-1 ">
                  <Input type="text"  className="background-transparent ps-4 font-1-6" placeholder="What are you Looking For ?" />
                  <i className="fas fa-search background-secondary p-4 border-radius-circle" />
            </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .search-div{
          width: 65%;
          
          @media(max-width:521px){     
            width: 99%;
        }

      }
    

`;

export default SearchBar;
