/*import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    photo: null, // Pour stocker le fichier photo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('userName', formData.userName);
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('password', formData.password);
    formDataToSubmit.append('photo', formData.photo);

    try {
      const response = await axios.post(`http://localhost:8080/users/new`, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Redirigez l'utilisateur ou effectuez d'autres actions en cas de succès.
    } catch (error) {
      console.error(error.response.data);
      // Affichez un message d'erreur à l'utilisateur en cas d'échec.
    }
  };

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Inscription</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Nom de famille</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
             {/*   <div className="form-group">
                  <label htmlFor="photo">Photo de profil</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    required
  />
                </div>*/

                /*<div>
                <button type="submit" className="btn btn-primary btn-block">
                  S'inscrire
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}*/

/*export default RegisterForm;*/
