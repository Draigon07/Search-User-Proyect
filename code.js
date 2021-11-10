"use strict"

const container = document.querySelector('.container')
 const url = 'https://jsonplaceholder.typicode.com/users'
 let fragment = document.createDocumentFragment()


 const getData = async()=>{
     try{
         const datos = await axios(url)
         const data = datos.data
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
             divP.textContent = clenTxt
             fragment.appendChild(divP)
             container.appendChild(fragment)   
         });

     }catch(e){
         console.log(e)

     }
 }


 const deleteCom = str =>{
    str = str.replace(/["']/g, "");
    return str
  }

  const parseJson = str =>{
      str = JSON.stringify(str)
      return str
  }


 getData()

