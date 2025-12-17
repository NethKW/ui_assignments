import "./benefits.css";
import data from "../assets/data.png";
import growth from "../assets/growth.png";
import product from "../assets/product.png";
import digitalMarketing from "../assets/digital-marketing.jpg";
export default function BenefitsSection() {
  return (
    <div className="benefit-section">
      <div className="b-left">
        <h1>What you get as a <br /> Qureos Member</h1>
        <div className="b-card">
          <div className="card-headline">Masterclasses</div>
          <div>
            Learn about Data, Growth Hacking, Digital Marketing, and Product
            Strategies from the best in business.
          </div>
        </div>
        <div className="b-card">
          <div className="card-headline">1-on-1 Coaching</div>
          <div>
            Personalized guidance and practical advice from mentors.
          </div>
        </div>
        <div className="b-card">
          <div className="card-headline">Recordings Library</div>
          <div>
            Access recorded masterclasses anytime at your convenience.
          </div>
        </div>
      </div>
      <div className="b-right">
        <div className="img-box"><img src={data} alt="data" /><p>Data</p></div>
        <div className="img-box"><img src={growth} alt="growth" /><p>Growth</p></div>
        <div className="img-box"><img src={product} alt="product" /><p>Product</p></div>
        <div className="img-box"><img src={digitalMarketing} alt="digitalMarketing" /><p>Digital Marketing</p></div>
      </div>
    </div>
  );
}
