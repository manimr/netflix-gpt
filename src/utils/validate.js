export const validate = (email, password, name = null) => {
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isValidPassword =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const isValidName = name !== null ? /^[a-zA-Z ]+$/.test(name) : true;

  if (!isValidEmail) return "Please enter valid email";
  if (!isValidPassword)
    return "Password must contain minimum 8 letters, one uppercase, one lowercase and one special character.";
  if (!isValidName) return "Name should contain only characters.";

  if (isValidEmail && isValidPassword && isValidName) return null;
};
