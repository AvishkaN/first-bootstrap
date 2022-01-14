import styled from 'styled-components';



function NewsLetter({className=""}) {
  return (
    <DIV className={`bg-primary text-light p-5   ${className}`}>
         <div className="container  NewsLetter-wrapper">
                <div className="d-md-flex justify-content-between">
                    <h3 className='mb-3 mb-md-0'>Sign Up For Our Newsletter</h3>
                
                
                <div className="input-group news-input">
                    <input type="text"  className='form-control' placeholder="Enter Email"/>
                    <button className='btn btn-dark btn-lg' type='button'>Button</button>
                </div>
                
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.section`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NewsLetter */
    
    .NewsLetter-wrapper{

        .news-input{
            background-color: red; 

            @media(min-width:768px){  
                width: 50%;  
            }
        }
    }
`;

export default NewsLetter;
