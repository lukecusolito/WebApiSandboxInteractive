module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ Message: "View sample endpoints file for example endpoint" });
    });

    app.get('/sample/:id', (req, res) => {
        res.send({ id: req.params.id });
    });

    app.post('/sample', (req, res) => {
        if (req.body.Id <= 0) {
            res.status(404).send({ Message: "Mate! You need an Id." });
        }

        res.send({ MyId: req.body.Id });
    });
}