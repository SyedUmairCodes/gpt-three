import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam labore
          a doloremque saepe unde magni molestias ea deleniti cum,
          reprehenderit, itaque, officia necessitatibus aspernatur facilis
          suscipit. Ducimus nemo voluptatum consequatur?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email address.. " />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>16,000+ People requested access in the last 24 hours.</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai header" />
      </div>
    </div>
  );
};

export default Header;
