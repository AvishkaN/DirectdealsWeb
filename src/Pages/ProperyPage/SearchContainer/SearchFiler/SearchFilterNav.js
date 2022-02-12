import styled from 'styled-components';



function SearchFilterNav({className="",selectedNav,SetSelectedNav}) {

    const handleClick=(e)=>{
    
        const selectFilterNav=e.target.closest('.filter-nav').classList[1];
        if(selectFilterNav){
            SetSelectedNav(selectFilterNav);
        }


    };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="SearchFilterNav-wrapper">
                <div className="row justify-content-center">      
                    <div className="col-8 display-flex  nav-container font-1">
                        <div className={`filter-nav  filter-nav-1 background-white pt-3 pb-3 pe-2 ps-2 cursor-p   ${selectedNav==='filter-nav-1' && 'filter-nav-active '}`}>Residential for Sale</div>
                        <div className={`filter-nav  filter-nav-2 background-white pt-3 pb-3 pe-2 ps-2 cursor-p  ms-2 ${selectedNav==='filter-nav-2' && 'filter-nav-active '}`}>Commercial for Sale</div>
                        <div className={`filter-nav  filter-nav-3 background-white pt-3 pb-3 pe-2 ps-2 cursor-p  ms-2 ${selectedNav==='filter-nav-3' && 'filter-nav-active '}`}>Land for Sale</div>
                        <div className={`filter-nav  filter-nav-4 background-white pt-3 pb-3 pe-2 ps-2 cursor-p  ms-2 ${selectedNav==='filter-nav-4' && 'filter-nav-active '}`}>Multiple Units for Sale</div>
                       
                       
                       
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchFilterNav */
    
    .SearchFilterNav-wrapper{
      /* width: var(--SearchFilterNav-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .row{
            .nav-container{
                /* background: yellow;   */

                .filter-nav{
                    border-radius: 5px; 

                }

                .filter-nav-active{
                    background: var(--color-black);
                    background: #000000a6;            
                    color: var(--color-white);
                }
            }
        }

    }
`;

export default SearchFilterNav;
