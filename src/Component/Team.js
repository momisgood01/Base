import team from '../Component/Team.css';
import shape10 from '../Component/assets/shape-10.svg';
import shape11 from '../Component/assets/shape-11.svg';
import shape09 from '../Component/assets/shape-09.svg';
import team1 from '../Component/assets/team-01.png';
import team2 from '../Component/assets/team-02.png';
import team3 from '../Component/assets/team-03.png';

function Team() {
  return (
   <section className='  team-page text-center'>
   <img className='shape10 ' src={shape10} />
     <div className='container text-justify'>
      <h1 className='m-auto fs-1 '>Meet With Our Creative Dedicated Team</h1>
      <p className='fw-bold m-auto mt-3 mb-5 team-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
      <img className='shape11 spin' src={shape11} />
    </div>

 <div className="container d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-center gap-4 testimonial-team w-100">

  {/* img team1 */}

  <div className='team1'>
     <img src={team1} alt="Team 1" className="img-fluid mb-3" />
     <h3>Olivia Andrium</h3>
     <p>Product Manager</p>
     <img className='shape09 spin' src={shape09} />
  </div>


  {/* img team2 */}
  <div className='team2'>
    <img src={team2} alt="Team 2" className="img-fluid mb-3" />
    <h3>Jemse Kemorun</h3>
     <p>Product Designer</p>
   </div>

   {/* img team3 */}
  <div className='team3'>
     <img src={team3} alt="Team 3" className="img-fluid  mb-3" />
     <h3>Avi Pestarica</h3>
     <p>Web Designer</p>
  </div>
</div>


   </section>
  )
}

export default Team
