
    //all the functions
    const saveToLocalstorage1 = (url)=>{
    const petrol = document.getElementById("petrol").value;
    const  diesel = document.getElementById("diesel").value;
    const R1=document.getElementById("R1").value;
    const R2=document.getElementById("R2").value;
    const R3=document.getElementById("R3").value;
    const R4 = document.getElementById("R4").value;
    const lpg = document.getElementById("lpg").value;
    localStorage.setItem("petrol",petrol);
    localStorage.setItem("diesel",diesel);
    localStorage.setItem("R1",R1);
    localStorage.setItem("R2",R2);
    localStorage.setItem("R3",R3);
    localStorage.setItem("R4",R4);
    localStorage.setItem( "lpg",lpg);
    console.log("Price saved to local storage");
    window.location.href = url;
}
    const saveToLocalstorage2 = (url)=>{
        const electricity=document.getElementById("electricity").value;
        const solar = document.getElementById( "solar" ).value;
        localStorage.setItem( "electricity" , electricity);
        localStorage.setItem("solar",solar);
        console.log("price saved to local storage");
        window.location.href=url;
    }

    const saveToLocalstorage3 =(url)=> {
        const two_Wheels = document.getElementById("two-Wheels").value;
        const  four_Wheels = document.getElementById("four-wheels").value;
        const sewage = document.getElementById("sewage").value;
        const water =document.getElementById("water").value ;
        const disposal = document.getElementById("disposal").value;
        const papers = document.getElementById( "papers").value;
        const road = document.getElementById( "road").value;
        const rail = document.getElementById("rail").value;
        const air = document.getElementById("air").value;
        const plantation = document.getElementById('plantation').value;
        localStorage.setItem("two_Wheels",two_Wheels);
        localStorage.setItem("four_Wheels",four_Wheels);
        localStorage.setItem("sewage",sewage);
        localStorage.setItem("water",water);
        localStorage.setItem("disposal",disposal);
        localStorage.setItem( "papers" , papers );
        localStorage.setItem("road",road);
        localStorage.setItem( "rail" , rail );
        localStorage.setItem("air",air);
        localStorage.setItem("plantation",plantation);
        console.log("2 wheels saved to local storage");
        window.location.href=url;
    }
    
//1st PAGE
    const petrol = localStorage.getItem('petrol');
    const diesel = localStorage.getItem('diesel'); 
    const R1= localStorage.getItem('R1');
    const R2= localStorage.getItem('R2');
    const R3= localStorage.getItem('R3');
    const R4 = localStorage.getItem('R4');
    const lpg = localStorage.getItem('lpg');
//2ND PAGE
    const electricity=localStorage.getItem('electricity'); 
    const  solar = localStorage.getItem('solar');
//3rd PAGE
    const  two_Wheels=localStorage.getItem('two_Wheels');
    const four_Wheels=localStorage.getItem('four_Wheels');
    const  sewage=localStorage.getItem('sewage');
    const   water=localStorage.getItem('water');
    const disposal=localStorage.getItem('disposal');
    const   papers=localStorage.getItem('papers');
    const road=localStorage.getItem('road');
    const   rail=localStorage.getItem('rail');
    const air=localStorage.getItem('air');
    const plantation=localStorage.getItem('plantation');

//calculation of total carbon footprint;
    const scope1 = (petrol*2.31 + diesel*2.68 + R1*1810+ R2*14800 + R3*1540 + R4*1430 + lpg*2.983);
    const scope2 = (electricity*0.6727 - solar*0.6727);
    const scope3 = (two_Wheels*0.11337 +four_Wheels*0.1714+sewage*0.708+water*0.344+disposal*1.326+papers*0.9194+ road*0.1219+rail*0.055+air*2.53-plantation*90.6);
    // result.innerHTML= `petrol ${petrol} , electricity ${electricity},2-wheels ${two_Wheels} `;
    let ans1 =scope1 +scope2+scope3;
    ans =ans1.toFixed(3);
        result.innerHTML= `${ans} Tons `;
        plantation_required.innerHTML=`YOU SHOULD PLANT ${Math.ceil((ans/90.6))} TREES`;