import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Asidebar.css";
import { RxCross1 } from "react-icons/rx";

export default function Asidebar({ visibility, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = location.pathname.includes("/hi/") ? "hi" : "en";
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [cate, setCate] = useState("");

  if (!visibility) return null;

  const handleLanguageSelect = (language) => {
    navigate(`/${language}/read/${cate}`);
    setSelectedLanguage(language);
  };

  const categories = [
    "india",
    "business",
    "politics",
    "sports",
    "technology",
    "startups",
    "entertainment",
    "hatke",
    "international",
    "automobile",
    "science",
  ];

  return (
    <div className="container">
      <div className="asidebar-div">
        <button className="btn close-btn" onClick={onClose}>
          <RxCross1 />
          Close
        </button>

        <div className="buttons-div">
          <button
            className={`btn language-button btn1 ${
              selectedLanguage === "en" ? "active" : ""
            }`}
            onClick={() => handleLanguageSelect("en")}
          >
            English
          </button>
          <button
            className={`btn language-button btn2 ${
              selectedLanguage === "hi" ? "active" : ""
            }`}
            onClick={() => handleLanguageSelect("hi")}
          >
            हिन्दी
          </button>
        </div>
        <hr />
        <div className="categories">
          Categories
          <ul>
            {categories.map((category, idx) => (
              <Link
                key={category}
                onClick={() => setCate(category)}
                to={`/${lang}/read/${category}`}
              >
                <li>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
