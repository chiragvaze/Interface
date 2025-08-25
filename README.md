# Prescription Management System

A comprehensive web-based prescription management system that allows healthcare professionals to create, manage, and track patient prescriptions with an intuitive and modern interface.

## 🚀 Live Demo

Check out the live application: [https://chiragvaze.github.io/Interface/](https://chiragvaze.github.io/Interface/)

## Features

### 🏥 Patient Profile Management
- Display patient information including name, age, and gender
- Professional profile photo display
- Clean and organized patient header section

### 💊 Multi-Medicine Prescription
- **Medicine Selection**: Choose from a comprehensive list of common medications
- **Dosage & Duration**: Specify exact dosage amounts and treatment duration
- **Frequency Control**: Select medication timing (Morning, Afternoon, Evening, Night)
- **Administration Timing**: Choose when to take medication (Before/After meals)
- **Additional Instructions**: Add custom instructions and notes for each medicine
- **Real-time Preview**: See current prescription items before submission

### 📋 Prescription History
- **Complete History Tracking**: View all previous prescriptions
- **Expandable Details**: Click to view full prescription details
- **Timestamps**: Each prescription includes date and time of creation
- **Prescription Numbers**: Unique identifiers for each prescription (RX- format)
- **Medicine Details**: View dosage, frequency, timing, and instructions for each medicine

### 🩺 Disease Management
- **Disease Tracking**: Record and manage patient medical conditions
- **Detailed Information**: 
  - Disease name and diagnosis date
  - Severity level (Mild, Moderate, Severe, Chronic)
  - Symptoms description
  - Treatment plans
  - Doctor notes
- **Expandable Disease Cards**: View complete disease information
- **Add New Diseases**: Simple form to record new medical conditions

### 🎨 Modern UI/UX Design
- **Glass Morphism Design**: Modern glass-like transparent elements
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects and transitions
- **Professional Styling**: Clean, medical-professional appearance
- **Custom Scrollbars**: Enhanced scrolling experience

## File Structure

```
interface/
├── index.html              # Main prescription application
├── prescription.js         # JavaScript functionality
├── prescription.css        # Styling for the application
├── README.md              # This documentation file
└── image/
    ├── sample-profile-photo.avif
    └── sample-profile-photo2.jpg
```

## Usage

### Basic Prescription Form (index.html)
1. Open `index.html` in a web browser
2. Fill in the prescription form with medicine details
3. Use frequency and timing buttons to specify administration
4. Click "Add Medicine to List" to add to current prescription
5. Review the medicine list and click "Submit Prescription"
6. View prescription history in the right panel

### Enhanced Version (prescription.html)
1. Open `prescription.html` in a web browser
2. All basic prescription features plus:
3. **Disease Management**: Click "+ Add Disease" to record medical conditions
4. Fill in disease details including symptoms and treatment
5. View disease history with expandable details
6. Enhanced UI with glass morphism design

### Form Fields Explained

**Medicine Prescription:**
- **Medicine**: Select from dropdown list of common medications
- **Dosage**: Enter dosage amount (e.g., "500mg")
- **Duration**: Specify treatment period (e.g., "7 days")
- **Frequency**: Select one or more administration times
- **Timing**: Choose when to take relative to meals
- **Instructions**: Additional guidance for the patient
- **Notes**: Doctor's notes about the prescription

**Disease Management:**
- **Disease Name**: Name of the medical condition
- **Diagnosis Date**: When the condition was diagnosed
- **Severity**: Level of severity (Mild, Moderate, Severe, Chronic)
- **Symptoms**: Description of symptoms experienced
- **Treatment**: Current treatment plan
- **Doctor Notes**: Additional medical notes

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables and gradients
- **JavaScript**: Client-side functionality and form handling
- **Google Fonts**: Poppins and Roboto font families
- **Font Awesome**: Icon library for enhanced UI

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Responsive Design
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen sizes and orientations

## Setup and Running

### Live Deployment (GitHub Pages)
The application is automatically deployed via GitHub Pages. Visit the live demo link above to use the application.

### Local Development
No installation or dependencies required! Simply:

1. Download or clone the project files
2. Open either `index.html` or `prescription.html` in your web browser
3. The application will load immediately with all functionality

### For Code Modification
If you want to modify the code:
1. Use any code editor (VS Code recommended)
2. Modify HTML, CSS, or JavaScript files as needed
3. Refresh the browser to see changes
4. Commit and push changes to GitHub to update the live deployment

## Features in Detail

### Prescription Management
- Add multiple medicines to a single prescription
- Remove medicines from current prescription
- Submit complete prescriptions to history
- View detailed prescription history with expandable sections
- Unique prescription numbering system

### Disease Management
- Add new diseases with comprehensive details
- View disease history with symptoms and treatment
- Expandable disease cards for detailed viewing
- Organized medical condition tracking

### UI/UX Features
- Glass morphism design elements
- Smooth hover animations and transitions
- Professional color scheme suitable for medical use
- Intuitive form layout and organization
- Responsive design for all devices

## Sample Data

The application includes sample data:
- Patient: Chirag Vaze (Male, Age 19)
- Sample profile photos
- Sample disease entry (Diabetes Type 2)

## Customization

### Styling
Modify CSS variables in the CSS files to change:
- Color scheme
- Font sizes
- Spacing and layout
- Animation timing

### Medicine List
Add or remove medicines from the dropdown in the HTML files:
```html
<option value="medicine-name">Medicine Display Name</option>
```

### Disease Severity Levels
Modify severity options in the disease form:
```html
<option value="mild">Mild</option>
<option value="moderate">Moderate</option>
```

## Browser Support

The application uses modern web standards and works best in:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## GitHub Deployment

This project is deployed using GitHub Pages. To update the live deployment:

1. Make your changes to the code
2. Commit and push to the main branch
3. GitHub Pages will automatically deploy the changes
4. The live demo will be available at: https://chiragvaze.github.io/Interface/

### GitHub Pages Setup
If you need to set up GitHub Pages for a new repository:
1. Go to your repository on GitHub
2. Click on "Settings" → "Pages"
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be published at `https://[username].github.io/[repository-name]/`

## License

This project is open source and available for educational and medical use.

## Contributing

Feel free to:
- Report issues
- Suggest new features
- Submit pull requests
- Improve documentation

## Support

For questions or support, please check the code comments or create an issue in the project repository.

---

**Note**: This is a demonstration system for educational purposes. Always follow proper medical protocols and regulations when handling patient data and prescriptions in real-world scenarios.
