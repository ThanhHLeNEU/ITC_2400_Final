
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  
  document.getElementById('dialogplay').addEventListener('click', function(e) {
    console.log('Dialog clicked'); // Kiểm tra xem có log ra không
    document.getElementById('popup-content').classList.remove('hidden');
  });
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup-content').classList.add('hidden');
    // Dừng video
    const video = document.querySelector('#popup-content video');
    if (video) {
        video.pause();
    }
  });
