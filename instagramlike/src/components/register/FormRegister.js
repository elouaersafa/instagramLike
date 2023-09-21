import React ,{useState }from 'react';
import './Register.css'

function FormRegister() {
    const [user, setUser] = useState({ username: '', password: '', email: '' , firstname:'',lastname:''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('/users/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Inscription réussie.');
                // Vous pouvez rediriger l'utilisateur vers une page de connexion ici.
            } else {
                console.error('Échec de l\'inscription.');
            }
        } catch (error) {
            console.error('Erreur de communication avec le serveur.', error);
        }
    };

    return (
        <div className ="register" >
          <form onSubmit={handleSubmit}>
               <input
      
        type="email"
        placeholder="Email"
        value={user.email} onChange={handleChange}
      />
      <input
     
        type="email"
        placeholder="Username"
        value={user.username} onChange={handleChange}
      />
      <input
       
        type="password"
        placeholder="Password"
        value={user.passeword} onChange={handleChange}
      />
       <input
       
       type="firstname"
       placeholder="firstname"
       value={user.firstname} onChange={handleChange}
     />
      <input
       
       type="lastname"
       placeholder="lastname"
       value={user.lastname} onChange={handleChange}
     />
      <button type="submit">Sign up</button>
    </form>
       </div>
    );
}

export default FormRegister;