"use strict"

 
 let fragment = document.createDocumentFragment();
 const container = document.querySelector('.filtro_busqueda');
 const warning = document.querySelector('.warnings');
 const names_container = document.querySelector('.names_container')


 const deleteCom = str =>{      //Eliminar comillas 
    str = str.replace(/["']/g, "");
    return str
  }

  const parseJson = str =>{     //Parsear texto api
      str = JSON.stringify(str)
      return str
  }


 const getDataUsers = (data)=>{
     const datos = data.forEach(dat =>{
         const text = parseJson(dat.Name)
         const  name = document.createElement('h2');
         name.classList.add('name')
         name.textContent = deleteCom(text)
         fragment.appendChild(name)
         names_container.appendChild(fragment)
     })
 }

 getDataUsers(Users)

 

 const usersFilters = document.querySelector('.card-filter');
 const d = document;
 

 const filters = (input) =>{
     d.addEventListener('keyup',()=>{
         const transInput = input.value.toLocaleLowerCase()
         console.log(transInput)
         const users = [...document.querySelectorAll('.name')]
         users.forEach(el => {
             let text = el.textContent.toLocaleLowerCase();
             const val = text.includes(transInput)? el.classList.remove("hide"): el.classList.add("hide")  
         })
         
     })  
 }

 filters(usersFilters)


 



 

 


 








 

 


   

