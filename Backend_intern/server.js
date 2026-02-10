import { query } from "./database/db.js";
import express from "express";
import userRoutes from "./routes/user.routes.js"


const app = express();

app.use(express.json());


// Health check
 app.get("/health", (req, res) => {
   res.json({ status: "OK" });
});


//for routes
app.use("/",userRoutes)


// For Db and PORT
const startServer = async () => {
  try {
    const result = await query("SELECT version()");
    console.log(result.rows[0].version);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`);
    });

  } catch (err) {
    console.log("server error", err);
  }
};

startServer();
