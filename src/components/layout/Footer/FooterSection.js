import React from "react";

import "./Footer.css";

export default function FooterSection(props) {
  return (
    <section className="footer">
      <div className="footer-credits">
        <span>
          <span className="fa fa-copyright" /> Rikuchikuy-List by{" "}
          <a
            href="https://github.com/vcordero07/rikuchikuy-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            Virgilio Cordero
          </a>{" "}
          | Keep in touch{" "}
          <a
            href="https://github.com/vcordero07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-github-square fa-2x" />
          </a>{" "}
        </span>
      </div>
    </section>
  );
}
