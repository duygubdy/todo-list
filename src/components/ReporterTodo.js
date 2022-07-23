import React from 'react'

function Reporter() {
  return (
    
      <div>
      <TextField 
        margin="dense"
        id="name"
        label="Search"
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        fullWidth
        variant="standard"
      ></TextField>
      <br></br>
      <TextField 
        className='todo-inputText'
        name="text"  
        type="text"
        value={inputText}
        placeholder="Add new todo"
        onChange={e => setInputText(e.target.value)}
        id="filled-basic" label="Add a new 'to-do'!" variant="filled"
      ></TextField>

      <Button 
        className='todo-button'
        onClick={submitHandler}
        variant="contained" color="success"
      >Add</Button>

      <input 
        className='todo-inputDate'
        name="date1" 
        type="date" 
        value={value1}
        onChange={e =>setValue1(e.target.value) }
        
      />

      <input 
        className='todo-inputDate'
        name="date2" 
        type="date" 
        value={value2}
        onChange={e => setValue2(e.target.value)}
      />


    </div>
  )
}

export default Reporter
