accounts = [
    {
        id: 1,
        inchargeid: "023-19-0144",
        password: "123"
    },
    {
        id: 2,
        inchargeid: "023-18-0082",
        password: "12345"
    }
]

check = true

var btn = document.getElementsByClassName('btn2')[0]
btn.addEventListener('click', function(){
    id = document.getElementById('ID').value
    pass = document.getElementById('Password').value

    accounts.forEach(acc => {
        if(acc.inchargeid === id && acc.password === pass){
            check = false
            localStorage.setItem("id", id);
            localStorage.setItem("password", pass);
            window.location = '../HTML/verification.html'
        }
    });
    if(check){
        alert('ID or Password was incorrect')
    }  
      
})