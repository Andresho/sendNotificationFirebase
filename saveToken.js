const fs = require('fs').promises;

const saveToken = async (req, res) => {
    const { token } = req.body;

    try {
        await fs.mkdir(`./save`, { recursive: true });
        await fs.writeFile('./save/lastToken', token);
        console.log("token saved");
        res.send("token saved");
    } catch (error) {
        console.log("failed while saving token: \n", error);
        res.send("error while saving token")
    }
}

module.exports = saveToken;