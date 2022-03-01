const searchPhone=()=>{
    const searchtext=document.getElementById('input-value').value
    if(searchtext==''){
        document.getElementById('error').style.display='block'
    }
    else{
        document.getElementById('error').style.display='none'
        loadPhone(searchtext)
        document.getElementById('input-value').value=''
    }

    
}

const loadPhone=(searchtext)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchtext}`
   
    fetch(url)
    .then(res=>res.json())
    .then(phones=>displayPhone(phones.data))

}

const displayPhone=(phones)=>{
    
    for(const phone of phones){
       console.log(phone)
        
       
   
    

}

}



