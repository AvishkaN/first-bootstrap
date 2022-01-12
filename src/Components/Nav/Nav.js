import styled from 'styled-components';



function Nav({className=""}) {
  return (
    <DIV className={`navbar navbar-expand-sm bg-dark navbar-dark ${className} `}>
         <div className="container Nav-wrapper">
                <a href="#" className='navbar-brand'>Frondend Bootcamp</a>

                <button 
                    className='navbar-toggle'
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >    
                
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <a href="#learn" className="nav-link">What You'll Learn</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#learn" className="nav-link">Questions</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#learn" className="nav-link">Instructors</a>
                            </li>
                    </ul>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.nav`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Nav */
    
    .Nav-wrapper{

    }
`;

export default Nav;
