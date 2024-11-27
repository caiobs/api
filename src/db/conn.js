import mongoose from 'mongoose';

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://brandaoscaio:6RkQkBGHFFYdZc5S@cluster0.gyiwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Database connected!");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

export default main;