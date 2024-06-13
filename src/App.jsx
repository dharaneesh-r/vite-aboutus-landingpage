import ClientSay from './ClientSay';
import Headingpage from './Headingpage'
import OurMission from './OurMission';
import ShapingFutures from './ShapingFutures';
import TriggerScroll from './TriggerScroll';
import Youtube from './Youtube';
import './aboutus.css'

function App() {
  return (
    <div>
      <div className="headingpage-container">
        <Headingpage />
      </div>
      <div className="shapingfutures">
        <ShapingFutures />
        <OurMission />
        <Youtube />
      </div>
      <div className="success-story">
      <TriggerScroll />
      </div>
      <ClientSay />
    </div>
  );
}

export default App