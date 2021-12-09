$(document).ready(function(){
    $('input.input-qty').each(function() {
        var $this = $(this),
            qty = $this.parent().find('.is-form'),
            min = Number($this.attr('min')),
            max = Number($this.attr('max'))
        if (min == 0) {
            var value = 0
        } else {
            value = min   
        }
        $(qty).on('click', function(){

            if ($(this).hasClass('minus')) {
                if (value > min) {
                    value += -1
                    if(value == min) {
                        $('.order-btn').addClass('disabled')
                        $('.order-information_details').css('display', 'none')
                    }
                }
            } else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1
                if (x <= max){
                    value += 1
                    $('.order-btn').removeClass('disabled')
                    $('.order-information_details').css('display', 'block')
                }
            }
            $this.attr('value', value).val(value)

            // if(value == 1) {
            //     $('.details-list_content').append(detailItem)
            // }else if(value == min ) {
            //     $('.details-list_content').empty(detailItem)
            // }

            $('.details-quantity').html(`x ${value}`)
            
            
            // $('.details-price').text($('.table-price_new').text())
            // $('.order-information_price').text($('.table-price_new').text())
        })
    })


    $('.content-service_table').each(function(){
        var $this = $(this)
        console.log($(this).children("table"));
    })
    
    document.title = $(".content-heading").text();

});


function addDetailsList(){
    // var parentTable = $(this).parents(".content-service_table");
    // var ListParentTable = document.querySelectorAll('.content-service_table')
    // ListParentTable.forEach(function(parentTable, index){
    //     if (parentTable.)
    // })

    // var detailItem = `
    //     <div class="details-title text-right">a</div>
    //     <div class="d-flex justify-content-end">
    //         <div class="details-price"></div>
    //         <div class="details-quantity"></div>
    //     </div>
    // `


}