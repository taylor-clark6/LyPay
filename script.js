function handleCredentialResponse(response) {
    const credential = response.credential;
    const id_token = credential.id_token;
  
    // Use the id_token or credential for further processing
    // e.g., send it to a server for authentication
  
    // For this example, we'll simply display the user's ID and name
    const profile = credential.profile;
    const userId = profile.id;
    const userName = profile.name;
  
    document.body.innerHTML = `
      <h2>Welcome, ${userName}!</h2>
      <p>Your Google ID: ${userId}</p>
    `;
  }
