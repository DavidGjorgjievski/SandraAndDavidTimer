document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  // var FirstJulyContdown = (new Date().getTime() / 1000) + (86400 * 43) + 1;
  // 3741306
  // 3738960
    var countDownDate = (new Date("Oct 1, 2022 00:00:00").getTime() - new Date().getTime())/1000;
    var FirstJulyContdown = (new Date().getTime() / 1000) + (countDownDate) + 1;
  


  // Set up FlipDown
  var flipdown = new FlipDown(FirstJulyContdown)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    body.querySelector('#title').classList.toggle('title_black');
    body.querySelector('#title').classList.toggle('title_white');
    body.querySelector('#Love').classList.toggle('Love_black');
    body.querySelector('#Love').classList.toggle('Love_white');

  }, 50000);
});
