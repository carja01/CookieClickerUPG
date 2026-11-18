
const secret=document.getElementById('secret');
const monika = document.getElementById('monika');
const upgrades=document.getElementById('upgrades');

secret.addEventListener('click', function(event){
    if(antalCookies>10){
        antalCookies=antalCookies-2000000
        text.textContent = "Cookies: " + antalCookies;
        window.open("secretSayori.html", "_blank");
        document.getElementById('monika').style.display = "block";
        setTimeout(function(){alert("Are you happy? You grinded and grinded to get a million cookies, the curiosity got to you, and for what? You made me do this, and now, she is gone. Everyone is gone. It is just you and me now, and no one will get in our way...")
    },2000);
}
    else{
        antalCookies=antalCookies-1000
        text.textContent = "Cookies: " + antalCookies;
        alert("You don't have enough cookies yet, and either way, this is not something you would want to see...")
    } 

    })

let antalCookies = 0

let text = document.getElementById('antalCookies');
const cookieBild = document.getElementById('cookieBild');

cookieBild.addEventListener('click', function(event){
    
        if(antalPower<=1){
            antalCookies++;
    text.textContent = "Cookies: " + antalCookies; }
    else{
        antalCookies=antalCookies+1*antalPower;
        text.textContent = "Cookies: " + antalCookies; 
    }
}
);



let antalPower = 1

let text3 = document.getElementById('antalPower')
const knappPower = document.getElementById('knappPower');

knappPower.addEventListener('click',function(event){
    if(antalCookies>99){
        antalPower++;
    

        antalCookies=antalCookies-100;

        text3.textContent="MC Power Amount: " + antalPower;
        text.textContent = "Cookies: " + antalCookies;

    }

}
);




let antalUpgrade1 = 0

let text2 = document.getElementById('antalUpgrade1')
const knapp1 = document.getElementById('knapp1');

knapp1.addEventListener('click', function(event){
    if(antalCookies>14){
    antalUpgrade1++;
    text2.textContent = "Sayori Baker's: " + antalUpgrade1;

    antalCookies=antalCookies-15;

    text.textContent = "Cookies: " + antalCookies;


    const skapare1 = setInterval(function()
{
antalCookies=antalCookies+1;
text.textContent = "Cookies: " +antalCookies;
},5000);

    }
});





let antalUpgrade2 = 0

let text4 = document.getElementById('antalUpgrade2')
const knapp2 = document.getElementById('knapp2');

knapp2.addEventListener('click', function(event){
    if(antalCookies>99){
    antalUpgrade2++;
    text4.textContent = "Natsuki Baker's: " + antalUpgrade2;

    antalCookies=antalCookies-100;

    text.textContent = "Cookies: " + antalCookies;


    const skapare2 = setInterval(function()
{
antalCookies=antalCookies+10;
text.textContent = "Cookies: " +antalCookies;
},5000);

    }
});




let antalUpgrade3 = 0

let text5 = document.getElementById('antalUpgrade3')
const knapp3 = document.getElementById('knapp3');

knapp3.addEventListener('click', function(event){
    if(antalCookies>999){
    antalUpgrade3++;
    text5.textContent = "Yuri Baker's: " + antalUpgrade3;

    antalCookies=antalCookies-1000;

    text.textContent = "Cookies: " + antalCookies;


    const skapare3 = setInterval(function()
{
antalCookies=antalCookies+150;
text.textContent = "Cookies: " +antalCookies;
},5000);

    }
});

let antalUpgrade4 = 0

let text6 = document.getElementById('antalUpgrade4')
const knapp4 = document.getElementById('knapp4');

knapp4.addEventListener('click', function(event){
    if(antalCookies>9999){
    antalUpgrade4++;
    text6.textContent = "Just Monika: " + antalUpgrade4;

    antalCookies=antalCookies-10000;

    text.textContent = "Cookies: " + antalCookies;


    const skapare4 = setInterval(function()
{
antalCookies=antalCookies+2000;
text.textContent = "Cookies: " +antalCookies;
},5000);

    }
});