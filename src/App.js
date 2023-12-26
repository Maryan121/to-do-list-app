import './App.css';
import './css/addList.css';
import Header from './components/header';
import Lists from './components/lists';
import Add from './components/add';
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react';

function App() {
  const [showAddCom,setShowAddCom] = useState(false);
  const [addedMessage,setAddedMessage] = useState([]);

  function handleMessage(message){
    setAddedMessage(message)

    

    
  }
  let newListWasAdded =(addedMessage == '' ? null : <Lists addedMessage = {addedMessage} setAddedMessage = {setAddedMessage}/>) 
  
  function showTheAddComponentFunc(){
    setShowAddCom(!showAddCom);
    // console.log(showAddCom);
  }
  return (
    <div className="App">
      <Header />
      {/* <Lists  addedMessage = {addedMessage} /> */}
      {newListWasAdded}
      {/* <Add /> */}
      {showAddCom && <Add show = {showAddCom} setShowAddCom ={setShowAddCom} onAdd = {handleMessage} addedMessage = {addedMessage} setAddedMessage = {setAddedMessage}/>}
      
      <FaPlus className='plusIcon' onClick={showTheAddComponentFunc}/>

    </div>
  );
}

export default App;
