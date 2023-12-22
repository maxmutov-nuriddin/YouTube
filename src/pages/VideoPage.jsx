import { useContext } from "react";

import { useParams } from "react-router-dom";

import { FetchContext } from "../context/Data";

import OnePage from "../components/cardpage/OnePege";


const VideoPage = () => {
  const { id } = useParams();
  const { data } = useContext(FetchContext);

  const filteredData = data.filter((item) => item.video.videoId === id);

  return (
    <section>
      {filteredData.map((fetch, index) => (
        <OnePage fetch={fetch} id={id} key={index} />
      ))}
    </section>
  );
};

export default VideoPage;