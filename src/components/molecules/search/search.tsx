"use client";

import Button from "@/atoms/button";

export default function Search() {
  function handleOnClick() {
    console.log("Search");
  }

  return (
    <div>
      <Button onClick={handleOnClick} variant="contained">
        Search
      </Button>
    </div>
  );
}
