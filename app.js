window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            //proxy that allows you to fix cors issue when fetching api in localhost.
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/f00c94ee3dba375b6fbf4f29752e096f/${lat},${long}`;

            fetch(api)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)

                const {} = data.currently;
                const { temperature, summary } = data.currently;

            });
    });//end of if statement

    }

    
});//end of window event listener