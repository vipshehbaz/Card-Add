let btn = document.getElementById("btn");

let pVName = document.getElementById("pVName");
let pCName = document.getElementById("pCName");
let pViews = document.getElementById("pViews");
let pHowOld = document.getElementById("pHowOld");
let pVlength = document.getElementById("pVlength");

btn.addEventListener("click", () => {
  let vThumbnail = document.getElementById("vThumbnail");

  if (vThumbnail.files && vThumbnail.files[0]) {
    var file = vThumbnail.files[0];

    var reader = new FileReader();

    reader.onload = function (e) {
      let pVThumbnail = document.getElementById("pVThumbnail");

      pVThumbnail.src = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    alert("No file selected. Please select an image file.");
  }

  let vName = document.getElementById("vName").value;
  let cName = document.getElementById("cName").value;
  let views = document.getElementById("views").value;
  let howOld = document.getElementById("howOld").value;
  let vlength = document.getElementById("vlength").value;

  pVThumbnail.src = vThumbnail;
  pVName.innerHTML = vName;
  pCName.innerHTML = cName;
  pViews.innerHTML = views + " views";
  pHowOld.innerHTML = howOld + " ago";
  pVlength.innerHTML = vlength;
});

