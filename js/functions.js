const limpiarHTML = (main) => {
    const elemento = document.querySelector(main);
     while(elemento.firstElementChild){
         elemento.firstElementChild.remove();
     }
 }
 
 const cargarHTML = (main,recorer) =>{
     const cards = document.querySelector(main);
     const frag =document.createDocumentFragment();
 
     recorer.forEach(element => {
         const {flag,name,population,region,capital} = element;
 
         const card = document.createElement('div');
         card.classList.add('cards__card');
         card.setAttribute('id',`${name}`);
 
         const img = document.createElement('img');
         img.src = flag;
 
         const info = document.createElement('div');
         info.classList.add('card__info');
 
         const title = document.createElement('h2');
         title.classList.add('info__title');
         title.textContent = name;
 
         const popularidad = document.createElement('p');
         popularidad.classList.add('info__easy');
         popularidad.textContent = `population: ${population}`;
 
         const reguion = document.createElement('p');
         reguion.classList.add('info__easy');
         reguion.textContent = `region: ${region}`;
 
 
         const capitall = document.createElement('p');
         capitall.classList.add('info__easy');
         capitall.textContent = `capital: ${capital}`;
 
         info.append(title,popularidad,reguion,capitall);
         card.append(img,info);
         frag.appendChild(card);
     });
     cards.appendChild(frag);
 }
 
 const pedido = async (key) => {
     const url = `https://restcountries.eu/rest/v2/region/${key}`;
     try {
         const result = await fetch(url);
         const ya = await result.json();
         return ya;
     } catch (error) {
         console.log(error);
     }
 }
 
 const functionFiltrar = (valor) =>{
     const cards = document.querySelectorAll('.cards__card');
 
      cards.forEach(element => {
          element.id.toLowerCase().includes(valor) ? element.classList.remove('none') : element.classList.add('none');
     }); 
 }
 
 const all = async () =>{
     const url = `https://restcountries.eu/rest/v2/all`;
     try {
         const result = await fetch(url);
         const todo = await result.json();
         return todo;
     } catch (error) {
         console.log(error);
     }
 }
 
 
 const allInfo = async (keyword) =>{
     const url = `https://restcountries.eu/rest/v2/name/${keyword}`;
     try {
         const resultado = await fetch(url);
         const one = await resultado.json();
         return one;
     } catch (error) {
         console.log(error);
     }
 }
 
 const otraCosa = (header,arreglo) => {
     const heder = document.querySelector(header);
 
     arreglo.forEach( uno =>{
         const article = document.createElement('article');
         article.classList.add('allInfo');
         console.log(uno);
        // const test = uno.currencies[0].name;
 
         let guardar ;
         uno.languages.forEach(objeto => {
             if (guardar === undefined) {
                 guardar = objeto.name;
             } else {
                 guardar += `,${objeto.name}`;
             }
         });
 
          let otra;
 
          uno.currencies.forEach(objeto => {
             if (otra === undefined) {
                 otra = objeto.name;
             } else {
                 otra += `,${objeto.name}`;
             }
         });
 
         article.innerHTML = `
         <div class="show"><i class="fas fa-long-arrow-alt-left i"></i> Back</div>
 
         <img src="${uno.flag}"/>
         <article class="Info">
             <h2 class="allInfo__title">${uno.name}</h2>
             <div class="containerInfo">
                 <div class="first">
                     <p>Native name: ${uno.nativeName}</p>
                     <p>population: ${uno.population}</p>
                     <p>region: ${uno.region}</p>
                     <p>Sub region: ${uno.subregion}</p>
                     <p>capital: ${uno.capital}</p>
                 </div>
                 <div class="last">
                     <p>top Level Domain: ${uno.topLevelDomain.join()}</p>
                     <p>currencies: ${otra}</p>
                     <p>languages: ${guardar}</p>
                 </div>
             </div>
             <div class="down">
                 <p class="countries">border-countries:</p>
             <ul class="ul">
             
             </ul>
             </div>
         `;
         heder.after(article);
 
         const ul = document.querySelector('.ul');
 
     uno.borders.forEach( pais => {
         const li = document.createElement('li');
         li.textContent = pais;
         ul.appendChild(li);
     });
     });
 
 }
 
 export {limpiarHTML,pedido,cargarHTML,functionFiltrar,all,allInfo,otraCosa}