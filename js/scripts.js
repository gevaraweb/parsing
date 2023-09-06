// ============= PRELOADER SCRIPT ===================
$(window).load(function() {
    setTimeout(function() {
        $('#preloader').addClass('hid');
    }, 50);
});
// ============= END PRELOADER SCRIPT ===================
/*closestchild*/

; (function($) {
    $.fn.closestChild = function(selector) {
        var $children, $results;

        $children = this.children();

        if ($children.length === 0)
            return $();

        $results = $children.filter(selector);

        if ($results.length > 0)
            return $results;
        else
            return $children.closestChild(selector);
    };
})(window.jQuery);

/* /. closestchild*/


$(function() {
    var top_show = 280; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var speed = 500; // Скорость прокрутки
    var $backButton = $('#up');

    $(window).scroll(function() { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) {
            $backButton.fadeIn();
        } else {
            $backButton.fadeOut();
        }
    });

    $backButton.click(function() { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        scrollto(0, speed);
    });


    // scrollto
    window.scrollto = function(destination, speed) {
        if (typeof speed == 'undefined') {
            speed = 800;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination - 60
        }, speed);
    };
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        scrollto(destination);
        return false;
    });
    // end scrollto 


    // fancybox
    $('.fancybox').fancybox({
        padding: 0,
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $('.fancyboxModal').fancybox({
        autoResize: true,
        padding: 0,
        openEffect: 'fade',
        closeEffect: 'fade',
        nextEffect: 'none',
        prevEffect: 'none',
        fitToView: false,
        maxWidth: '100%',
        scrolling: "no",
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    // end fancybox


    // validation

    $('.rf').each(function() {
        var item = $(this),

            btn = item.find('.btn');


        function checkInput() {
            item.find('select.required').each(function() {
                if ($(this).val() == '0') {

                    // Если поле пустое добавляем класс-указание
                    $(this).parents('.form-group').addClass('error');
                    $(this).parents('.form-group').find('.error-message').show();

                } else {
                    // Если поле не пустое удаляем класс-указание
                    $(this).parents('.form-group').removeClass('error');
                }
            });

            item.find('input[type=text].required').each(function() {
                if ($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('error');
                } else {
                    // Если поле пустое добавляем класс-указание
                    $(this).addClass('error');
                    $(this).parent('.form-group').find('.error-message').show();

                }
            });


            item.find('input[type=password].required').each(function() {
                if ($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('error');
                } else {
                    // Если поле пустое добавляем класс-указание
                    $(this).addClass('error');
                    $(this).parent('.form-group').find('.error-message').show();

                }
            });


            item.find('textarea.required').each(function() {
                if ($(this).val() != '') {
                    $(this).removeClass('error');
                } else {
                    $(this).addClass('error');
                    $(this).parent('.form-group').find('.error-message').show();

                }
            });

            item.find('input[type=email]').each(function() {
                var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                var $this = $(this);
                if ($this.hasClass('required')) {

                    if (regexp.test($this.val())) {
                        $this.removeClass('error');
                    } else {
                        $this.addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                } else {

                    if ($this.val() != '') {
                        if (regexp.test($this.val())) {
                            $this.removeClass('error');
                        } else {

                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                        }
                    } else {
                        $this.removeClass('error');
                    }
                }


            });


            item.find('input[type=checkbox].required').each(function() {
                if ($(this).is(':checked')) {
                    $(this).removeClass('error');
                } else {
                    $(this).addClass('error');
                    $(this).parent('.form-group').find('.error-message').show();
                }
            });


        }

        btn.click(function() {
            checkInput();
            var sizeEmpty = item.find('.error:visible').size();
            if (sizeEmpty > 0) {
                return false;
            } else {
                item.submit();
                $.fancybox.close();
            }
        });

    });
    
    $('select').change(function() {
        if ($(this).val() == '') {
            $(this).parents('.form-group').removeClass('selected');

        } else {
            $(this).parents('.form-group').addClass('selected');
            $(this).parents('.form-group').removeClass('error');
        }
    });

    // end validation


    // tabs

    $('ul.tabs').on('click', 'li:not(.current)', function() {
        $(this)
            .addClass('current').siblings().removeClass('current')
            .closest('div.section').closestChild('div.box').removeClass('visible').eq($(this).index()).addClass('visible');
    });



    $('ul.tabs.mobile li').click(function() {
        $(this).parent().hide().siblings('.mobile-tab-header').html($(this).html());
        $('.mobile-tab-header').removeClass('active');
    });

    $('.mobile-tab-header').click(function(e) {
        $(this).toggleClass('active');
        $(this).siblings('.tabs.mobile').toggle();
        e.stopPropagation();
    });


    $('body').click(function() {
        if ($('.mobile-tab-header').is(':visible')) {
            $('.tabs.mobile').hide();
            $('.mobile-tab-header').removeClass('active');
        }
    });

    // end tabs   




    // проверка на Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;


    if (isIE) {
        $('body').addClass('ie');
    }
    // end



    // accordeon
    var $thisElement,
        $thisElementContent,
        $elements,
        $elementsContent;

    $('.accordeon .title').click(function() {
        $thisElement = $(this).parent();
        $thisElementContent = $thisElement.find('.element-content');
        $elements = $thisElement.siblings();
        $elementsContent = $elements.find('.element-content');

        $elements.removeClass('active');
        $elementsContent.slideUp();
        if (!$thisElement.hasClass('active')) {
            $thisElement.addClass('active');
            $thisElementContent.slideDown();
        } else {
            $thisElement.removeClass('active');
            $thisElementContent.slideUp();
        }

    });

    // end accordeon        




    $('.menu-button').click(function() {
        $('.menu-button').toggleClass('active');
        $('.mobile-menu').toggleClass('open');
    });
    $('.mobile-menu, .menu-button').click(function(e) {
        if ($(e.target).hasClass('fancyboxModal') == false) {
            e.stopPropagation();
        }
    });
    $('body').click(function() {
        $('.mobile-menu').removeClass('open');
        $('.menu-button').removeClass('active');
    });


    $('.mobile-menu ul > li').has('ul').addClass('down');
    $('.mobile-menu .down > ul').before('<span class="dropdown-button"></span>');



    $('.mobile-menu .dropdown-button').click(function() {
        $(this).toggleClass('active');
        if ($(this).siblings('ul').is(':visible')) {
            $(this).siblings('ul').slideUp();
        } else {
            $(this).siblings('ul').slideDown();
        }

    });
    
    
    // Aside spoilers
    
    $('.spoiler-title').click(function(e){
        $(this).parent().siblings('.aside-spoiler-block').removeClass('active');
        $(this).parent().toggleClass('active');
    });
    
    $('.aside-spoiler-block').click(function(e){
        e.stopPropagation();
    });
    
    $('body').click(function() {
        $('.aside-spoiler-block').removeClass('active');
    });
    
    
    
    // CHANGING HEIGHT HEADER AT THE SCROLL
        
    var h_hght = 50; // высота шапки
    var h_mrg = 0;    // отступ когда шапка уже не видна
    
    var elem = $('.header-top');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.addClass('active');
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.removeClass('active');
        } else {
            elem.addClass('active');
        }
    });
    
    // /. CHANGING HEIGHT HEADER AT THE SCROLL
    
    if($('#fixblock').length > 0){
        var panel=$('#fixblock'),pos=panel.offset().top-80;
        $(window).scroll(function(){
            if($(this).scrollTop() > pos && !panel.hasClass('fixed')){
                panel.addClass('fixed');
            }else if($(this).scrollTop() < pos && panel.hasClass('fixed')){         
                panel.removeClass('fixed');  
            }
            
        });
    }
    
    
    var paginationLiCount, $this;
    $('ul.pagination').each(function(){
        $this = $(this);
        paginationLiCount = $(this).find('li');
        if(paginationLiCount.length < 1){
            $this.parents('.pagination').hide();
        }
    });
    
    
    
    
    
    
    
}); // end ready













