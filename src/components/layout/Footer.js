import React from 'react'

const Footer = () => {
  const date  = new Date();
  return (
    <footer>
      <p>Ministry of Local Govenment and Rural Development</p>
      <p>P.O Box 50027</p>
      <p>Lusaka</p>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer