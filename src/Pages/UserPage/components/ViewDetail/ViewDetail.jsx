import React, { useEffect } from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

export default function ViewDetail() {

  return (
    <div>
      <SongDetail />
      <div>
        <SongList />
      </div>
    </div>
  );
}