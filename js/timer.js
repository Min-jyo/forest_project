    // div DOM
    $div = document.querySelector('.stopWatch>div');
    // 협력자가 나한테 넘겨줄 num값 (초단위)
    let num = 65;
    // num을 1초마다 1씩 감소시키며 그 값을 분단위 초단위로 하여 출력
    // 남은 시간이 0이되면 setInterval 함수를 종료시키고 console로 stop 출력
    let playAlert = setInterval(function() {
      console.log(`${Math.floor(num/60)}:${num%60}`);
      $div.innerHTML = `${Math.floor(num/60)}:${num%60}`; 
      num--;
      if(num===0) {
        clearInterval(playAlert)
        console.log(`stop`);
      }
    },1000);