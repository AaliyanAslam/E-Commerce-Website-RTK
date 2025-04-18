import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({style}) => {
  const navigate = useNavigate()
  return (
    <>
    <footer className={style} >
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover" onClick={()=> navigate("/about")}>About us</a>
    <a className="link link-hover" onClick={()=> navigate("/contact")}>Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    
    </>
  )
}

export default Footer