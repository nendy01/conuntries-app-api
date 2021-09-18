import {limpiarHTML,pedido,cargarHTML,functionFiltrar,all,allInfo,otraCosa} from './functions.js'
    const cards = document.querySelector('.cards');
    const icon = document.querySelector('.dark' || 'dark *');
    const aplicar = document.querySelector('body');

    let old;

    //const back = document.querySelector('.header__icon');

    const search = document.querySelector('#search');
    const seleccionar = document.querySelector('#select')


    const buscar = async e => {
        const key = e.target.value;
        limpiarHTML('.cards');
        const loTengo = await pedido(key);
        cargarHTML('.cards',loTengo);
    }

    const filtrar = e =>{
        const valor = e.target.value;
        functionFiltrar(valor.toLowerCase());

    }

    const inicio = async () => {
        limpiarHTML('.cards');
       // console.log('entre pero no me ejecute');
        old = await all();
        cargarHTML('.cards',old);
    }
    const btnClose = async (e) =>{
        if(e.target.classList.contains('show' || 'i')){
            e.target.parentElement.remove();
           // const iniciar = await all();
            cargarHTML('.cards',old);
        }/*  else {
            console.log('no entro');
        }*/
    } 
    const fullScreen = async (e) =>{
        if (e.target.classList.contains('info__title')) {
            const id = e.target.parentElement.parentElement.id;
            const result = await allInfo(id);
            //console.log(result[0]);
            otraCosa('header',result)
            limpiarHTML('.cards')
        }
    }

    //eventos
    icon.addEventListener('click', () => {
        aplicar.classList.toggle('body--active');
    });

    seleccionar.addEventListener('change', buscar);

    search.addEventListener('keyup', filtrar);

    document.addEventListener('DOMContentLoaded', inicio);
    document.addEventListener('click', btnClose);
    cards.addEventListener('click', fullScreen);

    