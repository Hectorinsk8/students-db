import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config()

mongoose.set('debug', true)

mongoose.set("strictQuery", false)

async function connect() {
    try {
        if (mongoose.connection.readyState) {
            console.log("Conexión establecida correctamente".yellow.bold)
            return
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado".green.bold)
    } catch (error) {
        console.log("Error al conectar la base de datos", error.message.red.bold)

    }
}

export default connect