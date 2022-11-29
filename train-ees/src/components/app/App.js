import "./App.css";
import { useState } from "react";
import CreatePage from "../createPage";
import DiscoverPage from "../discoverPage";

function App() {
  const [discoverPage, setDiscoverPage] = useState(true);
  const [createPage, setCreatePage] = useState(false);

  // function called by buttons to swap pages
  function swapPage() {
    setDiscoverPage(!discoverPage);
    setCreatePage(!createPage);
  }

  // just contains the 2 pages and their visibility state
  return (
    <div className="App">
      {discoverPage && <DiscoverPage handleClick={swapPage} />}
      {createPage && <CreatePage handleClickSubmit={swapPage} />}
    </div>
  );
}

export default App;
