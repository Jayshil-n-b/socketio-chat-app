const users = require("../users");

const removeUser = ({ id }) => {
  const index = users.findIndex((user) => user.id === id);
  if (index != -1) return users.splice(index, 1)[0];
};

module.exports = removeUser;
