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
    alert("htpp request gone")
    //input.value="";
    form.reset();
}