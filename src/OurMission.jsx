import data from './data/mission.json'

const JSONdata = data;  
function OurMission() {
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