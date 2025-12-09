import "./Footer.css";
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tik-tok.png';
import facebook from '../assets/facebook.png';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="top f-section">
        <div className="rf-section" >
          <div className="logo">Qureos</div>
          <div >
            <ul className="no-bullets">
              <li>1-on-1 Coaching</li>
              <li>Live Sessions</li>
              <li>Blog</li>
              <li>Careers at Qureos</li>
            </ul>
          </div>
        </div>
        <div className="rf-section">
          <div >
            <ul className="no-bullets">
              <li>Jobs</li>
              <li>For Mentors</li>
              <li>For Employers</li>
            </ul>
          </div>
          <div >
            <p>Social Media</p>
            <div className="no4">
              <div className="s-box"><img src={instagram} alt="instagram" /></div>
              <div className="s-box"><img src={twitter} alt="twitter" /></div>
              <div className="s-box"><img src={linkedIn} alt="linkedIn" /></div>
              <div className="s-box"><img src={youtube} alt="youtube" /></div>
              <div className="s-box"><img src={tiktok} alt="tiktok" /></div>
              <div className="s-box"><img src={facebook} alt="facebook" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"><p>© 2024 Qureos. All rights reserved.</p></div>

    </footer>
  );
}
