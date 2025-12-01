import React from 'react';
import bill from './Bill.css'
import shape06 from '../Component/assets/shape-06.svg';
import shape05 from '../Component/assets/shape-05.svg';
import shape18 from '../Component/assets/shape-18 (1).svg';


function Bill() {
  return (
   <section className='bill-page text-center '>
   <img className='shape06 ' src={shape06} />
        <div className='container text-justify'>
         <h1 className='m-auto '>We Offer Great Affordable Premium Prices.</h1>
         <p className='fw-bold m-auto mt-3 mb-5 team-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
             The point of using.</p>
         <img className='shape05 spin' src={shape05} />
         <div className='d-flex justify-content-center gap-3'>
         <p>Monthly Bill</p> 
            
<label className="switch">
  <input type='checkbox'/>
  <span className="slider"></span>
</label>
         <p>Bill Annually</p></div>
       </div>
       

      <div className="container py-5">
  <div className="row justify-content-center align-items-stretch g-4">
    
    {/* Starter Plan Card */}
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 text-center shadow">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className=" mb-5 mt-3 card-title fw-bold">Starter Plan</h5>
            <div className='d-flex justify-content-center '><h3 className="card-text">$29</h3>
            <p className="text-muted">per month</p></div>
            <p className="pb-3">No credit card required</p>
            <a href="#" className="btn btn-primary btn-lg mb-3 orange ">Start Free Trial</a>

            <p>400 GB Storage</p>
            <p>Unlimited Photos & Videos</p>
            <p>Exclusive Support</p>
            <p className="pt-2">7-day Free Trial</p>
          </div>

          
        </div>
      </div>
    </div>

    {/* Plan 2 */}
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 text-center shadow">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className=" mb-5 mt-3 card-title fw-bold">Growth Plan</h5>
            <div className='d-flex justify-content-center'><h3 className="card-text">$59</h3>
            <p className="text-muted">per month</p></div>
            <p className="pb-3">No credit card required</p>
            <a href="#" className="btn btn-primary btn-lg mb-3 blue">Start Free Trial</a>

            <p>400 GB Storage</p>
            <p>Unlimited Photos & Videos</p>
            <p>Exclusive Support</p>
            <p className="pt-2">7-day Free Trial</p>
          </div>
        </div>
      </div>
    </div>

    {/* Plan 3 */}
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 text-center shadow">
        <div className="card-body d-flex flex-column justify-content-between">
           <div>
            <h5 className=" mb-5 mt-3 card-title fw-bold">Business</h5>
            <div className='d-flex justify-content-center'><h3 className="card-text">$139</h3>
            <p className="text-muted">per month</p></div>
            <p className="pb-3">No credit card required</p>
            <a href="#" className="btn btn-primary btn-lg mb-3 orange ">Start Free Trial</a>
            <p>400 GB Storage</p>
            <p>Unlimited Photos & Videos</p>
            <p>Exclusive Support</p>
            <p className="pt-2">7-day Free Trial</p>
          </div>
       
        </div>
      </div>
    </div>

  </div>
</div>

 {/* <img className='shape18' src={shape18} /> */}
   </section>
  )
}

export default Bill
