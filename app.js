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
        const parent=document.getElementById('phone-contaniner')
        const div=document.createElement('div')
            div.innerHTML=`
                <div class="card border ">
                        <div class="phone-pic">
                            <img  src="" alt="">
                        </div>
                        <h4>Brand:</h4>
                        <h4>Ph_Name:</h4>
                        <div class="allbutton">
                            <button class="btn btn-danger" >delete</button>
                            <button class="btn btn-success" >details</button>
                        </div>
                        
                </div>`
         
         parent.appendChild(div)
         
    }  
       
   
    

}



