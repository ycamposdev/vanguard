import axios from "axios";

export async function videojuegoService() {
  try {
    const url = "https://api-libros-y1wv.onrender.com/libros/listar";
    const getVideojuegos = await axios.get(url);
    return getVideojuegos.data;
  } catch (error) {
    console.log(error);
  }
}
