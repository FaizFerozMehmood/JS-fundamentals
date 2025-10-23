import mongoose from "mongoose";

export async function connectDataBase() {
  try {
    const conn = await mongoose.connect(process.env.MONGOBD_URI);
    console.log(`MongoDB CONNECTED!${conn.connection.host}`);
  } catch (error) {
    console.log(` DataBASE DISCONNECTED! ${error.message}`);
  }
}
              