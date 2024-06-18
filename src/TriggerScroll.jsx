import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function TriggerScroll() {
  const sectionRef = useRef(null);
  const trigggerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".section-content",
      {
        opacity: 0,
        y : 40,
      },
      {
        opacity: 1,
        y : 0,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-content",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
          scrub : 1,
          stagger : 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".section-title",
      {
        opacity: 0,
        y : 40,
      },
      {
        opacity: 1,
        y : 0,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-title",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
          scrub : 1,
          stagger : 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".section-div-img",
      {
        opacity: 0,
        y : 40,
      },
      {
        opacity: 1,
        y : 0,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-div-img",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
          scrub : 1,
          stagger : 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-215vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigggerRef.current,
          start: "top 20%",
          end: "2000 left",
          scrub: 0.6,
          invalidateOnRefresh: true,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="section-container">
      <div ref={trigggerRef}>
        <div ref={sectionRef} className="section-group">
          <div className="section">
            <div className="feature-title">
              SUCCESS
              <br />
              STORY
            </div>
          </div>
          <div className="section">
            <div className="section-year">2017</div>
            <div className="section-div-img">
              <img
                src="https://framerusercontent.com/images/7Ht34eob3bmZH5UBTqz5v5tZqI.jpg?scale-down-to=2048"
                className="section-img"
              />
            </div>
          </div>
          <div className="section">
            <div className="section-title">First Dot</div>
            <br />
            <div className="section-content">
              Established in 2017, Dotworld Robotics began as a passion project,
              evolving into a leader in the robotics industry. Through
              challenges and breakthroughs, we redefined automation with a
              revolutionary vision. Today, we stand at the forefront,
              transforming obstacles into opportunities and setting new
              standards in robotics.
            </div>
          </div>
          <div className="section">
            <div className="section-year">2018</div>
            <div className="section-div-img">
              <img
                src="https://framerusercontent.com/images/4q1AZJIiVuhYATsZzKdhkMlz2T8.jpg?scale-down-to=2048"
                className="section-img"
              />
            </div>
          </div>
          <div className="section">
              <div className="section-title">First Dot</div>
              <br />
              <div className="section-content">
                Established in 2017, Dotworld Robotics began as a passion
                project, evolving into a leader in the robotics industry.
                Through challenges and breakthroughs, we redefined automation
                with a revolutionary vision. Today, we stand at the forefront,
                transforming obstacles into opportunities and setting new
                standards in robotics.
              </div>
          </div>
          <div className="section">
            <div className="section-year">2019</div>
            <div className="section-div-img">
              <img
                src="https://framerusercontent.com/images/T75LVVWXvwS5fJIDmEVTll8.jpg?scale-down-to=2048"
                className="section-img"
              />
            </div>
          </div>
          <div className="section-last">
            <div className="section-title">First Dot</div>
            <br />
            <div className="section-content">
              Established in 2017, Dotworld Robotics began as a passion project,
              evolving into a leader in the robotics industry. Through
              challenges and breakthroughs, we redefined automation with a
              revolutionary vision. Today, we stand at the forefront,
              transforming obstacles into opportunities and setting new
              standards in robotics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TriggerScroll;

