import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
            <div className="row">
                <div className="col text-center footer p-2">
                    <address>
                        <p><ion-icon name="logo-whatsapp"></ion-icon> +54 299 123456</p>
                        <p><ion-icon name="call-outline"></ion-icon> +54 299 4456789 </p>
                        <p><ion-icon name="mail-outline"></ion-icon> shop@n-tec.com</p>
                    </address>
                </div>
            </div>
            <div className="row derechos">
                <div className="col text-center  p-1">
                    <small>Copyright N-TEC 2024 - Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
  )
}

export default Footer