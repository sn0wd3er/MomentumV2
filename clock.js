const div = document.querySelector(".js-clock");


function getTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    let day = time.getDay();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    switch (day) {
        case 0:
            day = "일";
            break;
        case 1:
            day = "월";
            break;
        case 2:
            day = "화";
            break;
        case 3:
            day = "수";
            break;
        case 4:
            day = "목";
            break;
        case 5:
            day = "금";
            break;
        case 6:
            day = "토";
            break;
    }

    div.innerText = `${month < 10 ? `0${month}`:`${month}`}월 / ${date < 10 ? `0${date}` : `${date}`}일 / ${day}요일
    ${hour < 10 ? `0${hour}`:`${hour}`} : ${min < 10 ? `0${min}` : `${min}`} : ${sec < 10 ? `0${sec}` : `${sec}`}`;

}

function init() {
    setInterval(getTime,1000);   
}
init();