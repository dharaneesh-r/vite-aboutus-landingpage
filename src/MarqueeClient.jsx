import data from './data/marqueeClient.json'
import Marquee from "react-fast-marquee";   

const JSONData = data;
console.log(JSONData)

function MarqueeClient() {
  return (
    <div>
        {JSONData.map((data, index) => (
            <Marquee key={index}>
            <div className='client-container'>
                <div className='client-image'>
                    <img src={data.image} className='client-src-image'/>
                </div>
                <div className='client-content'>{data.content}</div>
                <div className='client-candidate'>{data.candidate}</div>
                <div className='client-head'>{data.head}</div>
            </div>
            </Marquee>
        ))}
    </div>
  )
}

export default MarqueeClient