import styled from 'styled-components';
import Nav from './../../Components/Nav/Nav';
import Header from './../../Components/Header/Header';
import NewsLetter from './../../Components/Sections/1NewsLetter';
import Boxes from './../../Components/Sections/2Boxes';
import LearnSection from './../../Components/Sections/3LearnSection';
import QandASection from './../../Components/Sections/4QandASection';
import InstructuresSection from './../../Components/Sections/5InstructuresSection';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Page-wrapper">
           <Nav></Nav>
           <Header></Header>
           <NewsLetter></NewsLetter>
           <Boxes></Boxes>
           <LearnSection></LearnSection>
           <QandASection></QandASection>
           <InstructuresSection></InstructuresSection>
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
