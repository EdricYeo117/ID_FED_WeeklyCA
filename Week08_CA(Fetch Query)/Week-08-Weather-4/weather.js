document.addEventListener("DOMContentLoaded", function() {
var url = "https://api.data.gov.sg/v1/environment/psi?date_time=2016-06-27T23:00:00&date=2016-06-27";
fetch(url)
  .then(function(response) {
  return response.json();
  })
  .then(function(data) {
    console.log("API status: " + data.api_info.status);
    var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
    var content = "";
    for (var key in reading_twenty_four) {
    console.log(key + ": " + reading_twenty_four[key]);
    content += key + ": " + reading_twenty_four[key] + "<br/>";
    }
    document.getElementById("psi-twenty-four-hourly").innerHTML = content;
    var reading_three = data.items[0].readings.psi_three_hourly;
    var content1 = "";
    for (var key in reading_three)
      {
        console.log(key + ": " + reading_three[key]);
        content1 += key + ": " + reading_three[key] + "<br/>";
      }
    localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
    })
  .catch(function(error) {
  console.error(error);
  });
});