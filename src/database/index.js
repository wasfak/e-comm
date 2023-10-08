import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://hardmodz:W0Lja9Zbkf3yyuui@cluster0.ejrdne4.mongodb.net/";
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("DataBase Is connected!!"))
    .catch((error) => console.log(`getting error from DB ${error.message}`));
};

export default connectToDB;
