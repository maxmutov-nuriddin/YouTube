/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardPage = ({ fetch }) => {



  return (
    <div className="cards__item">
      <Link to={`/video/${fetch.video.videoId}`}>
        <img className="cards__image" src={`${fetch.video.thumbnails[0].url}`} alt="video img" />
        <div className="cards__content p-0 mt-2 d-flex">
          <div>
            <img className="cards__content-img" src={`${fetch.video.thumbnails[0].url}`} alt="" />
          </div>
          <div className="ms-3">
            <h5 className="cards__title">{fetch.video.title}</h5>
            <div className="d-flex justify-content-between">
              <p className="cards__title">{fetch.video.isLiveNow ? 'Live' : 'Not Live'}</p>
              <p className="cards__title">{fetch.video.lengthSeconds} second</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardPage;