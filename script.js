class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
        this.grade = this.calculateGrade();
        this.status = this.getStatus();
    }

    calculateGrade() {
        const avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
        if (avg >= 90) return '1.00';
        if (avg >= 80) return '2.00';
        if (avg >= 75) return '3.00';
        return '5.00';  // Anything below 70 gets 5.00
    }

    getStatus() {
        // Convert grade to number for comparison
        const gradeNum = parseFloat(this.grade);
        // If grade is 3.25 or higher (numerically lower/better), it's a pass
        return (gradeNum <= 3.25) ? 'Pass' : 'Fail';
    }
}

const students = [];

function addStudent() {
    const nameInput = document.getElementById('studentName');
    const scoresInput = document.getElementById('studentScores');
    
    const name = nameInput.value.trim();
    const scoresText = scoresInput.value.trim();

    if (!name || !scoresText) {
        alert('Please enter both name and scores!');
        return;
    }

    const scores = scoresText.split(' ').map(Number);
    
    if (scores.some(isNaN) || scores.length === 0) {
        alert('Please enter valid numbers for scores!');
        return;
    }

    const student = new Student(name, scores);
    students.push(student);
    
    nameInput.value = '';
    scoresInput.value = '';
    
    displayStudents();
}

function displayStudents() {
    const tbody = document.getElementById('recordsBody');
    tbody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.status}</td>
        `;
        tbody.appendChild(row);
    });
}