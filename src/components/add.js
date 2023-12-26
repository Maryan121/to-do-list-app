import React, { useRef, useState } from 'react'
import {FaTimes}  from 'react-icons/fa';

export default function Add(props) {
    const [addedTotheListMessage,setAddedTotheListMessage] = useState('');
    const inputRef= useRef();
    function addLists(e){
        e.preventDefault();
        if(inputRef.current.value == ''){
            setAddedTotheListMessage('please type something before clicking the Add button');
            return;
        }
        
        setAddedTotheListMessage('Added to the list');

        setTimeout(()=>{
            setAddedTotheListMessage('');
        },3000);
        // setAddedMessage('added new message here :) ')
        // props.onAdd(addedMessage)
        const theMessage = props.setAddedMessage(prev=>[...prev, inputRef.current.value]);
        
        console.log(addedTotheListMessage);

    }
  return (
    // <div className='addMainCont'>
        <div className = {`addCont ${props.show == false ? 'hideAddComponent' : 'showAddComponent'}`}>
            <form className='form'>
                <FaTimes className='closeAddComponent' onClick={()=>{props.setShowAddCom(false)}}/>
                <input style={{border: addedTotheListMessage ===  'please type something before clicking the Add button'? 'solid 2px red' : 'none'}} ref={inputRef} className='addInput' type='text' name='addList' placeholder='add a list..'/>
                {/* <textarea></textarea> */}
                <button type='submit' className='addBtn' onClick={addLists}>add</button>

            </form>
            <p  style={{color: 'white',margin: '2rem 0',fontFamily: 'monospace',textTransform: 'capitalize',textAlign: 'center',padding: '1rem',transition: '2s ease-in-out'}} id={addedTotheListMessage == 'please add something before clicking the Add button' ? 'redMessage' : ''}>{addedTotheListMessage}</p>
            {/* <p  style={{color: addedTotheListMessage === 'please add something before clicking the Add button' ? 'blue' : 'white',margin: '2rem 0',textTransform: 'capitalize',textAlign: 'center',padding: '1rem',transition: '1s ease-out'}}>{addedTotheListMessage}</p> */}
            {console.log(addedTotheListMessage)}

        </div>
    
    // </div>
  )
}
