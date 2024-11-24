let visitsCookie;
let userData;
let visits;
let sitColor
window.onload = () => {

     visitsCookie = document.cookie.split('; ').find(row => row.startsWith('visits='));
     userData=JSON.parse(document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1]);
     visits = visitsCookie ? parseInt(visitsCookie.split('=')[1], 10) : 0; 
    visits++;
    const expiryDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toUTCString();
    document.cookie = `visits=${visits}; expires=${expiryDate}; path=/`;
    console.log(`Cookie: ${userData.name}`);
     sitColor=userData.color;
    console.log(`Number of visits: ${visits}`);
    
    document.getElementById('name').innerText = userData.name;

    if(userData.gender=='male'){
        document.getElementById('gender').innerHTML=`<img id="male" src="./Images/male.jpeg" alt="" srcset="">`;
    }
    else{
        document.getElementById('gender').innerHTML=`<img id="female" src="./Images/female.png" alt="" srcset="">`;
    }
   
    document.getElementById('name').style.color=sitColor;
    document.getElementById('visits').innerText = visits

    
};


