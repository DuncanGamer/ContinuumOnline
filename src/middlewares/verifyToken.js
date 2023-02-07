const verifyToken = (req, res, next) => {
    console.log("Verifying token");
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        console.log("Token verified");
    } else {
        console.log("Token not verified");
        res.sendStatus(403);

    }

    next();
};

exports.verifyToken = verifyToken;
