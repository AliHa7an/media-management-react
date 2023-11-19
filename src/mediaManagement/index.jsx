import { React, useState } from "react";
import "./styles.css";
import { Box, Button, FormControl, Slider } from "@mui/material";

const Management = () => {
  const allKeys = {
    fun: "fun",
    news: "news",
    sports: "sports",
    investments: "investments",
    fact: "fact",
    // ... Add more keys as needed
  };

  const [selectedButton, setSelectedButton] = useState(allKeys.fun);

  const getDropDownOptions = (key) => {
    if (key === allKeys.fun) {
      return [
        "Board games revival",
        "Comedy trends",
        "Amusement parks",
        "Escape rooms",
        "Street performances",
        "Online challenges",
        "Festivals impact",
        "Crafting movement",
        "Social gaming",
        "Virtual reality",
      ];
    }

    if (key === allKeys.news) {
      return [
        "Citizen journalism",
        "Whistleblower influence",
        "Fake news",
        "Print media survival",
        "Social media news",
        "Cybersecurity news",
        "Democratic media",
        "News deserts",
        "News economics",
        "Broadcast evolution",
      ];
    }

    if (key === allKeys.investments) {
      return [
        "Robo-advising",
        " Geopolitical impacts",
        "Index funds",
        "Real estate trends",
        "Startup investing",
        "Social trading",
        "Tax strategies",
        "Emerging markets",
        "Financial literacy",
        "Pension futures",
      ];
    }
    if (key === allKeys.fact) {
      return [
        "Animal oddities",
        "Everyday science",
        "Historical obscurities",
        "Science myths",
        "Human body facts",
        "Oceanic discoveries",
        "Space exploration",
        "Ancient tech",
        "World laws",
        "Bizarre news",
      ];
    }

    if (key === allKeys.education) {
      return [
        "Gamified learning",
        "Education systems",
        "Bilingual benefits",
        "Standardized testing",
        "Arts in schools",
        "Tech bootcamps",
        "Homeschooling dynamics",
        "Mentorship importance",
        "Educational equity",
        "Mobile learning",
      ];
    }

    if (key === allKeys.sports) {
      return [
        "Sports medicine",
        "Team sociology",
        "Olympic economics",
        "Gender parity",
        "Fandom psychology",
        "Extreme sports",
        "Sports business",
        "Youth athletics",
        "Data analytics",
        "Doping ethics",
      ];
    }
  };

  const handleButtonClick = (key) => {
    setSelectedButton(key);
  };

  return (
    <div className="content-sec-area">
      <h1>Content Type</h1>
      <h4>Choose a content type that best fits your needs</h4>
      <div className="question-select-area">
        <h2 className="heading">What type of content are you creating?</h2>
        <div className="content-btn-list">
          <Button
            variant="outlined"
            className={`content-btn ${
              selectedButton === allKeys.fun ? "active" : ""
            }`}
            onClick={() => handleButtonClick(allKeys.fun)}
          >
            Fun
          </Button>
          <Button
            variant="outlined"
            className={`content-btn ${
              selectedButton === allKeys.investments ? "active" : ""
            }`}
            onClick={() => setSelectedButton(allKeys.investments)}
          >
            Investments
          </Button>
          <Button
            variant="outlined"
            className={`content-btn ${
              selectedButton === allKeys.fact ? "active" : ""
            }`}
            onClick={() => setSelectedButton(allKeys.fact)}
          >
            Facts
          </Button>
          <Button
            variant="outlined"
            className={`content-btn ${
              selectedButton === allKeys.sports ? "active" : ""
            }`}
            onClick={() => setSelectedButton(allKeys.sports)}
          >
            Sports
          </Button>
          <Button
            variant="outlined"
            className={`content-btn ${
              selectedButton === allKeys.news ? "active" : ""
            }`}
            onClick={() => setSelectedButton(allKeys.news)}
          >
            News
          </Button>
        </div>
        <h2 className="heading">
          Which type of Sports content do you want to create?
        </h2>
        {/* {selectedButton && (
        <select>
          {getDropDownOptions(selectedButton).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )} */}

        <FormControl className="form-question">
          {selectedButton && (
            <select id="select-question" className="selct-question">
              {getDropDownOptions(selectedButton).map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </FormControl>

        <h2 className="heading">Set the number of words for output text</h2>
        <Box className="slider-num" sx={{ width: 300 }}>
          <span>100</span>
          <Slider
            size="small"
            defaultValue={700}
            aria-label="Small"
            min={100}
            max={1000}
            valueLabelDisplay="auto"
          />
          <span>1000</span>
        </Box>
      </div>
    </div>
  );
};

export default Management;
