function validatePassword(password) {
    if (!/[A-Z]/.test(password)) {
      return false;
    } else if (!/[a-z]/.test(password)) {
      return false;
    } else if (!/[0-9]/.test(password)) {
      return false;
    } else if (!/[!@#$%^&*()_+\-]/.test(password)) {
      // we can include = but after backslash only otherwise 
      // it will include range like - will also include range.
      // So \ is used to escape characters and turn them into regular character.
      return false;
    }
    return true;
  }
  module.exports={validatePassword}