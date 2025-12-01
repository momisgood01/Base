import offer from '../Component/Offer.css';
import icon04 from '../Component/assets/icon-04.svg';
import icon05 from '../Component/assets/icon-05.svg';
import icon06 from '../Component/assets/icon-06.svg'
import icon07 from '../Component/assets/icon-07.svg'

function Offer() {
  return (
    <section className="container offer">
      <div className="offer-text text-center m-auto">
        <h1 className='mb-3 '>We Offer The Best Quality Service for You</h1>
        <p className='mb-5 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>

      {/* offer box */}
      <div className="row justify-content-center g-3 mt-3 mb-5">

       {/* box 1*/}
        <div className="col-12 col-md-4">
          <div className="custom-box  p-5">
            <img className='mb-3' src={icon04} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In convallis tortor.</p>
          </div>
        </div>


        {/* box 2*/}
        <div className="col-12 col-md-4">
          <div className="custom-box  p-5">
            <img className='mb-3' src={icon05} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In convallis tortor.</p>
          </div>
        </div>


        {/* box 3*/}
        <div className="col-12 col-md-4">
          <div className="custom-box  p-5">
            <img className='mb-3' src={icon06} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In convallis tortor.</p>
          </div>
        </div>


        {/* box 4*/}
        <div className="col-12 col-md-4">
          <div className="custom-box  p-5">
            <img className='mb-3' src={icon07} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In convallis tortor.</p>
          </div>
        </div>


        {/* box 5*/}
        <div className="col-12 col-md-4">
         <div className="custom-box  p-5">
            <img className='mb-3' src={icon05} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In convallis tortor.</p>
          </div>
        </div>

        {/* box 6*/}
        <div className="col-12 col-md-4">
          <div className="custom-box  p-5">
            <img className='mb-3' src={icon06} alt='icon06' />
            <h3 className='mb-3'>Crafted for Startups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In convallis tortor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
