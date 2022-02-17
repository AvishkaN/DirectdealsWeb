import styled from 'styled-components';



function BottomMobile({className=""}) {
  return (
    <DIV className={`${className}`}>


        {/* <div className="content">
          <ul>
                    <li className="active"><a href="#"><i className="fas fa-home" /></a></li>
                    <li><a href="#"><i className="fas fa-search" /></a></li>
                    <li className="Round-fixed-li"><a href="#"><span><i className="fas fa-plus" /></span></a></li>
                    <li><a href="#"><i className="fas fa-comments" /></a></li>
                    <li><a href="#"><i className="fas fa-user" /></a></li>
          </ul>
        </div> */}

            <div class="container">
                  <div class="show-up">this needs to show up ALL 300 pixels high of it</div>
            </div>
             
    </DIV>
  );
}


const DIV=styled.div`


.container {
  /* position: fixed;
  top: 30px;
  left: 50px; */
  height: 30px;
  width: 300px;
  background: blue;
}
.outer {
  overflow: hidden;
}
.inner {
  position: absolute;
}
.show-up {
  width: 100px;
  height: 300px;
  background: green;
  position: relative;
  margin-left: 20px;
}


    /* width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;


    height: 50px;
    z-index: 9;
    background-color: #f5f5f5;
    box-shadow: 0px -9px 14px 1px rgba(0,0,0,0.08);
    -webkit-box-shadow: 0px -9px 14px 1px rgba(0,0,0,0.08);
    -moz-box-shadow: 0px -9px 14px 1px rgba(0,0,0,0.08);
    width: 100%;



 .content{
    width: 90%;
    margin: auto;
    height: 100%;
}

 .content ul{
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

 .content ul li a{
    color: brown;
}

 .content ul li a i{
    font-size: 19px;
}


 .content ul li.active a{
    color: blue;
    transition: all 258ms linear;
}


 .content ul .Round-fixed-li{
    background-color: orange;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
}

 .content ul .Round-fixed-li a i{
    background-color: orange;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
}

 */

`;

export default BottomMobile;
