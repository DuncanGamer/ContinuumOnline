
const isLogged = (req, res, next) => {
  let logged = true;
  if (logged) {
    console.log("You are logged");
    next();
  } else {
    res.send("You are not logged");
    res.json({ message: "You are not logged" });
  }
};

exports.isLogged = isLogged;