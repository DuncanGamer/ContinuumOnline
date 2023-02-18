
// const isLogged = (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   next();
// };



const isLogged = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
};




// const isLogged = (req, res, next) => {
//   let logged = true;
//   if (logged) {
//     console.log("You are logged");
//     next();
//   } else {
//     res.send("You are not logged");
//     res.json({ message: "You are not logged" });
//   }
// };

exports.isLogged = isLogged;