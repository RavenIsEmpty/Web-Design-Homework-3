function calculate(){
    const attendance = parseFloat(document.getElementById('attendance').value);
    const assignment = parseFloat(document.getElementById('assignment').value);
    const midterm = parseFloat(document.getElementById('midterm').value);
    const final = parseFloat(document.getElementById('final').value);

    if (isNaN(attendance) || isNaN(assignment) || isNaN(midterm) || isNaN(final)) {
        alert("Please enter all required fields.");
        return;
    }
    const total = attendance + assignment + midterm + final;
    const average = total / 4;
    let result, mention;

    if (average >= 90) {
        result = 'A';
        mention = 'Excellent';
    } else if (average >= 80) {
        result = 'B';
        mention = 'Very Good';
    } else if (average >= 70) {
        result = 'C';
        mention = 'Good';
    } else if (average >= 60) {
        result = 'D';
        mention = 'Pass';
    } else {
        result = 'F';
        mention = 'Fail';
    }
    document.getElementById('total').value = total;
    document.getElementById('average').value = average.toFixed(2);
    document.getElementById('result').value = result;
    document.getElementById('mention').value = mention;
}