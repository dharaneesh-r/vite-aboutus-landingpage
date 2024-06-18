import data from './data/mission.json'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
function Empowering() {
  useEffect(() => {
    gsap.fromTo('.empowering-container', {
      opacity : 0,
      x : 100,
    },{
      opacity : 1,
      x : 0,
      scrollTrigger : {
        trigger : '.empowering-container',
        toggleActions : 'restart none none none',
        start : '20% bottom',
        duration : 1,
        scrub : 1,
        stagger : 1,  
      }
    })
  },[])
  return (
    <div className="empowering-container">
      <div className="empowering-title">
        Empowering Possibilities with Precision Tools and Skilled Minds
        <hr />
      </div>
      <div className="title-emp">
        <div className="title-empowering">Our Team</div>
        {data.map((data, index) => (
          <div key={index}>
            <div className="content-empowering">{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empowering