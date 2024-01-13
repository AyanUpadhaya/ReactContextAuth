// Example login function
const handleSignIn = async () => {
    try {
      const response = await fetch('url');
      const token = response.data.token;
      login(token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }