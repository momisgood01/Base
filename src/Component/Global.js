import global from "../Component/Global.css";
import shape07 from "../Component/assets/shape-07.svg";
import shape11 from "../Component/assets/shape-11.svg";
import shape14 from "../Component/assets/shape-14.svg";

function Global() {
  return (
    <section className="global text-center py-5">
      <div className="position-relative container">
        <img className="shape07" src={shape07} alt="" />
        <img className="shape14" src={shape14} alt="" />

        <div className="row mt-5 text-center g-5  ">
          <div className="col-6 col-lg-3">
            <h1 className="fw-bolder"> 785 </h1>{" "}
            <h5 className="text-secondary"> Global Brands </h5>{" "}
          </div>
          <div className="col-6 col-lg-3">
            <h1 className="fw-bolder"> 533 </h1>{" "}
            <h5 className="text-secondary"> Happy Clients </h5> 
          </div>
          <div className="col-6 col-lg-3">
            <h1 className="fw-bolder"> 785 </h1>
            <h5 className="text-secondary"> Winning Award </h5>
          </div>
          <div className="col-6 col-lg-3">
            <h1 className="fw-bolder"> 533 </h1>
            <h5 className="text-secondary"> Happy Clients </h5>
          </div>{" "}
        </div>
      </div>{" "}
      <img className="shape11 spin" src={shape11} />{" "}
    </section>
  );
}

export default Global;
