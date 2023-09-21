import React from 'react';


function Login() {
   



  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Connexion</h2>
              <form >
                <div className="form-group">
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <div className="input-group">
                   
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                  
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <div className="input-group">
                 
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                   
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Connexion
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


export default Login;