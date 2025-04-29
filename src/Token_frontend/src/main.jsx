import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {
  const authClient = await AuthClient.create();

  if(await authClient.isAuthenticated()){
     handleAuthenticated(authClient);
  }else{
    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: () => {
        handleAuthenticated(authClient);
        
      }
      
    });

  }

 
};
async function handleAuthenticated(authClient){
  //const identity = await authClient.getIdentity();
  //const userPrincipal = identity._principal.toString();
  //console.log(userprincipal);
  const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App /*loggedInPrincipal={userPrincipal}*//>);
}

init();