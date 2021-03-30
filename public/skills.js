let progressBar = document.querySelectorAll('.progress-bar');

let values=[
    '70%',
    '70%',
    '60%',
    '50%',
    '40%',
    '25%', 
    '40%',
    '55%',
    '40%'
    
]
progressBar.forEach((progress,index) => {
    progress.style.width = values[index];

    if(progress.style.width < "90%" && progress.style.width >= "80%"){
        progress.classList.add("bg-success");
    }else if(progress.style.width < "80%" && progress.style.width >= "70%"){
        progress.classList.add("bg-info");
    }else if(progress.style.width < "70%" && progress.style.width >= "50%"){
        progress.classList.add("bg-info");
    }else if(progress.style.width < "50%" && progress.style.width >= "40%"){
        progress.classList.add("bg-warning");
    }else if(progress.style.width < "30%" && progress.style.width >= "20%"){
        progress.classList.add("bg-danger");
    }
})