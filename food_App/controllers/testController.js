const testUserController = (req, res) => {
  try {
    res.status(200).send({
      status: true,
      message: [
        "ok every thing is ok and now YOur code is running",
        "Hey I would like to request you that please try this once more",
        "Are you here can you run the code ",
      ],
    });
  } catch (error) {
    console.log("ERror  aa gya bhai ", error);
    res.status(500).send({
      status: false,
      message: "An error occured on the server",
    });
  }
};
const myUserController = (req, res) => {
  try {
    res.status(200).send({
      status: true,
      message: [
        "This message is form myController and here",
        "Ok MaMu",
        "EveyThing is goin well manu So you can start well form today",
        "All set to go through DB Connections and now you can create your own server",
        "Ab mera code chalega ",
      ],
    });
  } catch (error) {
    console.log("ERror  aa gya bhai ", error);
    res.status(500).send({
      status: false,
      message: "An error occured on the server",
    });
  }
};

module.exports = { testUserController, myUserController };
