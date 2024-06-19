import data from './data/mission.json'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
function Empowering() {
  useEffect(() => {
    gsap.fromTo('.ourservice-title', {
      opacity : 0,
      y : 20,
    },{
      opacity : 1,
      y : 0,
    })
  },[])
  useEffect(() => {
    gsap.fromTo('.ourservice-content', {
      opacity : 0,
      x : -20,
    },{
      opacity : 1,
      x : 0,
      duration : 1,
    })
  },[])
  return (
    <div className="empowering-container">
      <div className="empowering-title">
        Empowering Possibilities with Precision Tools and Skilled Minds
        <hr />
      </div>
      <div className="ourservice">
        <div className="ourservice-title">Our Team</div>
        {data.map((data, index) => (
          <div key={index}>
            <div className="ourservice-content">{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empowering