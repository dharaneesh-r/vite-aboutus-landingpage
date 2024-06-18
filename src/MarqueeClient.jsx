import data from './data/marqueeClient.json'
import Marquee from "react-fast-marquee";   

const JSONData = data;

function MarqueeClient() {
  return (
    <Marquee>
        {JSONData.map((data, index) => (
            <div className='top-div-client' key={index}>
            <div className='client-container'>
                <div className='client-image'>
                    <img src={data.image} className='client-src-image'/>
                </div>
                <div className='client-content'>{data.content}</div>
                <div className='client-candidate'>{data.candidate}</div>
                <div className='client-head'>{data.head}</div>
            </div>
            </div>
        ))}
    </Marquee>
  )
}

export default MarqueeClient