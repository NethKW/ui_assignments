import "../components/member_section.css";
import member_sectionImg from "../assets/member_section.jpg";
import check from "../assets/check.png"

export default function Member_section() {
  return (
    <section className="member_section">
      <div className="l_section">
        <h1>Learn, excel and grow your career in Tech</h1>
        <p>
          Qureos Membership empowers you to build your knowledge, gain personalized coaching from
          industry experts,and get recommended to employers.
        </p>
        <div className="member-sub-section">
          <div className="button-section">
            <button className="btn">Become a Member</button>
            <p>14 Days Free Trial</p>
          </div>
          <div className="button-section1">
            <ul>
              <li><img src={check} alt="check" />100,000+ Members</li>
              <li><img src={check} alt="check" />500+ Mentors</li>
              <li><img src={check} alt="check" />100+ Employers</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="r-section">
        <img src={member_sectionImg} alt="member_sectionImg" />
      </div>
    </section>
  );
}
