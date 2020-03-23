import React from "react";
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from "antd";
import { useEffect } from "react";
import axios from "axios";

const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {
  useEffect(() => {
    axios.get("/api/video/getVideos").then(response => {
      if (response.data.success) {
      } else {
        alert("Failed to get videos");
      }
    });
  }, []);

  return (
    <div
      style={{
        width: "85%",
        margin: "3rem auto"
      }}
    >
      <Title level={2}> Recommended </Title> <hr />
      <div>
        <div style={{ position: "relative" }}>
          <img style={{ width: "100%" }} src />
          <div className="duration">
            <span>minute : second</span>
          </div>
        </div>
        <Meta avatar={<Avatar src />} title />
        <span>Writer name</span>
        <span style={{ marginLeft: "3rem" }}>Views count</span> -{" "}
        <span>date</span>
      </div>
    </div>
  );
}

export default LandingPage;
