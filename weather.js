const form=document.querySelector(".top-banner form");

const input=document.querySelector(".top-banner input");

const msg=document.querySelector("span.msg");

const list=document.querySelector(".ajax-section .cities")


//localStorage.setItem("apiKey",EncryptStringAES("346b0899c9b7d0f52312e560ac10f74e"));

form.addEventListener("submit",(e)=>{
   e.preventDefault()
   getWheatherDataFromApi();

})


const getWheatherDataFromApi=async()=>{
    //alert("htpp request gone")
    //input.value="";
    //* APİ YE İSTEK GÖNDERMEK İÇİN APİ KEYE İHTİYAÇ VARDIR.
    let apiKey=DecryptStringAES(localStorage.getItem("apiKey"));
    //console.log(apiKey);
    let inputVal=input.value;
    let unitType="metric";
    let lang="tr"
    let url=`https://api.openweathermap.org/data/2.5/weather?q={inputVal}&appid={apiKey}&units=${unitType}&lang=${lang}`;

    try{
        //const response=await fetch(url).then(response=>response.json())

        const response=await axios(url);  //default ==>get
        const {name,main,sys,weather} =response.data;

        let iconUrl=`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`


        const createdLi=document.createElement("li");
        createdLi.classList.add("city");
        const createdLiInnerHTML=`
           <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup> ${sys.country}/sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
              <img class="city-icon" src="https://openweathermap.org/img/wn/03n@2x.png"/>
             <figcaption>scattered clouds</figcaption>
           </figure>
        `

        

    }
    catch(error){
        console.log(error);

    }
     form.reset();
}



//*veri gönderirken ve alırken json formatında getirir.fetch yönteminde tekrar json formatına çevirmemiz gerek
//*fetch js native func iken axious bir pakettir.
//* axios için 