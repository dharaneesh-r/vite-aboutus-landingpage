import ClientSay from './ClientSay';
import Empowering from './Empowering';
import EmpoweringMember from './EmpoweringMember';
import Headingpage from './Headingpage'
import MarqueeClient from './MarqueeClient';
import OurMission from './OurMission';
import ShapingFutures from './ShapingFutures';
import TriggerScroll from './TriggerScroll';
import Youtube from './Youtube';
import Footer from './Footer'
import Footergrid from './Footergrid'
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
      <div className='footerfooter'>
        <Footer />
        <Footergrid />
        <div style={{padding : '20px',backgroundColor : 'black',color : 'white',fontSize : '12px'}}>
          <div>&copy;2023 All Rights reserved  <span style={{float: 'right'}}>Privacy Policy</span></div>
        </div>
      </div>
    </div>
  );
}

export default App