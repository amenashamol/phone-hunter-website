const searchPhone=()=>{
    document.getElementById('phone-contaniner').innerHTML=""
   
    //document.getElementById('spinner').style.display='block'
    //document.getElementById('spinner1').style.display='block'

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
    .then(phones=>displayPhone(phones.data.slice(0,6)))
        
        
}

const displayPhone=(phones)=>{
    
    for(const phone of phones){
       
        const parent=document.getElementById('phone-contaniner')
        const div=document.createElement('div')
            div.innerHTML=`
                <div class="card border mb-3   ">
                        <div class="phone-pic text-center">
                            <img class="w-100 mb-3" src="${phone.image}" alt="">
                        </div>
                        
                        <h5 class="text-center mb-3" ><span class="text-danger">Ph_Name:</span> ${phone.phone_name}</h5>
                        <div class="allbutton text-center">
                            <button  class="btn btn-danger" >delete</button>
                            <button onclick="details('${phone.slug}')" class="btn btn-success" >details</button>
                        </div>
                        
                </div>`
         
         parent.appendChild(div)

         
    }  
       
}

const details=(info)=>{
    console.log(info)
 const url=` https://openapi.programming-hero.com/api/phone/${info}`
 fetch(url)
 .then(res=>res.json())
 .then(detail=>setDetails(detail.data))
}

const setDetails=(info)=>{
  document.getElementById('detail-contaniner').innerHTML=`
  <div>
  <h5 class="text-center"><span class="text-info">Storage:</span> ${info.mainFeatures.storage}</h5>
  <h5 class="text-center" ><span class="text-info">Memory:</span> ${info.mainFeatures.memory}</h5>
  <h5 class="text-center"><span class="text-info">Slug:</span> ${info.slug}</h5>
  <h5 class="text-center"><span class="text-info">Releasedate:</span> ${info.releaseDate}</h5>

  </div>
  `

}