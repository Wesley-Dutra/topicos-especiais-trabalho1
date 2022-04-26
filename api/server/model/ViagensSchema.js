const mongoose = require("mongoose");

const ViagensSchema = new mongoose.Schema({
    cidadePartida: { type: String, required: true },
    estadoPartida: { type: String, required: true, maxlength: 2},
    cidadeDestino: { type: String, required: true },
    estadoDestino: { type: String, required: true, maxlength: 2},
    dataInicio: { type: String},
    dataFim: { type: String },
    custoUnit: { type: Number },
    passageiros: { type: Number },
    ciaAerea: { type: String },
});
module.exports = mongoose.model("Viagens", ViagensSchema);