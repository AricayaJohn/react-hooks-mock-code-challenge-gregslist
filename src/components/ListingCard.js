import React from "react";

function ListingCard({ listing, onToggleFavorite, onDeleteListing }) {

  const handleFavoriteClick = () => {
    onToggleFavorite(listing.id);
  }
  const handleDeleteClick = () => {
    onDeleteListing(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
          <button 
          className=
          {`emoji-button favorite ${listing.isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
          >
            {listing.isFavorite ? "★" : "☆"}
          </button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
