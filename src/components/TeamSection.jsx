import React from "react";

const TeamSection = () => (
  <section className="team-section">
    <div className="container">
      <div className="team-member">
        <div className="member-image"><img src="src/assets/person_3.jpg.webp" alt="Member" /></div>
        <div className="member-info">
          <h3>Ahmed Raza</h3>
          <p className="role">CEO & Founder</p>
          <p className="description">Leading our company with vision and experience in real estate.</p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-image"><img src="src/assets/person_5.jpg.webp" alt="Member" /></div>
        <div className="member-info">
          <h3>Sara Malik</h3>
          <p className="role">Marketing Head</p>
          <p className="description">Expert in digital property marketing and client relationships.</p>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;

