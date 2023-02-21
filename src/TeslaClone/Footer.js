import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <div className='footer'>
        <ul className='footerli'>
        <li><a href='#'>Tesla © 2023</a></li>
        <li><a href='#'>Privacy & Legal</a></li>
        <li><a href='#'>Vehicle Recalls</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Careers</a></li>
        <li><a href='#'>News</a></li>
        <li><a href='#'>Engage</a></li>
        <li><a href='#'>Locations</a></li>
        </ul>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
