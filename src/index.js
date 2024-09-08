import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
});

connectDB()























/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("Database connected");

    // Handle app errors
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error; // Corrected 'err' to 'error'
    });

    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
})();*/
