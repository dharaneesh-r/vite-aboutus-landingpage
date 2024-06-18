import data from './data/empowering.json'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function EmpoweringMember() {
  useEffect(() => {
    gsap.fromTo('.empowering-grid', {
      opacity : 0,
      y : 100,
    }, {
      opacity : 1,
      y : 0,
      scrollTrigger : {
        trigger : '.empowering-grid',
        toggleActions : 'restart none none none',
        start : '20% bottom',
        duration : 1,
        scrub : 1,
        stagger : 1,
      }
    })
  })
  return (
    <div className="empoweringMember">
      {data.map((data, index) => (
        <div className="empowering-grid" key={index}>
          <div className="designation">{data.designation}</div>
          <div className="empowering-image">
            <img src={data.image} className="emp-image" />
          </div>
          <div className="team-name">{data.teamname}</div>
        </div>
      ))}
    </div>
  );
}

export default EmpoweringMember
