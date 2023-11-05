$(document).ready(function () {
  const amenityIds = {};

  $('input[type=checkbox]').change(function () {
    const amenityId = $(this).data('id');

    if ($(this).is(':checked')) {
      amenityIds[amenityId] = $(this).data('name');

    } else {
      delete amenityIds[amenityId];
    }

    const amenityList = Object.values(amenityIds).join(', ');
    $('.amenities h4').text(amenityList);
  });

  $('BUTTON').click(function () {
    console.log(JSON.stringify(amenityIds));
  });
});
