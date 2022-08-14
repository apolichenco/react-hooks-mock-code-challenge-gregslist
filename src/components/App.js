import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState([])
  const [permanentListingData, setPermanentListingData] = useState()

  function handleListingData(deletedListing) {
    const updatedListings = listingData.filter((listing) => listing.id !== deletedListing.id)
    setListingData(updatedListings)
    setPermanentListingData(updatedListings)
  }

  function handleSearchListings(searchedTerm) {
    if(!searchedTerm) {
      setListingData(permanentListingData)
    }
    else {
      const updatedListing =
        permanentListingData.filter((listing) => {
        const thisListing = listing.description
        return thisListing.toLowerCase().includes(searchedTerm)
        })
      setListingData(updatedListing)
    }
  }

  useEffect (() =>
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => {
      setListingData(data)
      setPermanentListingData(data)
    })
    , []
  )

  return (
    <div className="app">
      <Header onSearch={handleSearchListings}/>
      <ListingsContainer listingData={listingData} handleDelete={handleListingData}/>
    </div>
  );
}

export default App;

