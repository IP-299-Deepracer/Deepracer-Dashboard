

const express = require('express');
const router = express.Router();
const { execSync } = require("child_process");

router.post("/run", (req, res) => {
    const notebookPath = "D:\Work\Uni\Y3\Sem 2\AWS DeepRacer\Log Analysis ver 0.9\Log Analyis-Firebase test.ipynb";  // Replace with your actual notebook path
    const command = `python run_notebook.py ${notebookPath}`;
    try {
        execSync(command);
        res.json({ success: true, message: "Notebook executed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
