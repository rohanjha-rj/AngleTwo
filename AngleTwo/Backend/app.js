
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const connectDB = require('./db');
const Doctor = require('./doctor');
const Patient = require('./patient');

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();


app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => {
    res.send('Welcome to the Consulting API! Use /api/doctors and /api/patients.');
});


app.post('/api/doctors/register', async (req, res) => {
    try {
        const { name, email, specialization, phoneNumber, bio } = req.body;
        const newDoctor = new Doctor({ name, email, specialization, phoneNumber, bio });
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        console.error('Error registering doctor:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('patients');
        res.json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('patients');
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        console.error('Error fetching doctor by ID:', error);
        res.status(500).json({ message: error.message });
    }
});



app.post('/api/patients/register', async (req, res) => {
    try {
        const { name, email, dob, gender, phoneNumber, address } = req.body;
        const newPatient = new Patient({ name, email, dob, gender, phoneNumber, address });
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        console.error('Error registering patient:', error);
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/patients', async (req, res) => {
    try {
        const patients = await Patient.find().populate('doctors');
        res.json(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('doctors');
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        console.error('Error fetching patient by ID:', error);
        res.status(500).json({ message: error.message });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});