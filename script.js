
    function getData(){

    var showname = $('#showname').val();
    if(showname==""){
      alert("Enter show name");
      return false

    }

    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.tvmaze.com/singlesearch/shows?q='+showname, true);
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    console.log(data);
 

  if (request.status >= 200 && request.status < 400) {

    $('.img-src').css("background-image","url('"+data.image.original+"')");

    $('.avatar').attr("src",data.image.original);
    $('h1').text(data.name);

    $('.genre').text("");
    for (var i=0; i<= data.genres.length-1; i++) {

      $(".genre").append('<span class="mdl-chip"><span class="mdl-chip__text">'+data.genres[i]+'</span></span>');
     
    }

    if(data.rating.average!=null){
      $('.ratings').html("<div class='title'>Average rating</div><img src='star.png'>"+"<span>"+data.rating.average+"</span>"+"/10");
    }else{
      $('.ratings').html("<img src='star.png'>"+" N/A");
    }

    $('.synopsis').html(data.summary);
    $('.item1').html("<div class='title'>Language </div>"+data.language);
    $('.item2').html("<div class='title'>Runtime </div>"+data.runtime+" mins");
    $('.item3').html("<div class='title'>Type </div>"+data.type);
    $('.item4').html("<div class='title'>Status </div>"+data.status);

    $('.premiered').html("<div class='title'>Premiered on </div>"+data.premiered);
   
    $('.links').html("<a target='_blank' href='"+data.officialSite+"'><img src='website.png'></a><a target='_blank' href='"+data.url+"'><img src='tvmaze.png'></a>");
    $('.content').fadeIn();
    $('.welcome_msg').css("display","none");
  } else {
    console.log('error')
  }

}

request.send()

}

$(document).ready(function () {
  $('.blurred-image').css('opacity', "100");


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });

})

// $(document).ready(function() {
//     $(window).scroll(function(e) {
//         var s = $(window).scrollTop(),
//             opacityVal = (s / 100);

//         $('.blurred-image').css('opacity', "100");
//     });
// });

$(document).ready(function() {
  

            });
