import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardsCard = ({ awards: { imgUrl, subtitle, title } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="laurel_img" />
    <div className="app__laurels_awards-card_content">
      <p className="p__opensans" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurel-awards">
        {data.awards.map((awards) => (
          <AwardsCard awards={awards} key={awards.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurel" />
    </div>
  </div>
);

export default Laurels;
