const connectDB = async(mongoose) => {
    await mongoose
        .connect("mongodb://localhost:27017/movies")
        .then(() => console.log("Mongodb conencted"))
        .catch((err) => console.log(err));
}
module.exports = connectDB