import { useRef } from "react";
import "../../assets/css/common.css";
import profileImage from "../../assets/images/harsh_photo.jpg";
import "./Home.css";
import Typed from "typed.js";
import { useEffect } from "react";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Development ^1000", " Web Development ^1000", "React Development ^1000"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="container-fluid background_image">
          <div className="row">
            {/* INFO COLUMN */}
            <div className="col-12 col-lg-6 content_wrapper order-2 order-lg-1">
              <div className="hero_text">
                <h2>Hi, There</h2>
                <h1>I&#39;m HARSH ATHAVALE</h1>
                <h2>
                  I am into <span ref={el}> Frontend Development</span>
                </h2>
                <div className="contact_icons">
                  <a
                    href="https://www.linkedin.com/in/harsh-ashok-athavale/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Harsh-Athavale-19" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="mailto:harshashokathavale@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="col-12 col-lg-6 img_wrapper order-1 order-lg-2">
              <div className="hero_img">
                <img src={profileImage} alt="profileImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
