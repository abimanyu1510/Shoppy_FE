import { Link } from 'react-router-dom'; 

export  default function Footer (){
    return (
      <footer className="py-5" style={{backgroundColor:'rgb(227,230,230)',color:'rgb(49,53,91)'}}>
      <div className="container-fluid">
        <div className="row">
            <div className="col-4 text-center">
                <h4 className="fw-bold">Shoppy Cart</h4>
               <div style={{fontStyle:'italic'}}>
               <span className="d-block mt-1">A143 Tony Street</span>
                <span className="d-block mt-1">Tamilnadu, NY 535022</span>
                <span className="d-block mt-1">India</span>
                <span className="d-block mt-1 end-phn"> +91 8754228XXX</span>
                <span className="d-block mt-1 end-email"> info@example.com</span>
               </div>
            </div>
            <div className="col-4">
               <h4 className="text-center fw-bold">Useful Links</h4>
            <div className="d-flex justify-content-center" style={{fontStyle:'italic'}}>
                <ul>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Home</li></Link>
                    <Link to='about' style={{textDecoration:'none',color:'rgb(49,81,149)'}} ><li className="">About US</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Service</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Terms of Service</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}> <li className="">Contact Us</li></Link>
                </ul>
            </div>
            </div>
            <div className="col-4">
                <h4 className="text-center fw-bold">Our Services</h4>
              <div className="d-flex justify-content-center" style={{fontStyle:'italic'}}>
                <ul>
                    <li className="">Web Design</li>
                    <li className="">Web Developer</li>
                    <li className="">Product Mangement</li>
                    <li className="">Marketing</li>
                    <li className="">Graphic Design</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid my-4">
        <div className="row">
            <div className="col-11 col-lg-6 col-xl-6 col-sm-6 col-md-6 mx-auto text-center">
                  <div className="container mt-4"><p className="m-0 text-center fw-bold">Copyright &copy; My Website 2024</p></div>
            </div>
            <div className="col-11 col-lg-6 col-xl-6 col-sm-6 col-md-6 mx-auto text-center">
                        <div className="social-link">
                           <a href='https://www.facebook.com/'> <span className="links-spn m-1"><i className="fa-brands fa-facebook-f links"></i></span>
                           </a>
                           <a href='https://www.instagram.com/asal_abi_15?igsh=MW1odHY5N3Z5ZjdyNA=='> <span className="links-spn m-1"><i className="fa-brands fa-instagram links"></i></span>
                           </a>

                           <a href='https://www.linkedin.com/feed/'> <span className="links-spn m-1"><i className="fa-brands fa-linkedin-in links"></i></span></a>

                           <a href='https://twitter-log.netlify.app/'> <span className="links-spn m-1"><i className="fa-brands fa-twitter links"></i></span></a>
                        <a href='https://www.google.co.in/'><span className="links-spn m-1 no"><i className="fa-brands fa-google-plus-g links"></i></span></a>
                        </div>
            </div>
        </div>
      </div>
    </footer>
    )
}