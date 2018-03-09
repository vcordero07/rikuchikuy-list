import React from "react";

import "./Footer.css";

export default function FooterSection(props) {
  return (
    <section className="footer">
      <div className="footer-credits">
        <span>
          <span className="fa fa-copyright" /> Rikuchikuy-List by{" "}
          <a href="https://github.com/vcordero07/rikuchikuy-list">Virgilio</a> |{" "}
        </span>
      </div>
    </section>
  );
}
