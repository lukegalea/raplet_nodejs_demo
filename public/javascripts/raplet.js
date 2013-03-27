$('.collapsibleLink').click(function(evt) {
  evt.preventDefault();
  var link = $(evt.currentTarget);
  link.siblings('.hideable').toggle();
});