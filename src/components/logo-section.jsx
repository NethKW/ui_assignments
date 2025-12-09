import "./logo-section.css";
import oracle from "../assets/oracle.png"
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import netflix from "../assets//netflix.png";
import cisco from "../assets/cisco.png";
import linkedIn from "../assets/linkedinl.png"
import uber from "../assets/uber.png";
import amazon from "../assets/amazon.png";
export default function Logos() {
  return (
    <div className="logo-section">
      <h2 className="scroll-info">Our mentors are experts at</h2>
      <section className="logos-external">
        <div className="logos-wrapper">

          <div className="logo-item slower">
            <img src={oracle} alt="oracle" />
          </div>
          <div className="logo-item logo-item2 slower">
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div className="logo-item slower">
            <img src={google} alt="google" />
          </div>
          <div className="logo-item slower">
            <img src={netflix} alt="netflix" />
          </div>
          <div className="logo-item slower">
            <img src={cisco} alt="cisco" />
          </div>
          <div className="logo-item slower">
            <img src={linkedIn} alt="linkedIn" />
          </div>
          <div className="logo-item slower">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="logo-item logo-item1 slower">
            <img src={uber} alt="uber" />
          </div>
        </div>
      </section>
    </div>
  );
}
