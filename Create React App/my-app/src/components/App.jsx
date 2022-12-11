import { Route, Routes } from 'react-router-dom'
import Main from "./Main";
import ListPage from './List';
import { useState } from 'react';
import Header from './Headers';

function App() {
  const pageIDs = {
    "main": 0,
    "list": 1,
  }
  const [pageID, setPageID] = useState(pageIDs.main);

  return (<>
    <Header pageIDs={pageIDs} pageID={pageID}/>
    <Routes>
      <Route path='/list' element={<ListPage pageIDs={pageIDs} setPageID={setPageID}/>} />
      <Route path="*" element={<Main pageIDs={pageIDs} setPageID={setPageID}/>} />
    </Routes>
  </>);
}

export default App;
