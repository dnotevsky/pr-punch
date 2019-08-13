$(document).ready(function() {

	// ---------------------------------------------
	//                     Website
	// ---------------------------------------------

	$(".menu-mob-btn").click(function(e){ // открытие моб меню
		e.preventDefault();
	});



  $(".navbar-toggler").click(function(e){// закрытие моб меню
    $(".navbar").toggleClass("open");
  });


	$('.scroll-from').click( function(){
		var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) { 
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
    }
    return false; 
	});

  if( $(".catalog-sites-slider").length) {
    $('.catalog-sites-slider').slick({ // слайдер на домашней странице
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: '<button type="button" class="btn btn-primary btn-ctrl slick-next"><i class="arrow-ico zmdi zmdi-chevron-right"></i></button>',
      prevArrow: '<button type="button" class="btn btn-primary btn-ctrl slick-prev"><i class="arrow-ico zmdi zmdi-chevron-left"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          }
        },
      ]
    });
  }

// ------------------filters---------------------------

  $(".select-filter__input").click(function() {
    if ($(this).closest('.select-filter').hasClass("open")) {
      $('.select-filter').removeClass("open");
      $('.select-filter').closest('.all-filters__li').removeAttr("style");
    } else {
      $('.select-filter').removeClass("open");
      $(this).closest('.select-filter').addClass("open");
      $(this).closest('.all-filters__li').css("z-index", "2");
    }  
  });

  function ControlSelect() {
    $(this).closest(".select-filter").find(".custom-control-input").each(function() {
      var name = $(this).attr("name");

      if ( $(this).prop("checked") ) {
        $(".custom-control-input[name="+name+"]").prop('checked', true);
      } else {
        $(".custom-control-input[name="+name+"]").prop('checked', false);
      }
    });
  }

  $(".custom-control-input").change(function() {
    $(this).each(function() {
      var name = $(this).attr("name");

      if ( $(this).prop("checked") ) {
        $(".custom-control-input[name="+name+"]").prop('checked', true);
      } else {
        $(".custom-control-input[name="+name+"]").prop('checked', false);
      }
    });
  })
  


  $(".select-filter .save").click(function() {
    
    $(".select-filter").each(function() {
      var val = "";
      $(this).find(".custom-control-input").each(function() {
        if ($(this).prop('checked')) {
          var thisVal = $(this).parent().find("label").text() + ", ";
          val = val + thisVal;
        }
      })

      if (val != "") {
        $(this).closest(".select-filter").find(".select-filter__input-text").text(val);
        $(this).closest(".select-filter").addClass("filter-add");
      } else {
        $(this).closest(".select-filter").removeClass("filter-add");
        var defval = $(this).closest(".select-filter").find(".select-filter__input-text").attr("default");
        $(this).closest(".select-filter").find(".select-filter__input-text").text(defval);
      }
    })

    $('.select-filter').removeClass("open");
    $('.select-filter').closest('.all-filters__li').removeAttr("style");
    ControlSelect();
  });

  $(".select-filter .reset").click(function() {
    $(this).closest(".select-filter").find(".custom-control-input").prop('checked', false);
    $(this).closest(".select-filter").find(".custom-control-input").each(function() {
      var name = $(this).attr("name");
      $(".custom-control-input[name="+name+"]").prop('checked', false);
    })
  });

  $(".open-filters-js").click(function() {
    $(".all-filters").addClass("visible");
  });

  $(".all-filters__close").click(function() {
    $(".all-filters").removeClass("visible");
  });

  $(".close-dropdown").click(function() {
    $(this).closest(".select-filter").removeClass("open");
    $('.select-filter').closest('.all-filters__li').removeAttr("style");
  });

  $(".media-details__demography-progress-text").each(function() { // заполнене прогрессбара в блоке ДЕМОГРАФИЯ страницы media-details.html
    var val = $(this).text();
    $(this).closest(".media-details__demography-progress").find(".media-details__demography-progress-line-val").css("width", val);   
  })
  


// ---------------------------------------------



// ---------------------------------------------
//                     Advertiser
// ---------------------------------------------


  $(".page-head__title-wrap.edit h2").on("click", function(){ // работа поля ввода заголовка в шапке страницы
    var data = $(this).text();
    var thisBlock = $(this).closest(".page-head__title-wrap");
    thisBlock.append("<textarea>" + data +"</textarea>").focus();
    thisBlock.find("textarea").focus();
    thisBlock.find("h2").remove();

    thisBlock.find("textarea").focusout(function(){
      var data = $(this).val();
      
      if (data == 0) {

        data = "Введите название кампании";

      } 
      thisBlock.find("textarea").remove();
      thisBlock.append("<h2>" + data + "<i class='edit-pen zmdi zmdi-edit'></i> </h2>");

    })

   });

  $(".add-article__edit-field.edit h4").click(function(){
    var thisBlock = $(this).closest(".add-article__edit-field");


    var data = $(this).text();

    type =  "."+ data.split('.').pop();
    
    thisBlock.append('<input type="text">');
    thisBlock.find("input").focus();
    $(this).remove();
    $(".add-article__edit-field h4").css("color", "#1F1D30");
    $(".add-article__edit-field .edit-pen").css("color", "#454A59");
    thisBlock.find("input").val(data).focus();
    thisBlock.find("input").focusout(function(){
      var data = $(this).val();
      type_2 =  "."+ data.split('.').pop();
    
      if (type == type_2) {
        type = "";
      } if (data == 0) {

        data = "Введите название статьи";

      } 
      thisBlock.find("input").remove();
      thisBlock.append('<h4>' +  data + type +'<i class="edit-pen zmdi zmdi-edit"></i></h4>');
      $(".add-article__edit-field h4").css("color", "#5F1562");
      $(".add-article__edit-field .edit-pen").css("color", "#BAC3D1");
    })
  });

  $('.tooltip-link').tooltip();

  $(".mob-bottom-menu .link-dropdown").click(function(e){ // поведение нижнего меню на моб страницах
    e.preventDefault();
    $(this).closest(".mob-bottom-menu").addClass("active");
  });

  $('#caution-popup').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var datatitle = button.data('title') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var datadesc = button.data('desc')
    var modal = $(this)
    modal.find('.modal-header').html("<h4>"+ datatitle + "</h4>")
    modal.find('.modal-body').html("<p>"+ datadesc + "</p>")
  })

  $('.toast').toast();



  $('.btn-mob').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.hide-mob').toggleClass('show');
  });



});