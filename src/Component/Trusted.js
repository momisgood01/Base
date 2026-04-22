import brand1 from "../Component/assets/brand-light-01.svg";
import brand2 from "../Component/assets/brand-light-02.svg";
import brand3 from "../Component/assets/brand-light-03.svg";
import brand4 from "../Component/assets/brand-light-04.svg";
import brand5 from "../Component/assets/brand-light-05.svg";
import "./Trusted.css"
const Trusted = () => {
  return (
    <section className=' '>
        <div className='text-center text1 m-auto my-5'>
            <h1 className='fw-bold my-3'>Trusted by Global Brands</h1>
            <p className='text-secondary  mb-5'>It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of using.</p>
        </div>
        <marquee>
        <div className="d-flex gap-5  mx-5 my-5">  
          <img className="" src={brand1} />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand4} />
          <img src={brand5} />
          
        </div>
        </marquee>
        < hr className="my-5 "/>
    </section>
  )
}

export default Trusted
