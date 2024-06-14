// import React from 'react'
import Marquee from 'react-fast-marquee'
import { data } from './footer-info'

function Footer() {
    return (
      <div className="footer-container">
        <Marquee pauseOnHover>
          {data.map((data, index) => {
            return (
              <div className="footer-heading" key={index}>
                {data.heading}
                <span style={{ paddingLeft: "15px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    fill="currentColor"
                    className="bi bi-arrow-up-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </Marquee>
        <br />
        <div style={{paddingBottom : '30px'}}></div>
      </div>
    );
}

export default Footer