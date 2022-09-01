import React from "react";
import pdfIcon from "../../assets/pdf.png";
import downloadIcon from "../../assets/download.png";
import chapterIcon from "../../assets/chapterIcon.png";
import "./ClassDetails.scss";

const ClassDetails = () => {
  return (
    <div className="class__container">
      <div className="subject__img">
        <h5>Bangla Img</h5>
      </div>
      <div className="class__detail">
        <div>
          <h5>Class : Class one</h5>
          <h5>Subject : Bangla</h5>
          <h5>TSC class content 2022</h5>
        </div>
        <div className="books__chapter">
          <div className="chapter">
            <img src={pdfIcon} alt="pdf icon" />
            <h6>
              Book <br /> NCTB Bangla
            </h6>
            <div className="download__icon">
              <img src={downloadIcon} alt="download icon" />
            </div>
          </div>
          <div className="chapter">
            <img src={chapterIcon} alt="chapter icon" />
            <h6>
              Book <br /> NCTB Bangla
            </h6>
            <div className="download__icon">
              <h3>10</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
