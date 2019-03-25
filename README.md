# Javascript_30
 > This Project is Study Javascript.
 > - study reference link : https://javascript30.com/

 ## Course
  - [x] 00.Getting Setup
    - check-date : 2019-03-10

  - [x] 01.Javascript Drum Kit
    - check-date : 2019-03-10
      + kdb tag : 사용자의 입력(키보드나 음성명령)을 정의
      + addEventListener(`transitionend`, functionName) : css의 transition 종료 후 실행되는 이벤트 정의
      + audio.currentTime = 0 : Play 지점 설정
       
  - [x] 02.CSS + JS Clock
    - check-date : 2019-03-10
  
  - [x] 03.Playing with CSS Variables and JS
    - check-date : 2019-03-11
      + this.dataset 사용시 html data-???로 시작하는 속성 값들을 object로 가져옴. 
      + document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 코드를 이용하여 css의 :root에 사용된 변수 값들 변경 가능
      
  - [x] 04.Array Cardio Day 1
    - check-date : 2019-03-11 ~ 2019-03-12
      + Array.prototype.filter : filter() 메서드는 주어진 판별 함수를 통과하는 요소를 모아 새로운 배열로 만들어 반환합니다.
      + Array.prototype.map : map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
                              배열.map((요소, 인덱스, 배열) => { return 요소 });
      + Array.prototype.sort: sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기                               본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다. 정렬 속도와 복잡도는 각 구현방식에 따라 다를 수 있습니다.
      + Array.prototype.reduce : reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
                                 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
                     
  - [x] 05.Flex Panels Image Gallery
    - check-date : 2019-03-12 

  - [x] 06.Ajax Type Ahead
    - check-date : 2019-03-13
      + Array.prototype.join() : join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
      + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); : 숫자 3자리마다 , 표시
      + fetch API
       
  - [x] 07.Array Cardio Day 2
    - check-date : 2019-03-13 
      + Array.prototype.some : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
      + Array.prototype.every : every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
      + Array.prototype.find : 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
      + Array.prototype.findIndex : findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
      + Array.prototype.slice : slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.
  
  - [x] 08.Fun with HTML5 Canvas
    - check-date : 2019-03-13 
      + canvas 태그

  - [x] 09.14 Must Know Dev Tools Tricks
    - check-date : 2019-03-14
      +  console.log
      +  console.warn
      +  console.error
      +  console.info
      +  console.assert
      +  console.clear
      +  console.dir
      +  console.group(console.groupCollapsed), console.groupEnd
      +  console.count
      +  console.time, console.timeEnd
      +  console.table
       
  - [x] 10.Hold Shift to Check Multiple Checkboxes
     - check-date : 2019-03-14
      +  KeyboardEvent.shiftKey : Shift 키가 눌 렸는지 (true) 또는 표시되지 않는지 (false) 나타냄.
        
  - [x] 11.Custom HTML5 Video Player
    - check-date : 2019-03-14
      + HTMLMediaElement url :  https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement (ex: click, play, pause, timeupdate...)
  
  - [x] 12.Key Sequence Detection (KONAMI CODE)
    - check-date : 2019-03-15
      + Array.prototype.slice : slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.
      + debounce function
     
  - [x] 13.Slide In on Scroll
    - check-date : 2019-03-15 
      + window.scrollY : 수직으로 몇 픽셀만큼 스크롤되었는지를 반환
      + window.innerHeight : 참조 url (https://sometimes-n.tistory.com/22) 
       
  - [x] 14.Object and Arrays - Reference VS Copy
    - check-date : 2019-03-16
      + Array.prototype.concat : concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 
      + Object.assign : Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다. (**객체 값 복사 시 참조 값이 복사 되는 점을 유의해야 함.**)
      + JSON.parse(JSON.stringify(object)) : deep clone을 통하여 객체 복사 시 객체 참조값이 복사 안되도록 처리
       
  - [x] 15.LocalStorage and Event Delegation
    - check-date : 2019-03-17~2019-03-18
      + preventDefault : 기본 이벤트 기능을 사용하지 않음.
      + form.reset : reset()은 form을 초기 상태로 다시 놓음.
      + [x] homework: Need for All checked and All unchecked function.
   
  - [x] 16.CSS Text Shadow Mouse Move Effect
    - check-date : 2019-03-18
         
  - [x] 17.Sorting Band Names without articles
    - check-date : 2019-03-20
   
  - [x] 18.Tally String Times with Reduce
    - check-date : 2019-03-20
        
  - [x] 19.Unreal Webcam Fun
    - check-date : 2019-03-21 ~ 2019-03-23
      + navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then() : cam 정보 가져오기.
      + video.addEventListener("canplay", paintToCanvas) : 지정된 미디어 유형을 재생할 수 있는지 여부를 결정합니다.
      + canvas 캡쳐 기능.
       
  - [x] 20.Native Speech Recognition
    - check-date : 2019-03-24
      + window.webkitSpeechRecognition : chrome 음성인식
      + html contenteditable 속성 : HTML5 에서는 어떤 엘러먼트라도 수정이 가능
 
  - [x] 21.Geolocation based Speedometer and Compass
    - check-date : 2019-03-24
   
  - [x] 22.Follow Along Links
    - check-date : 2019-03-24
      + getBoundingClientRect() : 위치 및 크기 값 가져오기
          
  - [x] 23.Speech Synthesis
    - check-date : 2019-03-25
      + new SpeechSynthesisUtterance : 음성 서비스
      + speechSynthesis 전역객체로 보여짐.
       
  - [ ] 24.Sticky Nav
  - [ ] 25.Event Capture, Propagation, Bubbing and Once
  - [ ] 26.Stripe Follow Along Dropdown
  - [ ] 27.CLick and Drag to Scroll
  - [ ] 28.Countdown Clock
  - [ ] 29.Whack A Mole Game
  - [ ] 30.That's All Folks!

