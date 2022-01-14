import styled from 'styled-components';
import FundamentalsImg from '../../assets/img/fundamentals.svg';
import ReactSvg from '../../assets/img/react.svg';



function LearnSection({className=""}) {
  return (
      <>
    <DIV id="learn" className="p-5">
    <div class="LearnSection-wrapper container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src={FundamentalsImg} class="img-fluid" alt="" />
        </div>
        <div class="col-md p-5">
          <h2>Learn The Fundamentals</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Similique deleniti possimus magnam corporis ratione facere!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            reiciendis eius autem eveniet mollitia, at asperiores suscipit
            quae similique laboriosam iste minus placeat odit velit quos,
            nulla architecto amet voluptates?
          </p>
          <a href="#" class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i> Read More
          </a>
        </div>
      </div>
    </div>
  </DIV>


    <DIV id="learn" className="p-5 bg-dark text-light">
   
    <div class="LearnSection-wrapper container ">
      <div class="row align-items-center justify-content-between">
    
        <div class="col-md p-5">
          <h2>Learn React</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Similique deleniti possimus magnam corporis ratione facere!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            reiciendis eius autem eveniet mollitia, at asperiores suscipit
            quae similique laboriosam iste minus placeat odit velit quos,
            nulla architecto amet voluptates?
          </p>
          <a href="#" class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i> Read More
          </a>
        </div>

        <div class="col-md">
          <img src={ReactSvg} class="img-fluid" alt="" />
        </div>
      </div>
    </div>



  </DIV>

  </>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LearnSection */
    
    .LearnSection-wrapper{

    }
`;

export default LearnSection;
