import axios from "axios"
export const getProductos = async() => {
    try{
        const response = await axios.get(`http://localhost:5000/producto`);
        return response
    }
    catch(error){
        console.log(error)
    }
};
export const deleteProduct = async(id) => {
    try {
        return await axios.delete(`http://localhost:5000/producto/${id}`)

    } catch (error) {
        console.log(error)
    }
}