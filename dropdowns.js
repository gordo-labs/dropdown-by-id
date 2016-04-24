function dropDown(idLauncher, idDropdown) {
  var dropDown = document.getElementById(idDropdown);
  var launcher = document.getElementById(idLauncher);
  window.addEventListener('click', function (event) {
    var tar = event.target.id;
    if ((tar === idLauncher) && (dropDown.style.display === "block")) {
      dropDown.style.display = "none";
      console.log('apagado-laucher');
    }
    else if ((dropDown.style.display === "none") && (tar === idDropdown || tar === idLauncher)) {
      dropDown.style.display = "block";
    }
    else {
      dropDown.style.display = "none";
    }
  });
  window.onscroll = function () {
    dropDown.style.display = "none";
  }
}

window.onload = function() {
  dropDown('launcher', 'dropdown');
};
