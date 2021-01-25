import React from "react";
import skillet from "../image/skillet.jpg";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${skillet})` }}
      >
        <div className="flex flex-col items-center justify-center w-1/2 h-screen">
          <Bounce right cascade>
            <div className="italic font-bold text-gray-400 text-9xl">
              Hungry?
            </div>
          </Bounce>
          <Link to="/menu">
            <button className="w-56 h-16 mt-12 text-4xl text-gray-400 border-2 hover:bg-gray-700 rounded-xl">
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
