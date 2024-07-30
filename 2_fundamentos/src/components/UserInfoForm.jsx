import { useState } from 'react';


const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(`${name} ${email}`);

    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <span>Nome digitado: {name}</span>
      </p>

      <p>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <span>Email digitado: {email}</span>
      </p>
      
      <button type="submit">Enviar</button>
    </form>
  )
}

export default UserInfoForm;