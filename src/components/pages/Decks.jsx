import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { FaDrumstickBite } from "react-icons/fa"

export default function Deck({ category, currentUser, users }) {
  const { id } = useParams()

  let deckIdx = category.findIndex((object) => {
    return object._id === id;
  });

  const [editCategory, setEditCategory] = useState()



  const handleEditState = ()=>{
  
   

  }


  let showAllDecks
  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {
      let userIdx = users.findIndex((object) => {
        return object._id === deck.author
      })
{/* <Link  key={`link${i}`} to={`/category/${category._id}`} style={{textDecoration: 'none'}}> */}
      return (
        <>
          <div className="deck-div" key={`category-link${i}`} >
        <Link key={`link-link${i}`} to={`/category/${id}/deck/${deck._id}`} style={{textDecoration: 'none'}}>
            <div key={`deckName-Div-link${i}`}>
            <p key={`deckName-link${i}`} className="category-text">
              {deck.deckName}
            </p>

            <p className="category-text-small">{deck.cards.length < 2 ? <p>{deck.cards.length} Card</p> : <p>{deck.cards.length} Cards</p>} </p>
            <p className="category-text-small">Author: {users[userIdx].name}</p>

            </div>
        </Link>
            {/* <div>
              <form action="">
              <label hidden htmlFor="edit"></label>
              <button onClick={handleEditState}>Edit</button>
              <label hidden htmlFor="delete"></label>
              <button>Delete</button>
              </form>
            </div> */}
          </div>
          {/* {currentUser.id === deck.author ? <EditDeck deck={deck} currentCategory={currentCategory}></EditDeck> : <></>} */}
        </>
      )
    })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{category[deckIdx].name} Decks</h1>
      <div className="category-container">{showAllDecks}</div>
      <form action="">
        
      </form>
    </div>
  )
}