const boomA = document.getElementById(`boomA`);
const clapA = document.getElementById(`clapA`);
const hihatA = document.getElementById(`hihatA`);
const kickA = document.getElementById(`kickA`);
const openhatA = document.getElementById(`openhatA`);
const rideA = document.getElementById(`rideA`);
const snareA = document.getElementById(`snareA`);
const tinkA = document.getElementById(`tinkA`);
const tomA = document.getElementById(`tomA`);

const btnList = document.getElementsByClassName(`btn`);
const slider = document.getElementById(`slider`);

    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', (e) => {

            let x = e.target.id;

            if(x === "tink") {
                btnList[0].style.animation = "pulseFull 1.5s linear";
                setTimeout(() => {
                    btnList[0].style.removeProperty('animation')
                }, 100)
                tinkA.pause()
                tinkA.currentTime = 0
                tinkA.play();
            } else if(x === "clap") {
                btnList[1].style.animation = "pulseFull 1.5s linear";
                setTimeout(() => {
                    btnList[1].style.removeProperty('animation')
                }, 100)
                clapA.pause()
                clapA.currentTime = 0
                clapA.play();                
            } else if(x === "kick") {
                btnList[2].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[2].style.removeProperty('animation')
                }, 100)
                kickA.pause()
                kickA.currentTime = 0
                kickA.play();                
            } else if(x === "boom") {
                btnList[3].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[3].style.removeProperty('animation')
                }, 100)
                boomA.pause()
                boomA.currentTime = 0
                boomA.play();                
            } else if(x === "tomLeft") {
                btnList[4].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[4].style.removeProperty('animation')
                }, 100)
                tomA.pause()
                tomA.currentTime = 0
                tomA.play();                 
            } else if(x === "snare") {
                btnList[5].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[5].style.removeProperty('animation')
                }, 100)
                snareA.pause()
                snareA.currentTime = 0
                snareA.play();                 
            } else if(x === "tomRight") {
                btnList[6].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[6].style.removeProperty('animation')
                }, 100)
                tomA.pause()
                tomA.currentTime = 0
                tomA.play();                
            } else if(x === "ride") {
                btnList[7].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[7].style.removeProperty('animation')
                }, 100)
                rideA.pause()
                rideA.currentTime = 0
                rideA.play();                   
            } else if(x === "openhat") {
                btnList[8].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[8].style.removeProperty('animation')
                }, 100)
                openhatA.pause()
                openhatA.currentTime = 0
                openhatA.play();                
            } else if(x === "hihat") {
                btnList[9].style.animation = "pulseRing 1.5s linear";
                setTimeout(() => {
                    btnList[9].style.removeProperty('animation')
                }, 100)
                hihatA.pause()
                hihatA.currentTime = 0
                hihatA.play();                
            }                       
        });
    });
    let eventRun = 0;

    document.getElementById(`slider`).addEventListener('click', (e) => {
        eventRun++;

        if(eventRun <2) {
        slider.style.top = "250px";
    }   else if(eventRun == 2) {
        slider.style.top = "120px";
        eventRun = 0;
    }
    });

