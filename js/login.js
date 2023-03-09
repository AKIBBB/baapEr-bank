
document.getElementById('btn-submit').addEventListener('click',function(){
    // get cathch email
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    console.log(email);
    // get passowrd
     const passowrdField=document.getElementById('user-password');
     const passowrd=passowrdField.value;
     console.log(passowrd);
     // do not verify email pass check this way
     if( email=== 'sontan@baap.com' && passowrd=== 'secret'){
       window.location.href='bank.html';
     }
     else{
        alert('Toke ami tejjo ghushona korlam!!');       
     }
})