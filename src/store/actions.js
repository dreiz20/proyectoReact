import axios from 'axios'

const lista = {
    drinks: []
}


export const fetchLista = () => async () => {
    const { data } = await axios.get('https://thecocktaildb.com/api/json/v1/1/list.php?i=list')

    const { strGlass, strIngredient1 } = data;
}