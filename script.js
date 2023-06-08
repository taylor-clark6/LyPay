function handleCredentialResponse(response) {
    const credential = response.credential;
    const id_token = credential.id_token;
  
    const profile = credential.profile;
    const userId = profile.id;
    const userName = profile.name;
  
    document.body.innerHTML = `
      <h2>Welcome, ${userName}!</h2>
      <p>Your Google ID: ${userId}</p>
    `;
  }
