import "./About.css";
import "../../assets/css/common.css";
import SkillsCard from "../../components/SkillsCard/SkillsCard";

const About = () => {
  return (
    <>
      <section className="about test" id="about">
        <div className="container">
          <h2 className="text-center mb-5 mt-3">ABOUT ME</h2>
          <div className="row">
            {/* SKILLS CARD */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <SkillsCard />
            </div>

            {/* INFO COLUMN  */}

            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="about_info">
                <h2>Harsh Athavale</h2>
                <p>
                  I am a Front End Developer based in Mumbai, India. I recently graduated with a
                  Bachelor&#39;s degree in Computer Science Engineering from Mumbai University.
                  <br />I am passionate about coding and staying up-to-date with the latest
                  technologies and techniques in the field, and I am always looking for
                  opportunities to learn and grow.
                </p>
                <a href="#">
                  <button className="btn btn-primary ">
                    Download Resume <i className="fas fa-download "></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
