const mongoose = require("mongoose");

const URI ="mongodb+srv://KING:Derrick@cluster0.rlxtr.mongodb.net/filmfusion_db?retryWrites=true&w=majority&appName=Cluster0"


main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main();