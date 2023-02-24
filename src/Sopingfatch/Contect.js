import React from 'react'

function Contect() {
  return (
    <div className='form'>
      <h1>Contect Us</h1>
        <form >
           <input className="input-text" autofocus type="text" id="name" placeholder="Enter your name"/><br/>
    
          <input className="input-text" type="text" id="age" placeholder="Enter your age"/><br/>
    
          <input className="input-text" type="text" id="phone" placeholder="Enter your phone"/><br/>
    
          <input className="input-text" type="text" id="email" placeholder="Enter your email"/><br/>
    
          <label>
          <input className="gender" type="radio" name="gender" value="male"/>Male
          <input className="gender" type="radio" name="gender" value="female"/>Female
          <input className='gender' type="radio" name="gender" value="other"/>Other
          
          </label><br/>
    
          <select name="" id="hometown">
            <option value="" selected disabled>Select Hometown</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Jodhpur">Jodhpur</option>
            <option value="Ajmer">Ajmer</option>
            <option value="Kota">Kota</option>
            <option value="Pilani">Pilani</option>
            <option value="Nagaur">Nagaur</option>
          </select><br/>
          
    
          <button className='contect-btn' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contect