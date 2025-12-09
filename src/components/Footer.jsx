import "./Footer.css";
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tik-tok.png';
import facebook from '../assets/facebook.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top f-section">
        <div className="rf-section" >
          <div className="logo">Qureos</div>
          <div >
            <ul className="no-bullets">
              <li><Link className="footer-link" to="/coaching">1-on-1 Coaching</Link></li>
              <li><Link className="footer-link" to="/live-sessions">Live Sessions</Link></li>
              <li><Link className="footer-link" to="/blog">Blog</Link></li>
              <li><Link className="footer-link" to="/careers">Careers at Qureos</Link></li>
            </ul>
          </div>
        </div>
        <div className="rf-section">
          <div >
            <ul className="no-bullets">
              <li><Link className="footer-link" to="/jobs">Jobs</Link></li>
              <li><Link className="footer-link" to="/mentors">For Mentors</Link></li>
              <li><Link className="footer-link" to="/employers">For Employers</Link></li>
            </ul>
          </div>
          <div >
            <p>Social Media</p>
            <div className="no4">
              <a
                className="footer-link-tab"
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
              >
                <div className="s-box"><img src={instagram} alt="instagram" /></div>
              </a>
              <a
                className="footer-link-tab"
                href="https://x.com/twitt_login?lang=en"
                target="_blank"
              >
                <div className="s-box"><img src={twitter} alt="twitter" /></div>
              </a>
              <a
                className="footer-link-tab"
                href="https://www.linkedin.com/company/login"
                target="_blank"
              >
                <div className="s-box"><img src={linkedIn} alt="linkedIn" /></div>
              </a>
              <a
                className="footer-link-tab"
                href="https://www.youtube.com/account?hl=id"
                target="_blank"
              >
                <div className="s-box"><img src={youtube} alt="youtube" /></div>
              </a>
              <a
                className="footer-link-tab"
                href="https://www.tiktok.com/login"
                target="_blank"
              >
                <div className="s-box"><img src={tiktok} alt="tiktok" /></div>
              </a>
              <a
                className="footer-link-tab"
                href="https://www.facebook.com/login/"
                target="_blank"
              >
                <div className="s-box"><img src={facebook} alt="facebook" /></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"><p>© 2024 Qureos. All rights reserved.</p></div>

    </footer>
  );
}
