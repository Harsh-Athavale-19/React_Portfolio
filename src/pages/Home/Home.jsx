import "../../assets/css/common.css";
import profileImage from "../../assets/images/michael.jpg";
import "./Home.css";
const Home = () => {
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
                  I am into <span>Frontend Development</span>
                </h2>
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
