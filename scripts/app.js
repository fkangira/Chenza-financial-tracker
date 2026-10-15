// This will hold our expenses for now. 
let expenses = [];

//patterns for checking the form inputs
const namePattern = /^[a-z0-9 ,.'-]{3,50}$/i;
const amountPattern = /^\d+(\.\d{1,2})?$/;
const referencePattern = /^EXP-\d{3}$/;
const notePattern = /[a-z]/i;

// Check that words are not repeated next to each other
const repeatPattern = /\b(\w+)\s+\1\b/i;

function checkExpense(description, amount, category, date, reference, note) {

    if (!namePattern.test(description)) {
        return "Enter a valid description (3-50 characters).";
    }

    if (repeatPattern.test(description)) {
        return "Do not repat the same word twice.";
    }

    if (!amountPattern.test(amount) || Number(amount) <= 0) {
        return "Enter a positive amount with up to 2 decimal places.";
    }

    if (!category || !date) {
        return "please choose a category and date.";
    }

    if (reference && !referencePattern.test(reference)) {
        return "Reference should look like EXP-001.";
    }

    if (note && !notePattern.test(note)) {
        return "Your note should contain at least one letter.";
    }

    return "";
}

//We only run the form code when the form exists.
const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //Get what the user entered.
        let description = document.getElementById("description").value.trim();
        let amount = document.getElementById("amount").value;
        let category = document.getElementById("category").value;
        let date = document.getElementById("date").value;
        let reference = document.getElementById("reference").value.trim();
        let note = document.getElementById("note").value.trim();

        let error = checkExpense(description, amount, category, date, reference, note);

        document.getElementById("form-error").textContent = error;
        document.getElementById("form-message").textContent = "";

        if (error) return;

        let now = new Date().toISOString();

        let expense = {
            id: crypto.randomUUID(),
            description: description,
            amount: Number(amount),
            category: category,
            date: date,
            reference: reference,
            note: note,
            createdAt: now,
            updatedAt: now
        };

        expenses.push(expense);

        document.getElementById("form-message").textContent = "Expense added succesfully!";
        form.reset();

        console.log(expenses);
    });
}