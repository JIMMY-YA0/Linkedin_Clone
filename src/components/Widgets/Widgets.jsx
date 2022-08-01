import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subTitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgetsArticleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Australian property prices tumble", "Top news - 5142 readers")}
      {newsArticle("Tech abuse affects one in two", "9h ago - 1,242 readers")}
      {newsArticle("Exciting new tools for creators", "4d ago - 2,129 readers")}
      {newsArticle("Fitness chain CEO steps down", "3d ago - 597 readers")}
      {newsArticle("Try the rejection therapy challenge", "3d ago - 2,256 readers")}
      {newsArticle("A new way to reprensent careeer breaks on LinkedIn", "8h ago - 8024 readers")}
    </div>
  );
};

export default Widgets;
