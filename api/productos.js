export const API_HOST ="http://0.0.0.0"

export async function getProductsApi(){

    try{

        const url = `${API_HOST}/api/v1/productos`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error){
        throw(error);

    }

}

  export async function getProductDetailsByUrlApi(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getProductDetailsApi(id) {
    try {
      const url = `${API_HOST}/producto/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

/* 
export async function saveProductApi(product){
    try {

        const url = `${API_HOST}/api/v1/productos`;
        const response = await fetch(url, {

            method: 'POST',
            
            body: JSON.stringify(product),
            
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        
        return result;

    } catch(error) {

        throw error;

    }
} */