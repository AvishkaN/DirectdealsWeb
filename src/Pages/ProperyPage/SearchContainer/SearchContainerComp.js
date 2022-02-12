import styled from 'styled-components';
import ToggleContainer from './../../../Components/UI/ToggleContaner/ToggleContainer';
import SearchFilter from './SearchFiler/SearchFilter';



function SearchConatinerComp({className=""}) {
  return (
    <DIV className={`${className}   pb-5`}>
         <div className="SearchConatinerComp-wrapper">
                <div className="title text-center text-color-white mt-5">
                     <h2>Buy properties with dubizzle</h2> 
                </div>
                <div className="toggle-container ">
                    <div className="row justify-content-center">
                            <div className="col-3">
                                    <ToggleContainer></ToggleContainer>
                            </div>
                    </div>
                </div>
                <div className="search-filter">.
                        <SearchFilter></SearchFilter>

                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchConatinerComp */
    
    .SearchConatinerComp-wrapper{
      /* width: var(--SearchConatinerComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default SearchConatinerComp;
