import data from './data/mission.json'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const JSONdata = data;  
function OurMission() {
  useEffect(() => {
      gsap.fromTo('.ourservice-title', {
        opacity : 0,
        x : 40,
      }, {
        opacity : 1,
        x : 0,
        scrollTrigger : {
          trigger : '.ourservice-title',
          toggleActions : 'restart none none none',
          start : '10% bottom',
          duration : 1,
          // scrub : 1,
          // stagger : 1,
          smooth : true,  
        }
      })
  },[])
  useEffect(() => {
      gsap.fromTo('.ourservice-content', {
        opacity : 0,
        x : 40,
      },{
        opacity: 1,
        x : 0,
        scrollTrigger : {
          trigger : '.ourservice-content',
          toggleActions : 'restart none none none',
          start : '10% bottom',
          duration : 1,
          // scrub : 1,
          // stagger : 1, 
          smooth : true, 
        }
      })

  },[])

  return (
    <div className="ourservice">
      <div className="ourservice-title">Our Mission</div>
      {JSONdata.map((data, index) => (
        <div key={index}>
          <div className="ourservice-content">{data.content}</div>
        </div>
      ))}
    </div>
  );
}

export default OurMission