import { useContext, useEffect, useState } from "react"
import { FetchContext } from "../../context/Data";

import './Card.css'
import CardPage from "../cardpage/CardPage";
import { SearchContexts } from "../../context/Search";

const Card = () => {
  const { data } = useContext(FetchContext)
  const { searchContext } = useContext(SearchContexts)
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter((item) => {
      if (searchContext === true) {
        return item;
      } else if (typeof searchContext === 'string' && item.video.title.toLowerCase().includes(searchContext.toLowerCase())) {
        return item;
      }
    });
    setSearchResults(results);
  }, [data, searchContext]);

  return (
    <section className="cards">
      <div className="cards__list ">
        {
          searchResults.map((fetch, index) => (
            <CardPage fetch={fetch} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Card