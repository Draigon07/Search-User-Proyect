"use strict"

 const url = 'https://jsonplaceholder.typicode.com/users'
 let fragment = document.createDocumentFragment();


 const getDataAPI = async ()=>{
     try{
         const datosApi = await axios(url);
         const datos = datosApi.data
         console.log(datos) 
         const data = await showData(datos)
         console.log(data)

     }catch(e){

     }
 }

 getDataAPI()

 const showData = async(data)=>{
     try{
         const datos = {
             Nombre: data.nombre,
             email : data.email
         }
    
         Object.entries(datos).forEach(dat =>{
             console.log(dat)
         })

     }catch(e){
         console.log(E)
     }

 }


 const deleteCom = str =>{      //Eliminar comillas 
    str = str.replace(/["']/g, "");
    return str
  }

  const parseJson = str =>{     //Parsear texto api
      str = JSON.stringify(str)
      return str
  }



const cardFilters = document.querySelector('.card-filter');
const card = document.querySelectorAll('.card')
const d = document



const Filters = (input)=>{
    d.addEventListener('keyup',()=>{
        console.log(input.value);

        card.forEach(el =>{
            let text = el.textContent.toLocaleLowerCase();
            console.log(text)
            const val =  text.includes(cardFilters.value)? el.classList.remove("filter") :el.classList.add("filter");
        
        })  
    })
}

Filters(cardFilters)






 

 


   

