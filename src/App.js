import {useState} from 'react';
import Box from './components/Box';
import BoxForm from './components/BoxForm';
import './App.css';

function App() {
  const [ boxList, setBoxList ] = useState([]);
  return (
    <div className="App">
      <BoxForm boxList={boxList} setBoxList={setBoxList}/>
      <Box boxList={boxList}/>
    </div>
  );
}

export default App;
