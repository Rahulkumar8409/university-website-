import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img"></img>
        <img src={play_icon} className="play-icon"></img>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leading Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, esse
          reiciendis. Error recusandae rerum at laudantium voluptas. Nostrum
          nihil ullam asperiores. Magnam voluptate voluptates veniam perferendis
          corrupti, maiores quas natus aspernatur. Aliquam deserunt consequuntur
          reprehenderit? Nostrum voluptatem totam praesentium voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad a quae ut
          laudantium quas eum libero ex aliquam quasi cum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid
          architecto aperiam sint? Est, officia corporis perspiciatis mollitia
          modi officiis nobis repellat, ut autem eius voluptates nulla deserunt
          iste dicta.
        </p>
      </div>
    </div>
  );
};

export default About;
