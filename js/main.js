$(document).ready(function () {
    let currentFloor = 2;// переменная в которой храниться этаж
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    // фунция при наведении на етаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor");// удаляем активный клас у этажей
        currentFloor = $(this).attr("data-floor");// получаем значение текущего этажа
        $('.counter').text(currentFloor);
    });

    counterUp.on("click", function () {
        //отслеживаем по клику на стрелку вверх
        if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });//форматируем номер этажа чтобы было 01 а не 1
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
        }
    });

    counterDown.on('click', function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});    