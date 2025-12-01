
import support from '../Component/Support.css';
import { FaGlobe } from "react-icons/fa";  
import { FaUser } from "react-icons/fa";       // FontAwesome
import { MdGroups } from "react-icons/md"; 


function Support() {
  return (
    <section className='container d-flex flex-wrap justify-content-between gap-3 support'>
    <div className=''>
    <div className='d-flex gap-3'>
    <div className='icon-box1 d-flex justify-content-center  '>
       <FaUser className='icon1 mt-3 pt-2 ' size={50} color='white'/>
    </div>
      <div className='box-text'>
      <h4>24/7 Support</h4>
      <p>Lorem ipsum dolor sit amet conse <br />
       adipiscing elit.</p>
      </div>
    </div>
    
      
    </div>
    <div>
    <div className='d-flex gap-3'>
    <div className='icon-box2  d-flex justify-content-center  '>
       <FaGlobe className='icon2 mt-3 pt-2' size={50} color="white" />
    </div>    
      <div className='box-text' >
      <h4>Take Ownership</h4>
      <p>Lorem ipsum dolor sit amet conse <br />
       adipiscing elit.</p>
      </div>
    </div>


      
    </div>
    <div>
    <div className='d-flex gap-3'>
    <div className='icon-box3 d-flex justify-content-center'>
       <MdGroups className='icon3 mt-3 pt-2' size={50} color='white'/>
    </div> 
      <div className='box-text'>
      <h4>Take Ownership</h4>
      <p>Lorem ipsum dolor sit amet conse <br />
       adipiscing elit.</p>
      </div>
    </div>
    
      
      
    </div>
    </section>
  )
}

export default Support
