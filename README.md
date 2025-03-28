# Student Grade Calculator

A responsive web application that calculates student grades based on their scores and determines pass/fail status using a numeric grading system.

## Features

- Add students with their names and multiple scores
- Calculates grades based on average scores:
  - 90 and above: 1.00 (Pass)
  - 80-89: 2.00 (Pass)
  - 75-79: 3.00 (Pass)
  - 70-74: 3.25 (Pass)
  - Below 70: 5.00 (Fail)
- Displays student records in a responsive table
- Input validation for names and scores
- Aesthetic pink and white design theme

## Technologies Used

- **HTML5**: Structure of the web page
- **CSS3**: Styling and responsive design
- **JavaScript**: Logic and interactivity
  - ES6 Classes for student objects
  - DOM manipulation for dynamic updates

## Installation

1. Clone or download this repository
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in a web browser

No additional dependencies or build steps required.

## Usage

1. Enter a student's name in the "Enter student name" field
2. Enter scores separated by spaces in the "Enter scores" field (e.g., "85 90 78")
3. Click "Add Student" to process and display the record
4. View all student records in the table below
   - Shows Name, Grade, and Status (Pass/Fail)

## Design Features

- Responsive layout adjusts to different screen sizes
- Pink (#ff69b4) and white color scheme
- Hover effects on buttons and table rows
- Smooth transitions and shadows
- Mobile-friendly interface


## Screenshots

![image](https://github.com/user-attachments/assets/81d6d40f-8d9a-4e41-946f-dc53de1baab1)

*(Note: Add actual screenshots to a `screenshots/` folder and update the paths above)*

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE)

## Vercel Link Host
https://grade-calculator-nine-dun.vercel.app/

## Acknowledgments

- Built with ❤️ by Ariiijen
- Created as a responsive web application example
