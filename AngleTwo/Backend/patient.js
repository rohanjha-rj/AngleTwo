
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
    dob: { 
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
        default: 'Prefer not to say'
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    allergies: [{ 
        type: String,
        trim: true
    }],
    medicalHistory: { 
        type: String,
        trim: true
    },
    insuranceProvider: {
        type: String,
        trim: true
    },
    emergencyContact: {
        name: { type: String, trim: true },
        phoneNumber: { type: String, trim: true },
        relationship: { type: String, trim: true }
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown']
    },
    Height: {
        type: String,
        trim : true

    },
    weight:{
        type: String,
        trim : true
    },
    Bio:{
        type: String,
        trim: true
    },

    doctors: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor' 
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

patientSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('patient', patientSchema);