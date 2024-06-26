import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <Link to="./index.html">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt cilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Blogs</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <Link to="#">My Account</Link>
                  </li>
                  <li>
                    <Link to="#">Orders Tracking</Link>
                  </li>
                  <li>
                    <Link to="#">Checkout</Link>
                  </li>
                  <li>
                    <Link to="#">Wishlist</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy;{" "}
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
