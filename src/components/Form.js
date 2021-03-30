import React, {Component} from 'react'

class Form extends Component{
    render(){
        return (
            <div>
                <form>
                <div ><br/> <br/><br/><br/>
                    <label>Name</label><br/>
                    <input  type="text" placeholder="Name" name=""/><br/>
                  </div>   
                   <div >
                    <label>DOB</label><br/>
                    <input  type="date" placeholder="date of birth" name=""/><br/>
                  </div> 
                   <div >
                    <label>Email</label><br/>
                    <input  type="email" placeholder="Email" name=""/><br/>
                  </div> 
                   <div>
                    <label>Password</label><br/>
                    <input  type="password" placeholder="Password" name=""/><br/>
                  </div>    <br/><br/>
                  <div >
                    <label><input type="radio" name="n1"/>Option 1</label><br/>
                  </div>
                  <div >
                    <label><input type="radio" disabled name="n1"/ >Option 2</label><br/>
                  </div>
                  <br/><br/>
                  <select ><option>Maths</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>Computer Science</option>

                  </select><br/><br/><br/><br/>
                  <button >Submit</button>
                  <button >Reset</button>
             </form>
             </div>
        )
    }
}
export default Form;