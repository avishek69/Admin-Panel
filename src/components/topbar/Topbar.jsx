import { Language, NotificationsOutlined, Settings } from "@material-ui/icons";
import React from "react";
import   './topbar.css'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarleft">
            <span className="logo">AviAdmin</span>
        </div>
        <div className="topbarRight">
            <div className="topbarIconContainer">
                <NotificationsOutlined/>
                <span className="topbarIconsBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
                <span className="topbarIconsBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
                
              
            </div>
            <img src="https://cdn.pixabay.com/photo/2021/12/20/17/19/cat-6883552_960_720.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
