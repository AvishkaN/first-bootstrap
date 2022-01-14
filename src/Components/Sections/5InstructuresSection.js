import styled from 'styled-components';



function InstructureSection({className=""}) {
  return (
    <DIV className={`p-5 bg-primary ${className}`}>
         <div className="InstructureSection-wrapper container">
                <h2 className='text-center text-white'>Our Instructors</h2>
                <p className='lead text-center text-white mb-5'>
                      Our instructors all have 5+ years working as a web developer in the industry
                </p>

                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" className='rounded-circle mb-3' />
                                    <h3 className="card-title mb-3">John Doe</h3>
                                    <p className="card-text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam
                                    </p>

                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className='rounded-circle mb-3' />
                                    <h3 className="card-title mb-3">Sara Smith</h3>
                                    <p className="card-text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam
                                    </p>

                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="" className='rounded-circle mb-3' />
                                    <h3 className="card-title mb-3">Steve Smith</h3>
                                    <p className="card-text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam
                                    </p>

                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" className='rounded-circle mb-3' />
                                    <h3 className="card-title mb-3">Jane Doe</h3>
                                    <p className="card-text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam
                                    </p>

                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>

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
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .InstructureSection-wrapper{

    }
`;

export default InstructureSection;
