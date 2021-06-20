import * as React from "react";

import "./index.css";

type starsProps = {
  children: React.ReactChild;
};

const StarsBg = (props: starsProps) => {
  return (
    <div className="stars-wrapper" id="scene">
      <div className="layer" data-depth="0.00"></div>
      <div className="stars-cluster stars-cluster-1 layer" data-depth="0.30">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
        <div className="star star-21"></div>
        <div className="star star-22"></div>
        <div className="star star-23"></div>
        <div className="star star-24"></div>
        <div className="star star-25"></div>
        <div className="star star-26"></div>
        <div className="star star-27"></div>
        <div className="star star-28"></div>
        <div className="star star-29"></div>
        <div className="star star-30"></div>
        <div className="star star-31"></div>
        <div className="star star-32"></div>
        <div className="star star-33"></div>
        <div className="star star-34"></div>
        <div className="star star-35"></div>
        <div className="star star-36"></div>
        <div className="star star-37"></div>
        <div className="star star-38"></div>
        <div className="star star-39"></div>
        <div className="star star-40"></div>
      </div>
      <div className="stars-cluster stars-cluster-2 layer" data-depth="0.50">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
        <div className="star star-21"></div>
        <div className="star star-22"></div>
        <div className="star star-23"></div>
        <div className="star star-24"></div>
        <div className="star star-25"></div>
        <div className="star star-26"></div>
        <div className="star star-27"></div>
        <div className="star star-28"></div>
        <div className="star star-29"></div>
        <div className="star star-30"></div>
        <div className="star star-31"></div>
        <div className="star star-32"></div>
        <div className="star star-33"></div>
        <div className="star star-34"></div>
        <div className="star star-35"></div>
        <div className="star star-36"></div>
        <div className="star star-37"></div>
        <div className="star star-38"></div>
        <div className="star star-39"></div>
        <div className="star star-40"></div>
      </div>
      <div className="stars-cluster stars-cluster-3 layer" data-depth="0.90">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <>{props.children}</>
      </div>
    </div>
  );
};

export default StarsBg;
