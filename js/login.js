document.getElementById('input-submit').addEventListener('click',function(){
      //  get user email
    const emailField =document.getElementById("user-email");
    const userEmail=emailField.value;
      //   get User password
    const passwordField =document.getElementById('user-password');
    const userPssword =passwordField.value;
      //  check email and password
    if(userEmail == 'sontan@gmail.com' && userPssword =='secret'){
      window.location.href='banking.html';
    }
    else{
        document.write(alert('invied email or password!'));
    }
})