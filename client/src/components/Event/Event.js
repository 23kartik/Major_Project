import React, { useEffect, useState, useMemo } from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import event from "../../images/event.png";
import amazon from "../../images/amazon.png";
import cf from "../../images/cf.webp";
import cs from "../../images/cs.png";
import useStyles from "./styles";
import lt from "../../images/leetcode.jpeg";
import Footer from  "../Footer/Footer.js"

const Event = () => {
  const [activeChild, setActiveChild] = useState(0);

  const classes = useStyles();

  const items = [
    {
      name: "LeetCode Contest",
      description: "Improve your programming skills",
      image: { cf },
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: { cs },
    },
    {
      name: "Random Name #3",
      description: "dasdassa",
      image: { amazon },
    },
  ];
  return (
    <div>
      <div>
        <Container maxWidth="lg" className={classes.container}>
          <h1 align="center" style={{ color: "white" }}>
            {" "}
            TRENDING EVENTS
          </h1>
          <Carousel index={activeChild} autoPlay={true} navButtonsAlwaysVisible>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg"
        alt="First slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.atcoder.jp/zone2021/7b005dd8b143aec06f75077c226ff376.png"
        alt="Second slide"
        height="600px"
      />


    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.codechef.com/download/small-banner/CHIL2020/1596948867.jpg"
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://hrcdn.net/s3_pub/istreet-assets/-Nl0DJkFlHJFO3Rl-FuwOQ/Rd%2002-26918_HackerRank%20Code-A-Thon_Twitter_1024x512.jpg"
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.leetcode.com/static_assets/marketing/%E5%B9%BF%E5%91%8A_Banner.png"
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pbs.twimg.com/media/FGw88HCVQAQpnxt.png"
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pbs.twimg.com/media/FKUoi_VUUAMKBcv.png"
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lt}
        alt="Third slide"
        height="600px"
      />

    </Carousel.Item>
  </Carousel> 
        </Container>     
        {/* <div style={{ marginTop: "100px" }}>
          <Link to="/home">
            <EventNoteOutlinedIcon
              color="primary"
              style={{ fontSize: "100px", color: "white", marginLeft: "20%" }}
            />
          </Link>
          <Link to="/about">
            <HelpOutlineOutlinedIcon
              color="primary"
              style={{ fontSize: "100px", color: "white", marginLeft: "20%" }}
            />
          </Link>
          <Link to="/contact">
            <PhoneIcon
              color="primary"
              style={{ fontSize: "100px", color: "white", marginLeft: "20%" }}
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Event;
