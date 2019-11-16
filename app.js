window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/f00c94ee3dba375b6fbf4f29752e096f/${lat},${long}`;

            fetch(api)
            .then(res => {
                return res.json();
            })
    });//end of if statement

    }

    
});//end of window event listener