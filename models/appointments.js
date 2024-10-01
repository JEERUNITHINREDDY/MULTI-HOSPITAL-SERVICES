const { string, date } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const appointmentsschema = new Schema ({
    pname: { 
        type: String,
        required: true, 
    },
    email: String,
    phone: Number,
    ephone: Number,
    address: String,
    hospitalname: String,
    apointmentdate: Date,
    department: String,
    anything: String,

    status: {
        type: String,
        default: 'Pending'
    },

    bookedPatient:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const appointments = mongoose.model("appointments", appointmentsschema);
module.exports = appointments;
