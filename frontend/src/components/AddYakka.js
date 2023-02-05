import React, {useState} from "react";


 function AddYakka(){
 

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender ,setGender] = useState("");


  function sendData(e){
      e.preventDefault();
   
 
  const newYakka = {

    name,
    age,
    gender

  }
     
  console.log(newYakka);
     
  }

    return(
 
        <div className="container">
         
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="name">Yakka Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter Yakka Name" onChange={(e)=>{

      setName(e.target.value);

      }}/>
    </div>

    <div className="form-group col-md-6">
      <label for="age">Yakka Age</label>
      <input type="text" className="form-control" id="age" placeholder="Enter Yakka Age"
      onChange={(e)=>{
        setAge(e.target.value);
      }}/>
    </div>

    <div className="form-group col-md-6">
      <label for="gender">Yakka Gender</label>
      <input type="text" className="form-control" id="gender" placeholder="Enter Yakka Gender" 
      onChange={(e)=>{
        setGender(e.target.value);

      }}/>
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>

    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button onSubmit={sendData()}  type="submit" className="btn btn-primary">Sign in</button>
</form>

</div>
    )
}


export default AddYakka;
