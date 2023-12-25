import './App.css';
import './css/addList.css';
import Header from './components/header';
import Lists from './components/lists';
import Add from './components/add';
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react';

function App() {
  const [showAddCom,setShowAddCom] = useState(false);
  const [addedMessage,setAddedMessage] = useState('');

  function handleMessage(message){
    setAddedMessage(message)
  }
  function showTheAddComponentFunc(){
    setShowAddCom(!showAddCom);
    // console.log(showAddCom);
  }
  return (
    <div className="App">
      <Header />
      <Lists  addedMessage = {addedMessage}/>
      {/* <Add /> */}
      {showAddCom && <Add show = {showAddCom} onAdd = {handleMessage}/>}
      <FaPlus className='plusIcon' onClick={showTheAddComponentFunc}/>

    </div>
  );
}

export default App;
