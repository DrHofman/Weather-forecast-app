window.addEventListener('load', ()=> {
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
     long = position.coords.longitude;
     lat = position.coords.latitude;


     const api=`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=68e4e35471658351d4a8f39580067a2c/${lat},${long}`;


    fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
       });
    });
  }
});
