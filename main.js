// window.addEventListener("resize", function() {
//  if (window.innerWidth > 767) {
//   var divs = document.querySelector('.search__img');
//   console.log(divs.children.length);
//   var b =document.querySelector('.search__img').childNodes[5];
//  var c = document.querySelector('.search__img').childNodes[6];
//     console.log(c);
//   c.classList.add('search__col--2xwidth');
//   b.classList.add('search__col--2xwidth');

//  // alert ("helo");
//   c.appendChild(divs);
//   b.appendChild(divs);
//  }

//  });


function getimage() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.unsplash.com/photos/random?count=8&client_id=ad84ccddc92c6ca64f80da888231a5f3b02395feffac2a210335b05e99294966', true);
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
    } else {
      // We reached our target server, but it returned an error
    }
    var dif = document.querySelector('.search');
    var block = document.createElement("div");
    block.classList.add('search__img');
    dif.appendChild(block);
    var data = JSON.parse(this.response);
    // console.log('data',data);
    for (i = 0; i < 7; i++) {
      var img = data[i];
      // console.log('data[i]',data[i]);
      var url = img.urls.raw;
      // console.log(url);
      const element = document.querySelector('.search__img');
      var newimg = document.createElement("img");
      var col = document.createElement("div");
      col.classList.add('search__col');
      element.appendChild(col);
      newimg.classList.add('search__url');
      newimg.setAttribute("src", img.urls.small);
      col.appendChild(newimg);
      var sp2 = document.getElementById("search");
      var parentDiv = sp2.parentNode;
      parentDiv.insertBefore(element, sp2);
    };
  };
  request.onerror = function () {
    // There was a connection error of some sort
  };

  request.send();

};
getimage();

function handler() {
  var img = document.getElementById('inp_1').value;
  //     console.log (img);
  // alert (img);
  function getImg() {
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.unsplash.com/search/photos?query=${img}?count=8&client_id=ad84ccddc92c6ca64f80da888231a5f3b02395feffac2a210335b05e99294966`, true);
    //console.log(`https://api.unsplash.com/search/photos?query=?count=8&client_id=ad84ccddc92c6ca64f80da888231a5f3b02395feffac2a210335b05e99294966`);
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        var data = JSON.parse(this.response);
      } else {
        // We reached our target server, but it returned an error
      }
      var data = JSON.parse(this.response);
      //console.log('data', data);
      for (var i = 0; i < 7; i++) {
        var image = data.results[i];
        // console.log('image', image);
        var url = image.urls.small;
        //console.log('url', url);
        const element = document.querySelectorAll('.search__col');
        var myImg = document.querySelectorAll(".search__url");


        myImg[i].setAttribute("src", url);
        element[i].appendChild(myImg[i]);

      }

    }
    request.onerror = function () {
      //   // There was a connection error of some sort
    }
    request.send();
    var reset = document.getElementById('inp_1').value = "";
    reset.innerHTML;
  }
  getImg();
}
elem.addEventListener("click", handler);