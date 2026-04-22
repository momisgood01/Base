import "../Component/StartUp.css";

function StartUp() {
  return (
    <section className="startup mb-5 px-3 px-md-5">
      <div className="container">
        <div className="row align-items-center text-white">
          {/* Text Column */}
          <div className="col-12 col-md-8 mb-4 mb-md-0">
            <h1 className="mb-3">
              Join with 5000+ Startups Growing with Base.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. 
              Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>

          {/* Button Column */}
          <div className="col-12 col-md-4 text-md-end text-center">
            <button className="btn btn-lg bg-white text-dark rounded">
              Get started now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartUp;
