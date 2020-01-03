const fs = require('fs');

const writeFile = token => {
    return fs.writeFileSync('./save/lastToken', token);
}

const saveToken = async (req, res) => {
    const { token } = req.body;

    try {
        await writeFile(token);
        console.log("token saved");
        res.send("token saved");
    } catch (error) {
        console.log("failed while saving token: \n", error);
        res.send("error while saving token")
    }
}

module.exports = saveToken;