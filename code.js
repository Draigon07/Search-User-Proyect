"use strict"

const container = document.querySelector('.container')
 const url = 'https://jsonplaceholder.typicode.com/users'
 let fragment = document.createDocumentFragment();
 const buscar = document.getElementById('search');
 const btn = document.querySelector('.btn_buscar')


 const deleteCom = str =>{      //Eliminar comillas 
    str = str.replace(/["']/g, "");
    return str
  }

  const parseJson = str =>{     //Parsear texto api
      str = JSON.stringify(str)
      return str
  }



 const getData = async()=>{
     try{
         const datos = await axios(url)
         const data = datos.data
         const search = await busqueda(data)
         console.log(search)
         data.forEach(data => {
             console.log(data)
             const divP = document.createElement('div');
             divP.classList.add('names')
             const elemt = {
                 nombre: data.name,
                 email: data.email,
                 adress: data.city
             }
             let jsonTxtName = parseJson(elemt.nombre);
             let clenTxt = deleteCom(jsonTxtName)
             divP.textContent = clenTxt;
             fragment.appendChild(divP);
             container.appendChild(fragment) ;  
         });

     }catch(e){
         console.log(e)

     }
 }




 


   

