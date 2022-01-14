import styled from 'styled-components';



function Boxes({className=""}) {
  return (
    <DIV className={`p-5 ${className}`}>
         <div className="container Boxes-wrapper">
                <div className="row text-center g-4">

                    <div className="col md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                           <i class="bi bi-laptop"></i>   
                                </div>
                                <h3 className='card-title mb-3'>Virtual</h3>
                                <p className='card-text'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio nam numquam, quo ipsa vitae.
                                </p>  
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col md">
                        <div className="card bg-secondary text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                           <i class="bi bi-laptop"></i>   
                                </div>
                                <h3 className='card-title mb-3'>Hybrid</h3>
                                <p className='card-text'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio nam numquam, quo ipsa vitae.
                                </p>  
                                <a href="#" className='btn btn-primary btn-dark'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                           <i class="bi bi-laptop"></i>   
                                </div>
                                <h3 className='card-title mb-3'>In Person</h3>
                                <p className='card-text'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio nam numquam, quo ipsa vitae.
                                </p>  
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

        



                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.section`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Boxes */
    
    .Boxes-wrapper{

    }
`;

export default Boxes;
