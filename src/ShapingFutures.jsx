import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

function ShapingFutures() {
  useEffect(() => {
    gsap.fromTo('.shapingfutures-title',{
      opacity : 0,  
      x : -40,
    },{
      opacity : 1,
      x : 0,
      scrollTrigger : {
        trigger : '.shapingfutures-title',
        toggleActions : 'restart none none none',
        start : '20% bottom',
        duration : 1,
        scrub : 1,
        stagger : 1,  
      }
    })
  },[])
  return (
    <div className="shapingfutures-container">
        <div className="shapingfutures-title">
        Shaping Futures, <br /> One Innovation at a Time.
        </div>
        <hr />
    </div>
  )
}

export default ShapingFutures