import React from 'react'
import { Image } from 'semantic-ui-react'

const divStyle = {
  padding: '40px 40px',
  backgroundColor: 'pink',
  textAlign: 'center',
  fontSize: '80px'
}
const pStyle = {
  backgroundColor: 'black'
}

const homepage = () => (
  <div className="homepage">
    <div style={divStyle}>
      <p>Little Gracie</p>
    </div>
    <div>
      <Image
        src="https://i.pinimg.com/originals/2e/aa/94/2eaa9476c6cbe9624a840ed279ed2b51.gif"
        centered
      />
    </div>
    <div style={divStyle} />
  </div>
)

export default homepage
