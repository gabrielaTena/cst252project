new fullpage('#fullpage', {
  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

$('#getActiveSlide').click(function(){
   console.log(fullpage_api.getActiveSlide());
});

$('#getActiveSection').click(function(){
   console.log(fullpage_api.getActiveSection());
});
