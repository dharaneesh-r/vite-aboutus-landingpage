import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EmpoweringMember from './EmpoweringMember';
import Footer from './Footer'
import Footergrid from './Footergrid'

gsap.registerPlugin(ScrollTrigger);

const FullScrollPinningDemo = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      gsap.fromTo(section, 
        { y: "0%" }, 
        {
          y: "0%",
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: () => `+=${section.offsetHeight}`,
            pin: true,
            pinSpacing: false, // Prevents adding extra space after pinning
            scrub: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section ref={el => sectionsRef.current[0] = el}>
      <EmpoweringMember />
      </section>
      <section ref={el => sectionsRef.current[1] = el}>
      <div className="footerfooter">
        <Footer />
        <Footergrid />
        <div
          style={{
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
          }}
        >
          <div>
            &copy;2023 All Rights reserved{" "}
            <span style={{ float: "right" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default FullScrollPinningDemo;


