import Offer from "./Offer2.css";
import project01 from "../Component/assets/project-01.png";
import project02 from "../Component/assets/project-02.png";
import project03 from "../Component/assets/project-03.png";
import project04 from "../Component/assets/project-04.png";

function Offer2() {
  return (
    <section className="container">
      <div className="text-center offer2 m-auto pt-5 m-5">
        <h1 className="pt-5 pb-3 fw-bold"> 
          We Offer Great Affordable Premium Prices.{" "}
        </h1>
        <p className="lead">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.The point of
          using.
        </p>
      </div>

      <div className=" d-flex flex-wrap mt-5 p-3 gap-3 justify-content-center All-btn m-auto shadow ">
        <a className="btn lead  offer-btn"> All </a>
        <a className="btn  offer-btn"> Branding Strategy </a>
        <a className="btn offer-btn"> Digital Exprience </a>
        <a className="btn  offer-btn"> Ecommerce </a>
      </div>

      <div className="d-flex flex-column flex-md-row gap-3 my-5 align-items-center">
        <div>
          
          {/* Inner container: column on small, row on md+ */}
          <div className="d-flex flex-column flex-md-row gap-3 mb-3">
            <div className="position-relative">
              <img
                className="img-fluid big-img"
                src={project01}
                alt="project1"
              />
              <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
                <p className="mb-3 fs-5"> Project 1 Description </p>
                <button className="btn btn-light btn-sm"> ➔ </button>
              </div>
            </div>

            <div className="position-relative">
              <img
                className="img-fluid big-img"
                src={project02}
                alt="project2"
              />
              <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
                <p className="mb-3 fs-5"> Project 2 Description </p>
                <button className="btn btn-light btn-sm"> ➔ </button>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <img className="img-fluid big-img" src={project03} alt="project3" />
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
              <p className="mb-3 fs-5"> Project 3 Description </p>
              <button className="btn btn-light btn-sm"> ➔ </button>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <img className="img-fluid big-img" src={project04} alt="project4" />
          <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
            <p className="mb-3 fs-5"> Project 4 Description </p>
            <button className="btn btn-light btn-sm"> ➔ </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer2;
