function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = $("#seconds");
    let minutes = $("#minutes");
    let hours = $("#hours");
    let totalSeconds = 0;
    let interval = undefined;

    startBtn.click(function () {
        if(!interval){
            interval = setInterval(step, 1000);
        }
    });

    stopBtn.click(function () {
        clearInterval(interval);
        interval = undefined;
    });

    function step() {
       totalSeconds++;
       seconds.text(format(totalSeconds%60));
       minutes.text(format((totalSeconds/60) % 60));
       hours.text(format(totalSeconds/3600));


   }

    function format(num) {
        num = Math.floor(num);
        if(num <= 9){
            num = `0${num}`;
        }
        return num;
    }
}