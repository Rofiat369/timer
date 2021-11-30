const times = process.argv.slice(2);

const timerAlert = function(times) {
  for (const time of times) {
    if(time < 0) {
      continue;
    }

    if(isNaN(time)) {
      continue;
    }

    if(typeof time === 'undefined') {
      continue;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
     }, time * 1000);
  }
};


timerAlert(times); 

