import React, {useState} from "react";

function ListingCard({listingInfo, handleDelete}) {
  const [liked, setLiked] = useState(false)

  function handleliked() {
    setLiked(!liked)
  }

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${listingInfo.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleDelete(listingInfo))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingInfo.image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleliked} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleliked} className="emoji-button favorite">☆</button>
        )}
        <strong>{listingInfo.description}</strong>
        <span> · {listingInfo.location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
