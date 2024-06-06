document.getElementById("feedbackForm").addEventListener("submit",(event)=>{
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    //Validate all fields are filled out.
    if(name === "" || rating === "" || comments === "") {
        //Display an alert if a field is missing.
        alert("Please fill out all fields before submitting.")
    } else {
        //Display submitted feedback if submitted correctly.
        //Add formatting to displyed text.
        document.getElementById("feedbackSummary").innerHTML =`
        <h3>Review Feedback:</h3><p>
        <strong> Name:</strong> ${name}<p>
        <strong> Rating:</strong> ${rating}<p>
        <strong> Comments:</strong> ${comments}
        `
    };
});
