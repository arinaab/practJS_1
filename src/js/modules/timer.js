const timer = () => {

    const getTime = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            t,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const addZero = (num) => {
        if (num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    const setClock = (daysSelector, hoursSelector, minSelector, secSelector, endtime) => {
        const days = document.querySelector(daysSelector),
              hours = document.querySelector(hoursSelector),
              minutes = document.querySelector(minSelector),
              seconds = document.querySelector(secSelector);

        updateClock();

        function updateClock() {
            const obj = getTime(endtime);
        
            days.textContent = addZero(obj.days);
            hours.textContent = addZero(obj.hours);
            minutes.textContent = addZero(obj.minutes);
            seconds.textContent = addZero(obj.seconds);

            const time = setInterval( () => {
                updateClock();
            }, 1000);

            if (obj.t <= 0) {
                clearInterval(time);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                document.querySelector('.timer1 h4').textContent = 'Акция закончилась!';
            }
        }

    };
    setClock('#days', '#hours', '#minutes', '#seconds', '2022-03-24');
};

export default timer;