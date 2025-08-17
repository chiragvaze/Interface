// Prescription history array
let prescriptionHistory = [];
let currentPrescription = {
    medicines: [],
    date: new Date(),
    id: Date.now()
};

// Disease array storage
let diseaseHistory = [];

// Function to add medicine to current prescription
function addMedicineToPrescription() {
    const medicine = document.getElementById('medicine').value;
    const dosage = document.getElementById('dosage').value;
    const duration = document.getElementById('duration').value;
    const frequency = document.getElementById('frequency').value;
    const timing = document.getElementById('timing').value;
    const instructions = document.getElementById('instructions').value;
    const notes = document.getElementById('notes').value;

    if (!medicine || !dosage || !duration) {
        alert('Please fill in medicine, dosage, and duration');
        return;
    }

    const medicineObj = {
        id: Date.now() + Math.random(),
        medicine: medicine,
        dosage: dosage,
        duration: duration,
        frequency: frequency,
        timing: timing,
        instructions: instructions,
        notes: notes
    };

    currentPrescription.medicines.push(medicineObj);
    displayCurrentMedicineList();

    // Reset form
    document.getElementById('medicine').value = '';
    document.getElementById('dosage').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('frequency').value = '';
    document.getElementById('timing').value = '';
    document.getElementById('instructions').value = '';
    document.getElementById('notes').value = '';

    // Reset button active states
    document.querySelectorAll('.freq-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.timing-btn').forEach(btn => btn.classList.remove('active'));
}

// Function to display current medicine list
function displayCurrentMedicineList() {
    const medicineList = document.getElementById('currentMedicineList');
    medicineList.innerHTML = '';

    currentPrescription.medicines.forEach((med, index) => {
        const medicineItem = document.createElement('div');
        medicineItem.className = 'medicine-item';
        medicineItem.innerHTML = `
            <div class="medicine-info">
                <strong>${med.medicine}</strong> - ${med.dosage} for ${med.duration}
                ${med.frequency ? `<br><small>Frequency: ${med.frequency}</small>` : ''}
                ${med.timing ? `<br><small>Timing: ${med.timing}</small>` : ''}
            </div>
            <button type="button" class="remove-medicine" onclick="removeMedicine(${index})">Remove</button>
        `;
        medicineList.appendChild(medicineItem);
    });

    const medicineListSection = document.getElementById('medicineListSection');
    if (currentPrescription.medicines.length > 0) {
        medicineListSection.style.display = 'block';
    } else {
        medicineListSection.style.display = 'none';
    }
}

// Function to remove medicine from current prescription
function removeMedicine(index) {
    currentPrescription.medicines.splice(index, 1);
    displayCurrentMedicineList();
}

// Function to submit entire prescription
function submitPrescription() {
    if (currentPrescription.medicines.length === 0) {
        alert('Please add at least one medicine to the prescription');
        return;
    }

    const prescription = {
        id: Date.now(),
        medicines: [...currentPrescription.medicines],
        date: new Date(),
        prescriptionNumber: `RX-${Date.now().toString().slice(-6)}`
    };

    prescriptionHistory.push(prescription);
    displayPrescriptionInHistory(prescription);

    // Reset current prescription
    currentPrescription = {
        medicines: [],
        date: new Date(),
        id: Date.now()
    };

    displayCurrentMedicineList();
}

// Function to display prescription in history section
function displayPrescriptionInHistory(prescription) {
    const historySection = document.getElementById('prescriptionHistoryList');

    const dateObj = prescription.date;
    const dateStr = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const timeStr = dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const prescriptionElement = document.createElement('div');
    prescriptionElement.className = 'prescription-history-item';
    prescriptionElement.innerHTML = `
        <div class="prescription-summary" onclick="togglePrescriptionDetails(${prescription.id})">
            <div class="prescription-header">
                <h3>Prescription ${prescription.prescriptionNumber}</h3>
                <span class="prescription-date">${dateStr} at ${timeStr}</span>
            </div>
            <div class="prescription-preview">
                ${prescription.medicines.length} medicine(s) prescribed
            </div>
            <div class="dropdown-icon">▼</div>
        </div>
        <div class="prescription-details" id="details-${prescription.id}" style="display: none;">
            <div class="medicine-list">
                ${prescription.medicines.map(med => `
                    <div class="medicine-detail">
                        <h4>${med.medicine}</h4>
                        <p><strong>Dosage:</strong> ${med.dosage}</p>
                        <p><strong>Duration:</strong> ${med.duration}</p>
                        ${med.frequency ? `<p><strong>Frequency:</strong> ${med.frequency}</p>` : ''}
                        ${med.timing ? `<p><strong>Timing:</strong> ${med.timing}</p>` : ''}
                        ${med.instructions ? `<p><strong>Instructions:</strong> ${med.instructions}</p>` : ''}
                        ${med.notes ? `<p><strong>Notes:</strong> ${med.notes}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    historySection.appendChild(prescriptionElement);
}

// Function to toggle prescription details
function togglePrescriptionDetails(prescriptionId) {
    const detailsElement = document.getElementById(`details-${prescriptionId}`);
    const dropdownIcon = document.querySelector(`[onclick="togglePrescriptionDetails(${prescriptionId})"] .dropdown-icon`);

    if (detailsElement.style.display === 'none') {
        detailsElement.style.display = 'block';
        dropdownIcon.textContent = '▲';
        dropdownIcon.classList.add('rotated');
    } else {
        detailsElement.style.display = 'none';
        dropdownIcon.textContent = '▼';
        dropdownIcon.classList.remove('rotated');
    }
}

// Function to toggle disease form
function toggleDiseaseForm() {
    const formSection = document.getElementById('diseaseFormSection');
    if (formSection.style.display === 'none') {
        formSection.style.display = 'block';
    } else {
        formSection.style.display = 'none';
    }
}

// Function to submit disease
function submitDisease() {
    const diseaseName = document.getElementById('diseaseName').value;
    const diagnosisDate = document.getElementById('diagnosisDate').value;
    const severity = document.getElementById('severity').value;
    const symptoms = document.getElementById('symptoms').value;
    const treatment = document.getElementById('treatment').value;
    const doctorNotes = document.getElementById('doctorNotes').value;

    if (!diseaseName || !diagnosisDate || !severity) {
        alert('Please fill in disease name, diagnosis date, and severity');
        return;
    }

    const diseaseObj = {
        id: Date.now(),
        diseaseName: diseaseName,
        diagnosisDate: diagnosisDate,
        severity: severity,
        symptoms: symptoms,
        treatment: treatment,
        doctorNotes: doctorNotes,
        date: new Date()
    };

    diseaseHistory.push(diseaseObj);
    displayDiseaseInList(diseaseObj);
    toggleDiseaseForm();

    // Reset form
    document.getElementById('diseaseForm').reset();
}

// Function to display disease in list
function displayDiseaseInList(disease) {
    const diseaseList = document.getElementById('diseaseList');
    
    const diseaseElement = document.createElement('div');
    diseaseElement.className = 'disease-item';
    
    const dateObj = new Date(disease.date);
    const dateStr = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    diseaseElement.innerHTML = `
        <div class="disease-summary" onclick="toggleDiseaseDetails(${disease.id})">
            <div class="disease-header">
                <h3>${disease.diseaseName}</h3>
                <span class="disease-date">${dateStr}</span>
            </div>
            <div class="disease-preview">
                ${disease.severity} - ${disease.symptoms.substring(0, 50)}...
            </div>
            <div class="dropdown-icon">▼</div>
        </div>
        <div class="disease-details" id="details-${disease.id}" style="display: none;">
            <div class="disease-detail">
                <h4>${disease.diseaseName}</h4>
                <p><strong>Diagnosis Date:</strong> ${dateStr}</p>
                <p><strong>Severity:</strong> ${disease.severity}</p>
                <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
                <p><strong>Treatment:</strong> ${disease.treatment}</p>
                <p><strong>Doctor Notes:</strong> ${disease.doctorNotes}</p>
            </div>
        </div>
    `;

    diseaseList.appendChild(diseaseElement);
}

// Function to toggle disease details
function toggleDiseaseDetails(diseaseId) {
    const detailsElement = document.getElementById(`details-${diseaseId}`);
    const dropdownIcon = document.querySelector(`[onclick="toggleDiseaseDetails(${diseaseId})"] .dropdown-icon`);

    if (detailsElement.style.display === 'none') {
        detailsElement.style.display = 'block';
        dropdownIcon.textContent = '▲';
        dropdownIcon.classList.add('rotated');
    } else {
        detailsElement.style.display = 'none';
        dropdownIcon.textContent = '▼';
        dropdownIcon.classList.remove('rotated');
    }
}

// Event listeners for frequency and timing buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.freq-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const frequencyInput = document.getElementById('frequency');
            let values = frequencyInput.value.split(',').filter(v => v.trim());
            const freq = this.getAttribute('data-frequency');

            if (this.classList.contains('active')) {
                if (!values.includes(freq)) values.push(freq);
            } else {
                values = values.filter(v => v !== freq);
            }

            frequencyInput.value = values.join(', ');
        });
    });

    document.querySelectorAll('.timing-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.timing-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('timing').value = this.getAttribute('data-timing');
        });
    });

    // Initialize with sample disease
    displayDiseaseInList({
        id: 1,
        diseaseName: "Diabetes Type 2",
        diagnosisDate: "2024-01-15",
        severity: "moderate",
        symptoms: "Increased thirst, frequent urination, fatigue",
        treatment: "Metformin 500mg twice daily, diet control",
        doctorNotes: "Monitor blood sugar levels regularly",
        date: new Date()
    });
});
