import React from 'react'

export const Footer = () => {
  return (
    <footer className="section container-fluid text-light" id="contact">
        <div className="row bg-footer p-5">
            <div className="container d-flex justify-content-around flex-wrap flex-column flex-md-row">
                <a className="text-light link footer-link"
                    href="https://www.linkedin.com/in/gustavo-farfan-coraje-64488b211/">
                    <i className="fab fa-linkedin"></i>
                    <span>linkedin.com/in/gustavo-farfan-coraje/</span>
                </a>
                <a className=" text-light link footer-link" href="mailto:farfancoraje15@gmail.com">
                    <i className="fas fa-envelope"></i>
                    <span>farfancoraje15@gmail.com</span>
                </a>
                <a className="text-light link footer-link" href="tel:910534484">
                    <i className="fas fa-phone"></i>
                    <span>+51 910534484</span>
                </a>
                <a className="text-light link footer-link" href="https://github.com/gafc2001">
                    <i className="fab fa-github"></i>
                    <span>github.com/gafc2001</span>
                </a>
            </div>
        </div>
        <div className="row bg-footer-secondary">
            <p className="m-0 text-center py-4">Gustavo Farfan Coraje | Portfolio <span id="year">2022</span></p>
        </div>
    </footer> 
  )
}
