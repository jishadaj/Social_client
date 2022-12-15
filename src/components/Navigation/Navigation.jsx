import React from "react";
import "./Navigation.scss";
import { useSelector } from "react-redux";

import Home from "../../img/home.png";
import followers from "../../img/follower.png";
import Comment from "../../img/comment.png";
import profile from "../../img/profile.webp";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    return (
        <div className="navIcons navigation">
            <Link to="../home">
                <img src={Home} alt="" />
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
                to={`/profile/${user._id}`}
            >
                <img src={profile} alt="" />
            </Link>
            <Link to="/followers">
                <img src={followers} alt="" />
            </Link>
            <Link to="../chat">
                <img src={Comment} alt="" />
            </Link>
        </div>
    );
};

export default Navigation;