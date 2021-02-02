  function nightDayHandler(self){
  var desti=document.querySelector('body');
  if(self.value === 'NIGHT'){
    desti.style.backgroundColor='black';
    desti.style.color='white';
    self.value = 'DAY'

    var alist=document.querySelectorAll('a'); /* 이 문서에서 모든 a태그를 선택자를 변수 alist로 한다.*/
    var i = 0; /* 변수 i의 값은 0이다. */
    while(i<alist.length){ /* 반복을 하는데 alist변수의 갯수보다 작을때까지 동안 반복한다.*/
      alist[i].style.color = 'powderblue'; /*뭘 반복하냐면 alist 배열의 변수 i를 CSS로 글자색을 바꾼다.*/
      i=i+1;  /*변수 i는 1을 더한다*/
    }
  } else{
    desti.style.backgroundColor='white';
    desti.style.color='black';
    self.value = 'NIGHT'

    var alist=document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = 'black';
      i=i+1;
    }
  }
}
// $('a') //이 페이지의 모든 a태그를 jquery로 처리하겠다.
// $('ㅁ').css('color',color);
