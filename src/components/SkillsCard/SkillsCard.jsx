import Skills from "../../assets/json/MySkills.json";
import "./SkillsCard.css";

const SkillsCard = () => {
  return (
    <div className="card skills_card p-3 ">
      <h2 className="text-center">SKILLS</h2>
      <div className="container">
        <div className="row row-cols-md-5">
          {Skills.map(({ id, name, img, img_size }) => (
            <div key={id} className="col">
              <div className="skill_circle">
                <img src={img} alt={name} width={img_size} height={img_size} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
