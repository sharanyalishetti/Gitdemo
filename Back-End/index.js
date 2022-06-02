import express from "express";
import "dotenv/config";

const app = express();


//connect to the database and start the app on the port
connectToDB(process.env.DB_CONNECTION_URL);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
