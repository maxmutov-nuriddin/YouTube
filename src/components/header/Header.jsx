/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/Context';

import './Header.css';
import { SearchContexts } from '../../context/Search';

const Header = () => {
  const { values, setValues } = useContext(AppContext);
  const { setSearchContext } = useContext(SearchContexts)
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [searchValue, setSearchValue] = useState('');


  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      } else {
        interimTranscript += transcript;
      }
    }

    setTranscript(finalTranscript);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  useEffect(() => {
    setSearchValue(transcript);
  }, [transcript]);

  const handleClick = () => {
    if (values === true) {
      setValues(false);
    } else {
      setValues(true);
    }
  };

  const handleVoiceButtonClick = () => {
    if (isListening) {
      recognition.abort();
    } else {
      recognition.start();
    }
  };


  const handleInputChange = (event) => {
    setSearchContext(searchValue)
    setSearchValue(event.target.value);
  };

  return (
    <header className="header py-1 px-lg-4 px-md-3 px-0 position-fixed start-0 end-0">
      <nav className="header__nav d-flex justify-content-between align-items-center">
        <ul className="header__menu d-flex align-items-center gap-2">
          <li className="header__menu-item">
            <button className="header__button" onClick={handleClick}>
              <img src="../svg/burger-btn.svg" alt="" />
            </button>
          </li>
          <li className="header__menu-item">
            <Link className="header__logo-link" to="/">
              <img src="../svg/YouTube-logo.svg" alt="" />
            </Link>
          </li>
        </ul>
        <ul className="header__menu d-flex align-items-center">
          <li className="header__menu-item menu-item menu-item-input">
            <input
              className="header__search-input"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
          </li>
          <li className="header__menu-item menu-item menu-item-loop">
            <button className="header__button button__loop">
              <img src="../svg/loop.svg" alt="" />
            </button>
          </li>
          <li className="header__menu-item header__menu-voice ms-2">
            <button className="header__button button__voice" onClick={handleVoiceButtonClick}>
              <img src="../svg/voice.svg" alt="" />
            </button>
          </li>
        </ul>
        <ul className="header__menu d-flex align-items-center gap-4">
          <li className="header__menu-item header__menu-video">
            <Link className="header__link" to="/">
              <img src="../svg/your-video-icon.svg" alt="" />
            </Link>
          </li>
          <li className="header__menu-item header__menu-message">
            <Link className="header__link" to="https://www.youtube.com/account_notifications">
              <img src="../svg/message.svg" alt="" />
            </Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__link" to="https://myaccount.google.com/u/0/">
              <img src="../png/girl-face.png" alt="your img" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;