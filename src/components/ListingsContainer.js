import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listingData.map((listing) => 
        <ListingCard key={listingData.indexOf(listing)} listingInfo={listing} handleDelete={handleDelete}/>
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
