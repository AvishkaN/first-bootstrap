import styled from 'styled-components';
import Nav from './../../Components/Nav/Nav';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Page-wrapper">
           <Nav></Nav>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Page-wrapper{

    }
`;

export default Page;
