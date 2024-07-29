import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then((data) => {
      const updatedData = data.map((item) => ({
        ...item, 
        isFavorite: item.isFavorite || false,
      }))
        setListings(updatedData)
    })
    .catch((error) => console.error(error));
  }, [])

  const toggleFavorite = (id) => {
    setListings((prevListings) => 
    prevListings.map((listing) => 
    listing.id === id 
  ? {...listing, isFavorite: !listing.isFavorite }
  : listing
))
  }

const deleteListing = (id) => {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
  .then((r) => {
    if (r.ok) {
      setListings((prevListings) => 
      prevListings.filter((listing) => listing.id !== id))
    } else {
      console.error("failed to delete listing.")
    }
  })
  .catch((error) => console.error(error))
}

const handleSearch = (term) => {
  setSearchTerm(term)
}

const filteredListings = listings.filter((listing) => 
  listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch = {handleSearch} />
      <ListingsContainer 
          listings = {filteredListings} 
          onToggleFavorite={toggleFavorite}
          onDeleteListing = {deleteListing} />
    </div>
  );
}

export default App;
