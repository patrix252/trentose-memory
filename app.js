/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var counter = 1;

$(document).ready(function () {
  var cards = $('.cards').children();
  var shuffleData = generateData(10);

  initializeGame(cards, shuffleData);



  $(cards).click(function () {
    var id = $(this).attr('id');

    if (shuffleData[id] == counter) {
      $(this).attr('class', 'done');
      counter++;
      if(counter == 11) {
        alert('you win');
        initializeGame(cards, shuffleData);
      }
    } else {
      alert('you lose');
    }

  });

  $('.opt-start').click(function() {
    $(cards).attr('class', 'hidden');
    counter = 1;
  })

});





function initializeGame(cards, shuffleData) {
  counter = 1;

  $(cards).each( function(index) {
    var id = $(this).attr('id');
    var text = $(this).find('h3');
    $(text).text(shuffleData[id]);

    $(this).attr('class', 'done');
  });
}
