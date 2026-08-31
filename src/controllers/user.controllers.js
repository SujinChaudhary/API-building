import userServices from "../services/user.services.js";

const getUsers = async (request, response) => {
  const users = await userServices.getUsers();

  response.json(JSON.parse(users));
};

//user data dynamically kasari leraune

const getUserById = async (request, response) => {
  const id = request.params.id;
  const user = await userServices.getUserById(id);

  if (!user) {
    return response.send("User Not Found");
  }
  response.json(user);
};

export default { getUsers, getUserById };
