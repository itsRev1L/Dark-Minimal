import React, { useState } from "react";
import Images from "./Images.jsx";
import "./imageviewer.css";

const ImageViewer = () => {
  const [selectimg, SetSelectimg] = useState(Images[1]);
  return (
    <>
      <div className="Image">
        <div className="Container">
          <img src={selectimg} alt="Selected" className="Selected" />
          <div className="ImgContainer">
            {Images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="none"
                onClick={() => SetSelectimg(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
