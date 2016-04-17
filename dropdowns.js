
function dropDown(idLauncher, idDropdown) {
  var dropDown = document.getElementById(idDropdown);
  var launcher = document.getElementById(idLauncher);
  window.addEventListener('click', function (event) {
    if (event.target.id == idLauncher) {
      dropDown.style.display = "block";
    }
    else {
      dropDown.style.display = "none";
    }
  });
}

function dropDownTouch(idLauncher, idDropdown) {
  var dropDown = document.getElementById(idDropdown);
  var launcher = document.getElementById(idLauncher);
  var dropclass = dropDown.className
  launcher.onclick = function () {
    if (dropDown.style.display === "none") {
      dropDown.style.display = "block";
    } else {
      dropDown.style.display = "none";
    }
  }
  window.onscroll= function () {
      dropDown.style.display = "none";
  }
}