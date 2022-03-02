//search phone
const searchPhone=()=>{
    document.getElementById('detail-contaniner').innerHTML="" 
    document.getElementById('phone-contaniner').innerHTML=""
    document.getElementById('spinner').style.display='block'
    document.getElementById('spinner1').style.display='block'

    const searchtext=document.getElementById('input-value').value
    if(searchtext==''){
        document.getElementById('error').style.display='block'
        document.getElementById('spinner').style.display='none'
        document.getElementById('spinner1').style.display='none'
    }
    else{
        document.getElementById('error').style.display='none'
        loadPhone(searchtext)
        document.getElementById('input-value').value=''
    }

    
}


// calling phone_name API

const loadPhone=(searchtext)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchtext}`
    
    fetch(url)
    .then(res=>res.json())
    .then(phones=>{
        
        if(phones.data.length==0){
            document.getElementById('spinner').style.display='block'
            document.getElementById('spinner1').style.display='block'

            //set timeout to stop loading
            setTimeout(()=>{
                document.getElementById('spinner').style.display ='none'
                document.getElementById('spinner1').style.display='none'
            }, 2000)

            //set timeout showing no-found message
           setTimeout(()=>{
                document.getElementById("no-found").style.display="block"
            },2000)
            
        }

        else{
            displayPhone(phones.data.length>20?phones.data.slice(0,20):phones.data)
            document.getElementById("no-found").style.display="none"
        }
    })
        
}

//display phone by receiving phones data 

const displayPhone=(phones)=>{
    
   phones.forEach(phone => {
       
    const parent=document.getElementById('phone-contaniner')
        const div=document.createElement('div')
            div.innerHTML=`
                <div class="card border border-2 border-secondery mb-3   ">
                        <div class="phone-pic text-center ">
                            <img class="w-75 mb-3 mt-2 " src="${phone.image}" alt="">
                        </div>
                        <h5 class="text-center mb-3" ><span class="text-danger">Brand:</span> ${phone.brand}</h5>
                        <h5 class="text-center mb-3" ><span class="text-danger">Ph_Name:</span> ${phone.phone_name}</h5>
                        <div class="allbutton text-center">
                            
                            <button onclick="details('${phone.slug}')" class="btn btn-success" >details</button>
                        </div>
                </div>`
         
         parent.appendChild(div)

    } ) 
    document.getElementById('spinner').style.display='none'
    document.getElementById('spinner1').style.display='none' 
}


// calling API by Id to display phone details 

const details=(info)=>{
    const url=` https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
    .then(res=>res.json())
    .then(detail=>setDetails(detail.data))
}

//Set details by receiving Id

const setDetails=(info)=>{
  document.getElementById('detail-contaniner').innerHTML=`
  <div >
    <div class=" text-center mb-3 mt-2">
         <img  class=" w-50 text-center " src=" ${info.image}" alt="">
    </div>

    <h5 class="text-center "><span class="text-danger">Storage:</span> ${info.mainFeatures.storage}</h5>
    <h5 class="text-center" ><span class="text-danger">Memory:</span> ${info.mainFeatures.memory}</h5>
    <h5 class="text-center"><span class="text-danger">Displaysize:</span> ${info.mainFeatures.displaySize}</h5>
    <h5 class="text-center"><span class="text-danger">Releasedate:</span> ${info.releaseDate?info.releaseDate:'none'}</h5>
    
    <div class="  bg-light mb-4 mt-4 font-weight: 600 ">
        <h4 class="text-center text-primary">Sensors:</h4>

        <ul class="list-unstyled   ">
            <li><span class="text-danger px-2" >0:  </span>   ${info.mainFeatures.sensors[0]}</li>
            <li><span class="text-danger px-2" >1:  </span>   ${info.mainFeatures.sensors[1]}</li>
            <li><span class="text-danger px-2" >2:  </span>   ${info.mainFeatures.sensors[2]}</li>
            <li><span class="text-danger px-2" >3:  </span>   ${info.mainFeatures.sensors[3]}</li>
            <li><span class="text-danger px-2" >4:  </span>   ${info.mainFeatures.sensors[4]}</li>
            <li><span class="text-danger px-2" >5:  </span>   ${info.mainFeatures.sensors[5]}</li>
        </ul>
    </div>
    
    <div class="bg-light mb-4">
        <h4 class="text-center text-primary font-weight: 600">Others:</h4>

        <h5 class="text-center"><span class="text-danger">WLAN:</span> ${info.others.WLAN}</h5>
        <h5 class="text-center"><span class="text-danger">GPS:</span> ${info.others.GPS}</h5>
        <h5 class="text-center"><span class="text-danger">USB:</span> ${info.others.USB}</h5>
    </div>

    
    
        
    
    </div>
  `

}


