const express = require("express");
const app = express();
const port = 19205;

app.use(express.json());

app.post("/", (req, res) => {
    try {
        console.log(req.body);
        // const {
        //     location: {
        //         coords: { latitude, longitude, heading, speed, altitude },
        //     },
        // } = req.body;

        // console.log({
        //     latitude,
        //     longitude,
        //     heading,
        //     speed,
        //     altitude,
        // });
        res.sendStatus(201);
    } catch (ex) {
        console.log("failed", ex);
        res.sendStatus(200);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
