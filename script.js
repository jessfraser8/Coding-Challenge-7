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
        document.getElementById("feedbackSummary").innerHTML =`
        <p>
        Name: ${name}
        <p>
        Rating: ${rating}
        <p>
        Comments: ${comments}
        `
    };
});
