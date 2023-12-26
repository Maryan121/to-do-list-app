import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCircleDot } from 'react-icons/fa6';

export default function Lists(props) {
  const [checkedItems, setCheckedItems] = useState(props.addedMessage.map(() => false));

  function clearAllLists() {
    props.setAddedMessage([]);
    setCheckedItems(props.addedMessage.map(() => false)); // Reset all checkboxes
  }

  function deleteList(index) {
    const updatedList = [...props.addedMessage];
    updatedList.splice(index, 1);
    props.setAddedMessage(updatedList);

    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems.splice(index, 1);
    setCheckedItems(updatedCheckedItems);
  }

  const currentDate = new Date();

  function handleChecked(index) {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  }

  return (
    <div className='listsContainer' style={props.addedMessage.length === 0 ? { display: 'none' } : { display: 'block' }}>
      <div className='firstsec'>
        <p className='clearAll' onClick={clearAllLists}>
          clear all
        </p>
      </div>
      <div className='lists'>
        <ol>
          {props.addedMessage.map((newList, index) => (
            <li key={index} className='listItem'>
              <strong style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                  type='checkbox'
                  style={{ marginRight: '.9rem', cursor: 'pointer' }}
                  checked={checkedItems[index]}
                  onChange={() => handleChecked(index)}
                />
                {newList}
              </strong>
              <span style={{ fontSize: '.8rem', letterSpacing: '.9px', fontFamily: 'monospace', color: 'hwb(240 21% 32%)' }}>
                {currentDate.toLocaleDateString()}
              </span>
              <AiOutlineClose className='listCloseIcon' onClick={() => deleteList(index)} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
