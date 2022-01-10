import React from 'react'
import './features.css'

const featuresData = [
  {
    title: '',
    text: '',
  },

  {
    title: '',
    text: '',
  },

  {
    title: '',
    text: '',
  },
];

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features__heading'>
                <h1 className="gradient-text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>The possibilities are beyond your imagination</p>
            </div>
            <div className="gpt3__features-container">
                <Feature />
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    )
}

export default Features
