var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/find?units=metric&appid=a84f388dc2b6924badb0386440ee7643";

module.exports = {
  getTemp: function (location) {
    var requestedURL = OPEN_WEATHER_MAP_URL
    + '&q='
    + encodeURIComponent(location);

    return axios.get(requestedURL).then(
      function (res) {
        // console.log(requestedURL);
        return res.data.list[0].main.temp;
        //
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
          // throw new Error("New error message");
        } else {
          return res.data.list[0].main.temp;
        }
      },
      function (err) {
        throw new Error(err.data.message);
        // throw new Error("Ultimate error message");
      }
    );
  }
}
