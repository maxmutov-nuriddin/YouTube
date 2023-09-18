import { useContext } from "react"
import { FetchContext } from "../../context/Data";

import './Card.css'
import CardPage from "../cardpage/CardPage";

const Card = () => {
  const { data } = useContext(FetchContext)



  return (
    <section className="cards">
      <div className="cards__list ">
        {
          data.map((fetch, index) => (
            <CardPage fetch={fetch} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Card