import data from './data/mission.json'

function Empowering() {
  return (
    <div className="empowering-container">
      <div className="empowering-title">
        Empowering Possibilities with Precision Tools and Skilled Minds
        <hr />
      </div>
      <div className="title-emp">
        <div className="title-empowering">Our Team</div>
        {data.map((data, index) => (
          <div key={index}>
            <div className="content-empowering">{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empowering