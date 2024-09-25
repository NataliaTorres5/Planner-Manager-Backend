
function userDTO(user) {
  return {
    "firstName": user.firstName,
    "lastName": user.lastName,
    "email": user.email,
    "role": user.role,
  };
}

export default userDTO