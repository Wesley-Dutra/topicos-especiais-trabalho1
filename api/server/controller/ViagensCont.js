const Viagens = require('../model/ViagensSchema');

module.exports = {
    listar: async (req, res) => {
        Viagens.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ ciaAerea: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Viagens(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Viagens(req.body);
        Viagens.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Viagens.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    filtrar: async (req, res) => {
        const objetos = await Viagens.find({
            $or: [
                { cidadePartida: { $regex: req.params.filtro, $options: "i" } },
                { estadoPartida: { $regex: req.params.filtro, $options: "i" } },
                { cidadeDestino: { $regex: req.params.filtro, $options: "i" } },
                { estadoDestino: { $regex: req.params.filtro, $options: "i" } },
                { ciaAerea: { $regex: req.params.filtro, $options: "i" } },
            ],
        } ).sort({ ciaAerea: 1 }).exec();
        res.json(objetos);
    },
};

