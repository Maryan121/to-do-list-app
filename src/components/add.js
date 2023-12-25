import React, { useRef, useState } from 'react'

export default function Add(props) {
    const [addedMessage,setAddedMessage] = useState('');
    const inputRef= useRef();
    function addLists(e){
        e.preventDefault();
        
        setAddedMessage('Added to the list');

        setTimeout(()=>{
            setAddedMessage('');
        },3000);
        // setAddedMessage('added new message here :) ')
        props.onAdd(addedMessage)

        console.log(inputRef.current.value);

    }
  return (
    // <div className='addMainCont'>
        <div className = {`addCont ${props.show == false ? 'hideAddComponent' : 'showAddComponent'}`}>
            <form className='form'>
                <input ref={inputRef} className='addInput' type='text' name='addList' placeholder='add a list..'/>
                <button type='submit' className='addBtn' onClick={addLists}>add</button>
            </form>
            <p style={{color: 'white',margin: '2rem 0',textTransform: 'capitalize',textAlign: 'center',padding: '1rem',transition: '2s ease-in-out'}}>{addedMessage}</p>
            

        </div>
    
    // </div>
  )
}
