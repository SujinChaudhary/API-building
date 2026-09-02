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

const createUser = async (req, res) => {
  try {
    const createdUser = await userServices.createUser();
    res.json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.userId;

  try {
    if (!id) {
      return res.status(400).json({
        error: "User ID is required",
      });
    }

    const deletedUser = await userServices.deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json({
      message: `UserID ${id} deleted successfully`,
    });

  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export default { getUsers, getUserById, createUser,deleteUser };
