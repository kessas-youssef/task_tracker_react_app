import { useState } from "react"
import Button from "./Button"

// Needa work on current date

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear())

  const [visibility, setVisibility] = useState(false)

  const showHideAbout = () =>
    visibility ? setVisibility(false) : setVisibility(true)

  return (
    <footer className="footer">
      <Button btnClassName='footer__about' onClick={showHideAbout} btnText='About' />
      {
        visibility
        &&
        <h5 className="footer__text">By <strong><em><a className="footer__link" href="https://www.instagram.com/youssef_kessas/" target={'_blank'} rel="noreferrer">Youcef Kessas</a></em></strong> - {date}</h5>
      }
    </footer>
  )
}

export default Footer