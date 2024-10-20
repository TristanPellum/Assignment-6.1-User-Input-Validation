function fullname(event) {
    event.preventDefault(); // Prevents the default form submission behavior, stopping the page from refreshing

    // Retrieve values from the input fields
    const first = document.getElementById("firstname").value; // Get the value of the first name input
    const last = document.getElementById("lastname").value; // Get the value of the last name input
    const fullname = first + " " + last; // Combine first and last names into a single string
    const zipcode = document.getElementById("zipcode").value; // Get the value of the zipcode input

    // Check for length violations
    if (fullname.length > 20 || zipcode.length !== 5) { // Check if the full name exceeds 20 characters or if the zipcode is not exactly 5 characters
        alert("Your full name cannot be more than 20 characters, and your zipcode must be 5 characters long."); // Alert the user of the error
        return; // Exit the function if validation fails
    }

    // If validation passes
    document.getElementById("display").innerHTML = fullname; // Display the full name in the 'display' paragraph
    alert("You filled out every field correctly!"); // Alert the user that the input was successful
    document.getElementById("secret").innerHTML = "You did it!"; // Display a success message in the 'secret' paragraph
}
