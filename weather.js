const form=document.querySelector(".top-banner form");

const input=document.querySelector(".top-banner input");

const msg=document.querySelector("span.msg");

const list=document.querySelector(".ajax-section .cities")


//localStorage.setItem("apiKey",EncryptStringAES("346b0899c9b7d0f52312e560ac10f74e"));

form.addEventListener("submit",(e)=>{
   e.preventDefault()
   getWheatherDataFromApi();

})


const getWheatherDataFromApi=()=>{
    //alert("htpp request gone")
    //input.value="";
    //* APİ YE İSTEK GÖNDERMEK İÇİN APİ KEYE İHTİYAÇ VARDIR.
    let apiKey=DecryptStringAES(localStorage.getItem("apiKey"));
    //console.log(apiKey);
    let inputVal=input.value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
     form.reset();
}



//*veri gönderirken ve alırken json formatında getirir.fetch yönteminde tekrar json formatına çevirmemiz gerek
//*fetch js native func iken axious bir pakettir