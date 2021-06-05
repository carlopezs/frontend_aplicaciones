
export const getProducts = async () => {
    const url = "https://proyecto-nosotros.herokuapp.com/productos";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
