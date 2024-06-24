import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";
// import './index.css'

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div className="">
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      size={24}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
