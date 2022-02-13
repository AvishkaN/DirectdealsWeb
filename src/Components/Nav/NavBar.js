import styled from 'styled-components';
import NavLeft from './NavLeft';
import NavRight from './NavRight';


function NavBar({className=""}) {

  return (
    <NAV className={`${className} background-primary`}>
        <div className="Nav-wrapper">
            <div className="row p-4 align-items-center">
                    <NavLeft className=' col-6  '></NavLeft>

                    <NavRight className='   col-6 '></NavRight>
           
            </div>



                {/* <div className="col-2">
                    <div className="col-2-links">
                    <ul>
                        <li><a href><i className="fas fa-comments" /><span className="Mobile">Chat</span></a></li>
                        <li><a href><i className="fas fa-user" /><span className="Mobile">Login</span></a></li>
                        <li className="Mobile"><a href>Post Your Add</a></li>
                    </ul>
                    </div>
                </div> */}
        </div>
    </NAV>
  );
}


const NAV=styled.nav`

.Nav-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 


        .width-800-display-none{
              @media(max-width:800px){     
                          display: none !important;
            }

        }

    }


`;

export default NavBar;
