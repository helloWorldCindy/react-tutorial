import React, { useState }  from 'react';
import '../index.css';

function Name(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let fullName = firstName + " " + lastName;
  return (
    <div className="name">
      <div>
        FirstName: <input onChange={(e)=>setFirstName(e.target.value)}/>
      </div>
      <div>
        LastName: <input onChange={(e)=>setLastName(e.target.value)}/>
      </div>
      <div>
        FullName: {fullName}
      </div>
    </div>
  );
}
  export default Name;