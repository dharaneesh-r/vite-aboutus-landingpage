import data from './data/empowering.json'



function EmpoweringMember() {
  return (
    <div className="empoweringMember">
      {data.map((data, index) => (
        <div className="empowering-grid" key={index}>
          <div className="designation">{data.designation}</div>
          <div className="empowering-image">
            <img src={data.image} className="emp-image" />
          </div>
          <div className="team-name">{data.teamname}</div>
        </div>
      ))}
    </div>
  );
}

export default EmpoweringMember
