/**
 * Created by Mateo on 13/10/2014.
 */
(function($){
    //Definición del plugin
    $.fn.customswitchbox = function(){

        this.each(function(){
            var $t = $(this),
                textoCheckeado = $t.attr('data-checked-text'),
                textoDescheckeado = $t.attr('data-unchecked-text'),
                estado = $t.prop("checked"),
                sliderClass = ($t.prop("checked"))?"checked":"",
                customSwitchbox = "<div class='custom-switcher-wrapper' data-estado='" + estado + "'><div class='custom-switchbox-slider " + sliderClass + "'><div class='texto-activo'>" + textoCheckeado + "</div><div class='custom-switch'></div><div class='texto-inactivo'>" + textoDescheckeado + "</div></div></div>";
            $t.append(customSwitchbox);
            $t.addClass('hide');
            $(customSwitchbox).insertBefore($t);

        });
        switcher();
        //Permitir el encademaniento
        return this;
    };
})(jQuery);

function switcher(){
    $(".custom-switcher-wrapper").on('click', function(){
        if($(this).attr("data-estado") == "true"){
            $(this).attr("data-estado", "false");
            $(this).siblings(".custom-switchbox").prop("checked", false);
            $(this).find(".custom-switchbox-slider").removeClass("checked");
        }else{
            $(this).attr("data-estado", "true");
            $(this).siblings("input[type=checkbox]").prop("checked", true);
            $(this).find(".custom-switchbox-slider").addClass("checked");
        }
    });
}
