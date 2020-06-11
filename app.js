document.addEventListener('DOMContentLoaded', () => {

    // Obtener inputs
    const latitud = document.getElementById('latitud');
    const longitud = document.getElementById('longitud');
    const btnprocesar = document.getElementById('procesar');
    const caja_mapa = document.getElementById('caja_mapa');
    let data = {};
    let map;

    btnprocesar.addEventListener('click', () => {
        procesar();
    });

    const procesar = async () => {
        data.v_latitud = parseFloat(latitud.value);
        data.v_longitud = parseFloat(longitud.value);
        if(data.v_latitud && data.v_longitud) {
            await initMap(data);
            caja_mapa.style.display = 'block';
        }
        else
            throw new Error("No ingresaste correctamente pancholo");
    }

    
    async function initMap(data) {
        try {
            map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: data.v_latitud, lng: data.v_longitud},
            zoom: 13,
            });
            var marker = new google.maps.Marker({
            position: {lat: data.v_latitud, lng: data.v_longitud},
            map: map,
        title: 'Acuario de Gijón'
            });
    } catch(e) {
        console.error(e);
    }
   }

});