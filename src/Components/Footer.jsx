import React from 'react'

  
function Footer() {
  return (
    <footer>
      <p>Powered by</p>
      <img src={`/images/DH.png`} alt='DH-logo' id="DHLogo" />
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={`/images/ico-facebook.png`} alt="Facebook Icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={`/images/ico-instagram.png`} alt="Instagram Icon" />
      </a>
      <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={`/images/ico-whatsapp.png`} alt="Whatsapp Icon" />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src={`/images/ico-tiktok.png`} alt="Tiktok Icon" />
      </a>

    </footer>
  )
}

export default Footer
