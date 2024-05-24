import React from 'react'
import Container from '../utils/Utils'

const Map = () => {
  return (
    <div className='mt-28 rounded-3xl overflow-hidden'>
        <Container>
        <iframe className='w-full rounded-t-3xl shadow-card' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1361972836326!2d69.2247184!3d41.284140199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a44572680af%3A0xed170d6bed0beee8!2s9%2C%20Chilonzor%20ko&#39;chasi%2015%2C%20100115%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent!5e0!3m2!1sen!2s!4v1716202628458!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        </Container>
    </div>
  )
}

export default Map