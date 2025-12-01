import React from 'react'
import whyUs from './whyUs.css'
import shape05 from '../Component/assets/shape-05.svg';
import about01 from '../Component/assets/about-01.png';
import about02 from '../Component/assets/about-02.png';
import shape06 from '../Component/assets/shape-06.svg';
import about03 from '../Component/assets/about-03.png';
import shape07 from '../Component/assets/shape-07.svg';
import { MdPlayArrow } from "react-icons/md"

function WhyUs() {
  return (
    <section className='container whyus  d-flex justify-content-between '> 
    <div data-aos="fade-rite" className='d-flex m gap-2'>
      <div className='d-felx shape-box flex-column  gap-3'>
      <img className='shape05 object-fit '  src={shape05} />
      <img className='about01 object-fit mb-3 '  src={about01} />
      <img className='about02 object-fit'  src={about02} /> 
      </div>

     <div className='d-felx shape-box flex-column '>
      <img className='shape0 mb-5 '  src={shape06} />
      <img className='about03 mb-3 '  src={about03} /> 
      <img className='about07 mb-5 ' src={shape07} />

      </div>  
    </div>
 
 {/* whyUs test */}

    <div data-aos="fade-left"  className='whyus-text mb-5'> 
    <h5 className='mb-3 '>Why Choose Us</h5>
    <h1 className='mb-3 '>We Make Our customers <br/>
     happy by giving Best <br/> services.</h1> 
    <p className='mb-5 '>It is a long established fact that a reader will be distracted by the readable  
       content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

       <div className='d-flex gap-3 '>
         <div className='arrow-icon d-flex justify-content-center'><MdPlayArrow size={30} color='white'  className="mt-2 " /></div>
         <h6 className='mt-3'>SEE HOW WE WORK</h6>
       </div>
    </div> 

    </section>
  )
}

export default WhyUs
