import { Link } from "react-router-dom"

import { useContext } from "react";
import { AppContext } from "../../context/Context";

import './Header.css'

const Header = () => {
  const { values, setValues } = useContext(AppContext);

  const handleClick = () => {
    if (values == true) {
      setValues(false)
    }else {
      setValues(true)
    }
  }

  return (
    <header className="header py-1 px-lg-4 px-md-3 px-0 position-fixed start-0 end-0">
      <nav className="header__nav d-flex justify-content-between align-items-center">
        <ul className="header__menu d-flex align-items-center gap-2">
          <li className="header__menu-item">
            <button className="header__button" onClick={handleClick}>
              <img src="../../../public/svg/burger-btn.svg" alt="burger btn" />
            </button>
          </li>
          <li className="header__menu-item">
            <Link className="header__logo-link" to="/">
              <img src="../../../public/svg/YouTube-logo.svg" alt="YouTube logo" />
            </Link>
          </li>
        </ul>
        <ul className="header__menu d-flex align-items-center">
          <li className="header__menu-item menu-item menu-item-input">
            <input className="header__search-input" type="text" placeholder="Search" />
          </li>
          <li className="header__menu-item menu-item menu-item-loop">
            <button className="header__button button__loop">
              <img src="../../../public/svg/loop.svg" alt="loop" />
            </button>
          </li>
          <li className="header__menu-item header__menu-voice ms-2">
            <button className="header__button button__voice">
              <img src="../../../public/svg/voice.svg" alt="voice" />
            </button>
          </li>
        </ul>
        <ul className="header__menu d-flex align-items-center gap-4">
          <li className="header__menu-item header__menu-video">
            <Link className="header__link" to="/">
              <img src="../../../public/svg/create-video.svg" alt="create video" />
            </Link>
          </li>
          <li className="header__menu-item header__menu-message">
            <Link className="header__link" to="/">
              <img src="../../../public/svg/message.svg" alt="message" />
            </Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__link" to="/">
              <img src="../../../public/png/girl-face.png" alt="your img" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


// import { Link } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AppContext } from "../../context/Context";
// import { FetchContext } from "../../context/Data";

// import './Header.css';

// const Header = () => {
//   const { values, setValues } = useContext(AppContext);
//   const { data } = useContext(FetchContext);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleClick = () => {
//     if (values) {
//       setValues(false);
//     } else {
//       setValues(true);
//     }
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const filteredData = data.filter((value) => {
//       const videoTitle = value.video.title.toLowerCase();
//       const authorTitle = value.video.author.title.toLowerCase();
//       const query = searchQuery.toLowerCase();
//       return videoTitle.includes(query) || authorTitle.includes(query);
//     });

//     console.log(filteredData);
//   };

//   return (
//     <header className="header py-1 px-4 position-fixed start-0 end-0">
//       <nav className="header__nav d-flex justify-content-between align-items-center">
//         <ul className="header__menu d-flex align-items-center gap-4">
//           <li className="header__menu-item">
//             <button className="header__button" onClick={handleClick}>
//               <img src="../../../public/svg/burger-btn.svg" alt="burger btn" />
//             </button>
//           </li>
//           <li className="header__menu-item">
//             <Link className="header__logo-link" to="/">
//               <img src="../../../public/svg/YouTube-logo.svg" alt="YouTube logo" />
//             </Link>
//           </li>
//         </ul>
//         <ul className="header__menu d-flex align-items-center">
//           <li className="header__menu-item menu-item menu-item-input">
//             <form onSubmit={handleSearchSubmit}>
//               <input
//                 className="header__search-input"
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={handleSearchInputChange}
//               />
//             </form>
//           </li>
//           <li className="header__menu-item menu-item menu-item-loop">
//             <button className="header__button button__loop">
//               <img src="../../../public/svg/loop.svg" alt="loop" />
//             </button>
//           </li>
//           <li className="header__menu-item ms-2">
//             <button className="header__button button__voice">
//               <img src="../../../public/svg/voice.svg" alt="voice" />
//             </button>
//           </li>
//         </ul>
//         <ul className="header__menu d-flex align-items-center gap-4">
//           <li className="header__menu-item">
//             <Link className="header__link" to="/">
//               <img src="../../../public/svg/create-video.svg" alt="create video" />
//             </Link>
//           </li>
//           <li className="header__menu-item">
//             <Link className="header__link" to="/">
//               <img src="../../../public/svg/message.svg" alt="message" />
//             </Link>
//           </li>
//           <li className="header__menu-item">
//             <Link className="header__link" to="/">
//               <img src="../../../public/png/girl-face.png" alt="your img" />
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;