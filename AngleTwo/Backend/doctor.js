
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
    specialization: {
        type: String,
        required: true,
        trim: true
    },
    
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
        default: 'Prefer not to say'
    },
    address: {
        type: String,
        trim: true
    },
    qualifications: [{ 
        type: String,
        trim: true
    }],
    experienceYears: {
        type: Number,
        min: 0
    },
    clinicAddress: {
        type: String,
        trim: true
    },
    availableSlots: [{ 
        day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
        startTime: String, 
        endTime: String     
    }],

    
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient' 
    }],
    phoneNumber: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

doctorSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('doctor', doctorSchema);