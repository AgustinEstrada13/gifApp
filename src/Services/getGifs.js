
//* ES: Función simple que hace la petición a la API de acuerdo a las solicitudes que haga el usuario, estas mismas entran mediante props. 
//* EN: // * Simple function that makes the request to the API according to the requests made by the user, these are entered through props.

export const getGifs = async (category, numImages) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=${numImages}&q=${encodeURI(category)}&api_key=umucPVeT4olRI9Bmf3KbRYWLoVA7vy22`
    const resp = await fetch(url);
    const { data } = await resp.json(); // desestructura la data

    //* ES: Mapeo la información que voy a utilizar unicamente. 
    //* EN: I map the information that I will use only.

  
    
    let gifs = data.map(img => {
            return {
                id: img.id === "" ? "Not found id": img.id,
                tittle: img.title === "" ? "Not found tittle": img.title, 
                url: img.images?.downsized_medium.url === "" ? "https://media.tenor.com/images/2d39c2937b6adcf2e9f0b7bd258fb3f8/tenor.gif":img.images?.downsized_medium.url

            }
    })
   
    if(data.length === 0 ){
        gifs = [{
            id:'N',
            tittle:"Not found",
            url: "https://media.tenor.com/images/2d39c2937b6adcf2e9f0b7bd258fb3f8/tenor.gif"
        }]
    }
    return  gifs;
}