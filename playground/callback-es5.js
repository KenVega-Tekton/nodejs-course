let getUser = function(id, callback) {
  let user = {
    id: id,
    name: "Vikram"
  };

  callback(user);
};

getUser(5, function(userObject) {
  console.log(userObject);
});
