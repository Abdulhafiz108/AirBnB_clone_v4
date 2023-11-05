$(document).ready(function () {
  const apiurl = 'http://0.0.0.0:5001/api/v1/status/';
  const apiStatusDiv = $('#api_status');

  $.get(apiUrl, function(data) {
    if (data.status === 'OK') {
      apiStatusDiv.addClass('available');
    } else {
      apiStatusDiv.removeClass('available');
    }
  });
});
