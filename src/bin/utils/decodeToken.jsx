import jwt from "jsonwebtoken";
const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, "your-secret-key"); // Replace 'your-secret-key' with your actual secret key
    const userData = {
      email: decodedToken.email,
      // Other user information you want to extract
    };
  } catch (error) {
    console.error("Error verifying token:", error);
  } finally {
    console.log("success");
  }
};
