$(document).ready(function() {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search';

  $.ajax({
    url: apiUrl,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}), // Empty dictionary
    success: function(data) {
      const placesSection = $('section.places');

      data.forEach(function(place) {
        delete place['owner'];
       
        const article = $('<article>');
        article.append('<h2>' + place['name'] + '</h2>');
        article.append('<div class="price_by_night">$' + place['price_by_night'] + '</div>');
        article.append('<div class="information"><div class="max_guest">' + place['max_guest'] + ' Guest(s)</div><div class="number_rooms">' + place['number_rooms'] + ' Bedroom(s)</div><div class="number_bathrooms">' + place['number_bathrooms'] + ' Bathroom(s)</div></div>');
        article.append('<div class="description">' + place['description'] + '</div>');
        placesSection.append(article);
      });
    }
  });
});
