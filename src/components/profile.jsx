import React, { useState } from "react";
import { PROFILE_URL } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    console.log("Fething profile details");
    const fetchProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        console.log("tok ", token);
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(PROFILE_URL, header);
        console.log("Profile Response ", JSON.stringify(response?.data));
        setProfile(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []); // Empty dependency array means the effect runs only once after initial render
  return (
    <>
      <h2>User Profile Card</h2>

      <div className="card">
        <img
          src={profile?.image}
          style={{ display: "block", margin: "0 auto", width: "200px" }}
        />
        <h1>{profile?.username}</h1>
        <p className="title">
          {profile?.firstName}, {profile?.lastName}
        </p>
        <p className="title">{profile?.email}</p>

        <div>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </>
  );
};

export default Profile;
