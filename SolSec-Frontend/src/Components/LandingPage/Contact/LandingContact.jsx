import "./LandingContact.css";

export default function LandingContact() {
  return (
    <>
      <section className="landing-contact-container">
        <div className="landing-contact-heading">Contact Us</div>
        <div className="socials">
          <a className="social-name" target="_blank" href="https://discord.gg/KqPCHwKR">Discord</a>
          <a className="social-name" target="_blank" href="https://twitter.com/SolSecDAO">Twitter</a>
          <a className="social-name" target="_blank" href="https://github.com/SolSec-Grizzlython/SolSec-monorepo">Github</a>
          <a className="social-name" target="_blank" href="https://solsec.gitbook.io/solsec/">Documentation</a>
        </div>
      </section>
    </>
  );
}
