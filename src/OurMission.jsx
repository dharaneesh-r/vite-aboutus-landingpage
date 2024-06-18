import data from './data/mission.json'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const JSONdata = data;  
function OurMission() {
  
  useEffect(() => {
    gsap.fromTo('.ourmission-title', {
      opacity : 0,
      x : 40,
    }, {
      opacity : 1,
      x : 0,
      scrollTrigger : {
        trigger : '.ourmission-title',
        toggleActions : 'restart none none none',
        start : '20% bottom',
        duration : 1,
        scrub : 1,
        stagger : 1,  
      }
    })
  },[])
  useEffect(() => {
    gsap.fromTo('.ourmission-content', {
      opacity : 0,
      x : 40,
    },{
      opacity: 1,
      x : 0,
      scrollTrigger : {
        trigger : '.ourmission-content',
        toggleActions : 'restart none none none',
        start : '20% bottom',
        duration : 1,
        scrub : 1,
        stagger : 1,  
      }
    })
  },[])

  return (
    <div className="ourmission-container">
      <div className="ourmission-title">Our Mission</div>
      {JSONdata.map((data, index) => (
        <div key={index}>
          <div className="ourmission-content">{data.content}</div>
        </div>
      ))}
    </div>
  );
}

export default OurMission