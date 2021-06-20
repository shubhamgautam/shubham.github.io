import * as React from "react";
import "./index.css";

const IntroBlock = (): React.ReactElement<{}> => {

  return (
    <section className="intro-sec">
      <div className="header">
        <h1 className="text-left">Hi, my name is </h1>
      </div>
      <div className="name">
        <h2 className="heading-big text-left">Shubham Gautam.</h2>
      </div>
      <div className="sub-heading">
        <h3 className="heading-big text-left font-sans">I build and break things mostly breaking :)</h3>
      </div>
      <div className="description font-sans text-left">
        <p>I'm Bangalore based software engineer who like to buildiing, desigining (partially) awesome digital experience.
                I'm an engineer at <a target="_blank" href="https://www.microsoft.com/">Microsoft</a> focused on building next gent accessible, human centeric products.
                I love to try new and different things  with inner kick of entrepreneurship.</p>
      </div>
      <div>Get In Touch</div>
    </section>
  );
};

export default IntroBlock;
