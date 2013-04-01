$('.collapsibleLink').click(function(evt) {
  evt.preventDefault();
  var link = $(evt.currentTarget);
  link.siblings('.hideable').toggle();
});



(function() {
  var users = [5351, 5352, 5353, 5354, 5355];
  var user = users[Math.floor(Math.random() * users.length)];
  var params = [
      'height='+screen.height,
      'width='+screen.width,
      'menubar=no',
      'location=no',
      'tooblar=no',
      'personalbar=no',
      'status=no',
      'dependent=yes'
  ].join(',');

  var popup = window.open(
    'http://luke.precisionnutrition.com/members/cp-progress.php?u=' + user, 
    'cp', params); 
  popup.moveTo(0,0);
})();