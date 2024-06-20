import ClientSay from './ClientSay';
import Empowering from './Empowering';
// import EmpoweringMember from './EmpoweringMember';
import Headingpage from './Headingpage'
import MarqueeClient from './MarqueeClient';
import OurMission from './OurMission';
import ShapingFutures from './ShapingFutures';
import TriggerScroll from './TriggerScroll';
import Youtube from './Youtube';
import './aboutus.css'
import ScrollingText from './ScrollingText';
import FullScrollPinningDemo from './Demo';

function App() {

  return (
    <div>
      <div className="headingpage-container">
        <Headingpage />
      </div>
      <ScrollingText />
      <div className="shapingfutures">
        <ShapingFutures />
        <OurMission />
        <Youtube />
      </div>
      <div className="success-story">
        <TriggerScroll />
      </div>
      <ClientSay />
      <MarqueeClient />
      <div>
        <Empowering />
      </div>
        {/* <EmpoweringMember /> */}
      <FullScrollPinningDemo />
      {/* <div className="footerfooter">
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
      </div> */}
    </div>
  );
}

export default App
