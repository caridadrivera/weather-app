window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDegree = document.querySelector('.temperature-degree');
    let tempDescription = document.querySelector('.temperature-description');
    let timezone = document.querySelector('.location-timezone');
    let icon = document.getElementById('icon');
    // console.log(icon)

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

                // const {} = data.currently;
                const { temperature, summary, icon } = data.currently;
                console.log(temperature)
                //set DOM elements from the API
                tempDegree.textContent = temperature;
                tempDescription.textContent = summary;
                timezone.textContent = data.timezone;
                

                //invoke setIcon function 
                setIcon(icon, document.querySelector(".icon"))


            });
    });//end of if statement

    }
    
    function setIcon(icon, iconId){
        const skycons = new Skycons({color: "pink"});
        //my API icon description contains a -, that we want to replace with an _ because of the rules of the skycon
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);

    }//end of set icon function.
    
});//end of window event listener

// module.exports = getCurrentPosition();