export const validateContactPayload = ({ name, email, message }) => {
  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email address" };
  }

  return { error: null };
};
