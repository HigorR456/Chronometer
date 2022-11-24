        let mil = 0;
        let sec = 0;
        let min = 0;
        var c
        
        //start the chronometer and disable the pressed button
        let start1 = document.getElementById('startbtn');
        start1.addEventListener('click', start);
        start1.addEventListener('click', () => start1.disabled = true);
        start1.addEventListener('click', () => pause1.disabled = false);
        start1.addEventListener('click', () => stop1.disabled = false);

        //pause the chronometer and disable the pressed button
        let pause1 = document.getElementById('pausebtn');
        pause1.addEventListener('click', pause);
        pause1.addEventListener('click', () => start1.disabled = false);
        pause1.addEventListener('click', () => pause1.disabled = true);
        pause1.addEventListener('click', () => stop1.disabled = false);

        //stop the chronometer and disable the pressed button
        let stop1 = document.getElementById('stopbtn');
        stop1.addEventListener('click', stop);
        stop1.addEventListener('click', () => start1.disabled = false);
        stop1.addEventListener('click', () => pause1.disabled = false);
        stop1.addEventListener('click', () => stop1.disabled = true);

        //function that starts the clock
        function start() {
            c = setInterval(() => {timer()}, 10);
            document.getElementById('display').setAttribute('class', 'stylestart');
            document.getElementById('clock').setAttribute('class', 'stylestart');
        }

        //function that pauses the clock
        function pause() {
            clearInterval(c);
            document.getElementById('display').setAttribute('class', 'stylepause');
        }

        //function that stops the clock
        function stop() {
            clearInterval(c);
            mil = 0;
            sec = 0;
            min = 0;
            document.getElementById('minutes').innerHTML='00';
            document.getElementById('seconds').innerHTML='00';
            document.getElementById('milli').innerHTML='00';
            document.getElementById('display').setAttribute('class', 'stylestop');
            document.getElementById('clock').setAttribute('class', 'stylestop');
        }


        //clock function
        function timer() {
            //stop chronometer when reach 60 minutes
            if(min>=60){
                clearInterval(c);}
            mil++;
            //add 1 sec when mil 1000
            if(mil==100){
                sec++;}
            //add 1 min when sec 60
            if(sec==60){
                min++;}
            //reset mil when reach 1000
            if(mil==100){
                mil=0;} 
            //reset seconds when reach 60
            if(sec==60){
                sec=0;} 
            //display and keep three algorithms in milli
            if(mil<10){
                document.getElementById('milli').innerHTML=`0${mil}`;
            } else document.getElementById('milli').innerHTML=mil;
            //display and keep two algorithms in seconds
            if(sec<10){
                document.getElementById('seconds').innerHTML=`0${sec}`;
            } else document.getElementById('seconds').innerHTML=sec;
            //display keep two algorithms in minutes
            if(min<10){
                document.getElementById('minutes').innerHTML=`0${min}`;
            } else document.getElementById('minutes').innerHTML=min;
        }