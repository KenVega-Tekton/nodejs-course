let getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Vikram"
  };

  setTimeout(() => {
    callback(user); // aqui recien se llama a la funcion que se define mas abajo
  }, 3000);
};

getUser(5, userObject => {
  console.log(userObject);
});

//---
