import React from 'react'
import googleIcon from '../../assets/logos/google.png'
import twitterIcon from '../../assets/logos/twitter.png'
import './ServiceButtons.css'

const ServiceButtons = () => {
    const services = [googleIcon, twitterIcon];
    return (
        <div className="ServiceButtons-containers">
            {services.map((service) => (
                <figure className={`ServiceButtons-element ${service === googleIcon ? 'googleIcon' : null}`} key={service}>
                    <img src={service} alt={`${service} logo`} />
                </figure>
            ))}
        </div>
    )
}

export { ServiceButtons }