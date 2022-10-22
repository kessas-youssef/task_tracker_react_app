import { useState } from "react"

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear())
  return (
    <footer className="footer">
        <h5 className="footer__text">By Kessas Youcef - {date}</h5>
        <a className="footer__about" href="https://www.instagram.com/youssef_kessas/" target={'_blank'} rel="noreferrer">About</a>
    </footer>
  )
}

export default Footer