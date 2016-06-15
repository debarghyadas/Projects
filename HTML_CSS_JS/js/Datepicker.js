function date() {
    var now = new Date(),
        now = now.getHours()+':'+now.getMinutes();
    $('#time').html(now);
}


function call(){
	
datetimepicker.selectTime(onTimeSelected);
}