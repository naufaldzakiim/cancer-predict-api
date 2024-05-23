const { Firestore } = require("@google-cloud/firestore");

async function getHistories() {
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
  const result = await predictCollection.get();

  if (result.empty) {
    return [];
  }

  const histories = [];
  result.forEach((doc) => {
    histories.push(doc.data());
  });

  return histories;
}

module.exports = getHistories;