
document.getElementById('Alaram-btn').addEventListener('click', function() {
    var alarmTimeInput = document.getElementById('alarm-clock');
    var alarmTime = alarmTimeInput.value;
    var currentTime = new Date();
    var alarmDateTime = new Date();
    
    var alarmTimeParts = alarmTime.split(':');
    var alarmHour = parseInt(alarmTimeParts[0], 10);
    var alarmMinute = parseInt(alarmTimeParts[1], 10);
    
    alarmDateTime.setHours(alarmHour);
    alarmDateTime.setMinutes(alarmMinute);
    alarmDateTime.setSeconds(0);
    
    if (alarmDateTime > currentTime) {
      var timeDifference = alarmDateTime - currentTime;
      
      setTimeout(function() {
        document.getElementById('Alaram-active').textContent = "Alarm activated!" ;
        playAlarmSound();
      }, timeDifference);
      
      alarmTimeInput.disabled = true;
      document.getElementById('Alaram-btn').disabled = true;
      document.getElementById('Alaram-active').textContent = "Alarm set for " + alarmTime;
    } else {
      document.getElementById('Alaram-active').textContent = "Alarm not set or incorrect time.";
    }
  });

  function playAlarmSound() {
    var audio = new Audio('C:/Users/Hariharan/Desktop/Alaram/Alaramsound/old-mechanic-alarm-clock-140410.mp3'); 
    audio.play();
  }