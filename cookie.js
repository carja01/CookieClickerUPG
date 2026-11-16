let antalCookies = 0

let text = document.getElementById('antalCookies');
const cookieBild = document.getElementById('cookieBild');

cookieBild.addEventListener('click', function(event){
        antalCookies++;
    text.textContent = "Antal kakor: " + antalCookies; 
}
);



let antalPower = 1

let text3 = document.getElementById('antalPower')
const knappPower = document.getElementById('knappPower');

knappPower.addEventListener('click',function(event){
    if(antalCookies>4){
        antalPower++;
        text3.textContent = "Antal Upgrades" + antalPower;
        
        antalCookies=antalCookies-5;

        text3.textContent="Antal Upgrades: " + antalPower;
        text.textContent = "Antal kakor: " + antalCookies;

    }

}
);




let antalUpgrade1 = 0

let text2 = document.getElementById('antalUpgrade1')
const knapp1 = document.getElementById('knapp1');

knapp1.addEventListener('click', function(event){
    if(antalCookies>9){
    antalUpgrade1++;
    text2.textContent = "Antal Upgrades: " + antalUpgrade1;

    antalCookies=antalCookies-10;

    text.textContent = "Antal kakor: " + antalCookies;


    const skapare1 = setInterval(function()
{
antalCookies=antalCookies+1;
text.textContent = "Antal kakor: " +antalCookies;
},1000);

    }
});





let antalUpgrade2 = 0

let text4 = document.getElementById('antalUpgrade2')
const knapp2 = document.getElementById('knapp2');

knapp2.addEventListener('click', function(event){
    if(antalCookies>99){
    antalUpgrade2++;
    text4.textContent = "Antal Upgrades: " + antalUpgrade2;

    antalCookies=antalCookies-100;

    text.textContent = "Antal kakor: " + antalCookies;


    const skapare2 = setInterval(function()
{
antalCookies=antalCookies+10;
text.textContent = "Antal kakor: " +antalCookies;
},1000);

    }
});




let antalUpgrade3 = 0

let text5 = document.getElementById('antalUpgrade3')
const knapp3 = document.getElementById('knapp3');

knapp3.addEventListener('click', function(event){
    if(antalCookies>499){
    antalUpgrade3++;
    text5.textContent = "Antal Upgrades: " + antalUpgrade3;

    antalCookies=antalCookies-500;

    text.textContent = "Antal kakor: " + antalCookies;


    const skapare3 = setInterval(function()
{
antalCookies=antalCookies+100;
text.textContent = "Antal kakor: " +antalCookies;
},1000);

    }
});

let antalUpgrade4 = 0

let text6 = document.getElementById('antalUpgrade4')
const knapp4 = document.getElementById('knapp4');

knapp4.addEventListener('click', function(event){
    if(antalCookies>999){
    antalUpgrade4++;
    text6.textContent = "Antal Upgrades: " + antalUpgrade4;

    antalCookies=antalCookies-1000;

    text.textContent = "Antal kakor: " + antalCookies;


    const skapare4 = setInterval(function()
{
antalCookies=antalCookies+200;
text.textContent = "Antal kakor: " +antalCookies;
},1000);

    }
});