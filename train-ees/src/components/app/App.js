import './App.css';
import { useState } from 'react';
import CreatePage from '../createPage'
import DiscoverPage from '../discoverPage'


function App() {
  const [discoverPage, setDiscoverPage] = useState(true);
  const [createPage, setCreatePage] = useState(false)

  function swapPage(){
    if(discoverPage){
      setDiscoverPage(false)
      setCreatePage(true)
    }else{
      setDiscoverPage(true)
      setCreatePage(false)
    }
  }

  return (
    <div className="App">
      {discoverPage && <DiscoverPage handleClick={swapPage} />}
      {createPage && <CreatePage handleClickSubmit={swapPage} />}
    </div>
  );
}

export default App;
