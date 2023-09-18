import { Link } from "react-router-dom";


const HeaderLeft = () => {

  return (
    <div className="headerLeft d-flex flex-column ps-2 gap-2">
      <ul className="headerLeft__menu d-flex flex-column gap-1">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../svg/home-icon.svg" alt="icon" />
            Home
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/location-icon.svg" alt="icon" />
            Explore
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/shorts-icon.svg" alt="icon" />
            Shorts
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/subcribtions-icon.svg" alt="icon" />
            Subscriptions
          </Link>
        </li>
      </ul>
      <hr className="headerLeft__separator" />
      <ul className="headerLeft__menu d-flex flex-column gap-1">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/library-icon.svg" alt="icon" />
            Library
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/history-icon.svg" alt="icon" />
            History
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/your-video-icon.svg" alt="icon" />
            Your videos
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/watch-later-icon.svg" alt="icon" />
            Watch later
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/svg/pop-icon.svg" alt="icon" />
            Pop
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            Show more
          </Link>
        </li>
      </ul>
      <hr className="headerLeft__separator" />
      <p className="headerLeft__titles ps-3">SUBSCRIPTIONS</p>
      <ul className="headerLeft__menu d-flex flex-column gap-1">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/png/fc.png" alt="icon" />
            FC Barcelona
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/png/ted.svg" alt="icon" />
            TED
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../../../public/png/fifa.svg" alt="icon" />
            FIFA
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLeft;