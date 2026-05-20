import React from 'react'

const AboutHorizonOS = ({Section,Device,fullScreen}) => {
  return (
    <div className={`h-full border border-blue-400 flex ${Device === 'Desktop'?'':'overflow-y-auto'}`}>
      {Section}
      </div>
  )
}

export default AboutHorizonOS