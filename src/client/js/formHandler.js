function  handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("formText = ", formText)
    console.log("::: Form Submitted :::")
    if (Client.checkForName(formText)==true){
    
       fetch('http://localhost:8081/aylien',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({url:formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polar-conf').innerHTML = res.polarity_confidence
        document.getElementById('subj-conf').innerHTML = res.subjectivity_confidence
    })
    }

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}


export { handleSubmit }
