import ClientSay from './ClientSay';
import Empowering from './Empowering';
import EmpoweringMember from './EmpoweringMember';
import Headingpage from './Headingpage'
import MarqueeClient from './MarqueeClient';
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
      <MarqueeClient />
      <div>
        <Empowering />
      </div>
      <EmpoweringMember />
    </div>
  );
}

export default App