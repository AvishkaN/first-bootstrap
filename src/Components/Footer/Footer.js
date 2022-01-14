import styled from 'styled-components';



function Footer({className=""}) { 
  return (
    <DIV className={`${className} bg-dark text-white text-center p-1`}>
         <div className="container Footer-wrapper">
                <p className='lead'>Copyright &copy; {`${new Date().getFullYear()}`} Frontend Bootcamp</p>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Footer-wrapper{

    }
`;

export default Footer;
