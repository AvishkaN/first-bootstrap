import styled from 'styled-components';
import Showcase from '../../assets/img/showcase.svg';



function Header({className=""}) {
  return (
    <DIV className={`${className} bg-dark text-light p-5 text-center text-sm-start py-3`}>
         <div className="container Header-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="">

                            <h1>Become a <span className='text-warning'>Web Developer</span> </h1>
                            <p className='lead my-4'>
                                We focus on teaching our students the fundamentals of the latest and greatest technologies to prepare them for their first dev role
                            </p>
                            <button className='btn btn-primary btn-lg'>Start The Enrollment</button>
                    </div>
                    <img src={Showcase} alt="" className='img-fluid w-50 d-none d-sm-block' />
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.section`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Header */
    
    .Header-wrapper{

    }
`;

export default Header;
