import React, { useState } from 'react';

function RegistrationForm() {
    const [user, setUser] = useState({ username: '', password: '', email: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/users/new', {
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
        <form onSubmit={handleSubmit}>
            <label>
                Nom d'utilisateur:
                <input type="text" name="username" value={user.username} onChange={handleChange} />
            </label>
            <br />
            <label>
                Mot de passe:
                <input type="password" name="password" value={user.password} onChange={handleChange} />
            </label>
            <br />
            <label>
                Adresse e-mail:
                <input type="email" name="email" value={user.email} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default RegistrationForm;
