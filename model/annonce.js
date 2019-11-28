var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var annonceSchema = new Schema({
	dateCreation: {
		type: Date,
		default: new Date()
	},
	ville: String,
	entrepriseId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Entreprise"
	},
	posteId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Poste"
	}
});

var Annonce = mongoose.model("Annonce", annonceSchema);
exports.Annonce = Annonce;
