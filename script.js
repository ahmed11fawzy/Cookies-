const userName=document.querySelector('#name');
const userEmail=document.querySelector('#email');
const userAge=document.querySelector('#age');
const userGender=document.querySelector('#male');
const userGender1=document.querySelector('#female');
const userColor=document.querySelector('#color');
const formBtn=document.querySelector('.formBtn');


formBtn.addEventListener('click',function(e){
    e.preventDefault();
    let user={};
    userGender.value='';

    if(userName.value=='' || userEmail.value=='' || userAge.value==''  ){
        alert('Please fill all the fields');
    }
    else{
        if(userGender.checked){
            userGender.value='male';
        }
        else if(userGender1.checked){
            userGender.value='female';
        }
        user={
            name:userName.value,
            email:userEmail.value,
            age:userAge.value,
            gender:userGender.value,    
            color:userColor.value
        }
        createCookie(user);
        window.open('about.html','_blank',"height=400,width=400");
    }
    console.log(user);
})
function createCookie(userData) {
    let cookie= JSON.stringify(userData);
    console.log(JSON.parse(cookie));
    let visits=0;
    document.cookie=`visits=${visits};expires=${new Date(Date.now()+1000*60*60*24*7)};path=/`;
    document.cookie=`user=${cookie};expires=${new Date(Date.now()+1000*60*60*24*7)};path=/`;
} 