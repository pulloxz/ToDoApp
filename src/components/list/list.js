import React, { useState } from 'react';
import './list.styles.css';
import close from './../../assets/closebtn.svg'

const ListComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const closeicon = <img src={close} alt='closeicon' style={{width:'20px',height:'auto'}}></img>

  return (
    <div className='todo-container'>
      <h1 className='hometitle'>Simple ToDo App</h1>
      <p className='homesubtitle'>This todo app for test design.</p>
      <div className='input-container'>
        <input
          placeholder='Write Text here ...'
          className='todoinput'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='add-button' onClick={addTask}>
          <i className="fas fa-plus" style={{ fontSize: '10px' }}></i> Add New
        </button>
      </div>
      <hr className='solid' style={{ opacity: '10%' }}></hr>
      <div className='task-list'>
        {tasks.map((task, index) => (
          <div className='task-item' key={index}>
            <span>{task}</span>
            <button className='remove-button' onClick={() => removeTask(index)}>
                {closeicon}
            </button>
          </div>
        ))}
      </div>
      <p className='total-list'>Total List: <span className='task-count'>{tasks.length}</span></p>
    </div>
  );
};

export default ListComponent;
