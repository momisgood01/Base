import "./Blog.css"
import blog1 from "../Component/assets/blog-01.png"
import blog2 from "../Component/assets/blog-02.png"
import blog3 from "../Component/assets/blog-03.png"
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";

function Blog() {
  return (
    <section>
      <div className='text-center m-auto mb-5 text'>
        <h1 className='fw-bold fs-1 mb-3'>Latest Blogs & News</h1>
        <p className='text-secondary'> It is a long established fact that a reader will be distracted by the readable content of a page
             when looking at its layout. The point of using.</p>
      </div>
      <div className='my-5 mx-3  row'>
        <div className='col-lg-4 col-md-4 col-12 '>
             <div className="position-relative ">
                <img className="img-fluid big-img " src={blog1} alt="project3" />
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
              <button className="btn btn-light btn-lg rounded"> Read More </button>
            </div>
             </div>

            <div className="d-flex gap-2 mt-3 item-center">
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CgProfile/></span>
                   <p className="text-secondary">Musharof Chy</p>
                </div>
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CiCalendarDate /></span>
                    <p className="text-secondary"> 25 Dec, 2025</p>
                </div>      
            </div>
            <h4>Free advertising for your online business</h4>
        </div>

        <div className='col-lg-4 col-md-4 col-12 '>
            <div className="position-relative ">
                <img className="img-fluid big-img " src={blog2} alt="project3" />
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
              <button className="btn btn-light btn-lg rounded"> Read More </button>
            </div>
             </div>

            <div className="d-flex gap-2 mt-3 item-center">
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CgProfile/></span>
                   <p className="text-secondary">Musharof Chy</p>
                </div>
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CiCalendarDate /></span>
                    <p className="text-secondary">25 Dec, 2025</p>
                </div>
                
            </div>
            <h4>Free advertising for your online business</h4>
        </div>

        <div className='col-lg-4 col-md-4 col-12 '>
             <div className="position-relative ">
                <img className="img-fluid big-img " src={blog3} alt="project3" />
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
              <button className="btn btn-light btn-lg rounded"> Read More </button>
            </div>
             </div>

            <div className="d-flex gap-2 mt-3 item-center">
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CgProfile/></span>
                   <p className="text-secondary">Musharof Chy</p>
                </div>
                <div className="d-flex gap-2">
                    <span className="text-secondary">< CiCalendarDate /></span>
                    <p className="text-secondary">25 Dec, 2025</p>
                </div>
                
            </div>
            <h4>Free advertising for your online business</h4>

        </div>

        

      </div>
    </section>
  )
}

export default Blog
