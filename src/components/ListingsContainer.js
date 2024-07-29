import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onToggleFavorite, onDeleteListing }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard 
            key = {listing.id} 
            listing = {listing}
            onToggleFavorite = {onToggleFavorite}
            onDeleteListing = {onDeleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
