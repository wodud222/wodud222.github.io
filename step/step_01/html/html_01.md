# html_base 익히기
> html에 대한 기초 개념을 이해할 수 있다.

## 기초세팅

### 기본세팅폴더 생성
1. css : style코드
2. img : 이미지파일
3. js : 자바스크립트 / jquery파일
4. work : 기타 작업관련 파일
5. html문서는 별도의 폴더에 담지 않습니다.

### 파일 /폴더 생성시 알아야 하는 사항
1. 숫자가 처음에 오는 파일/폴더명 X
2. 영문파 파일/폴더명만 생성
3. 띄어쓰기 X
4. 특수문자 (일부예외: _,-)
5. 의미없는 네이밍 기법 X
6. 축약문자보다는 풀어서


### 경로
1. 절대경로 : 고정된 경로 값.  
 - 웹 페이지 주소 : http://www.naver.com/news.html  
 - /  -> 폴더를 뜻함 (최상위 루트경로 에서부터)
2. 상대경로 : 작성되고 있는 파일을 기준. (ex : box폴더를 찾는 것)
 - ./box  **현재 위치**에서 box 폴더를 찾아라
 - ../box **상위 폴더**에서 box 폴더를 찾아라   
 - box    **현재 위치**에서 box 폴더를 찾아라 (단, 조건이 발생시 기준위치가 변경됨.)
3. 하나의 폴더에서 **가장 먼저 인지하는 파일명** : index.html(**)


### 제목:
  h1 ~ h6 
  h1: 주로 로고,단 한번만 사용 가능 
  
  
'''html
<h1>가장 중요한 제목</h1>
<h2>두번째 중요한 제목</h2>
<h3>세번째 중요한 제목</h3>
<h4>네번째 중요한 제목</h4>
<h5>다섯번째 중요한제목</h5>
<h6>가장 작은단위의 제목</h6>

- 내용: p, pre
   p: 단락: 띄어쓰기 한번, 줄바꿈 x
   pre: 원하는 대로 다 되지만 실제 사용하기에는 불편하다.
   
'''html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magnam laudantium quidem quam nam et reiciendis nobis. Dolorum, eaque, ipsam possimus repellat ipsum facere ut suscipit, fugit recusandae aliquam, molestias!</p>
<pre>lorem aafksadasd asdasd asadasd</pre>
'''



- br: 줄바꿈을 처리하는 기능
- hr: 화제의 전환기능(기본형태는 가로선)
''' html
<p>내용상 하나의 문맥이고,<br /></p>
줄바꿈을 처리하고 싶을때 <br />
사용할 수 있다.</p>
<hr />
<p>
서로간의 내용의 전환이 될때에는 hr코드를 사용해서 구분한다.
</p>
'''
   - list: 여러개의 공통된 관계를 가지고 나열된 형태를 사용시에는 list를 사용한다.
     * ul: unorder list 순서가 없는 형태의 리스트
        - li: ul에서 자식요소(코드 == 태그 ==요소)로 사용하는 코드
     * ol: order list 순서가 존재하는 형태의 리스트
        - li: ol에서 자식요소(코드 == 태그 ==요소)로 사용하는 코드
     * dl: data 순서의 내용이 존재(제목, 내용)
        -dt: dl에서의 제목을 나타내는 요소
        -dd: dl에서의 내용을 나타내는 요소
'''html
   <ul>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
   </ul>
    <ol>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
       <li>리스트 순서</li>
   </ol>
    <dl>
       <dt>리스트 순서</dt>
       <dd>리스트 순서</dd>
       <dd>리스트 순서</dd>
       <dd>리스트 순서</dd>
   </dl>
     
'''
  - 강조 :
      * em : 기울기
      * strong : 굵기
      * ins : 밑줄
      * del : 취소선
      
  - 앵커(링크)
      
      * a: 링크를 나타내는 요소 (href, title, target)
      - href: 원하는 위치로 이동하는 기능
      - title: 마우스 hover시에 나타나는 말풍선 체크 속성
      - target: _self: 자신의 페이지에서 화면전환(기본형태), _blank: 별도의 페이지에서 나   타내는 새로고침
       
'''html
<div><a href="#">link_01</a></div>
<div><a href="index.html" title="index 페이지로 이동" target=""</div>
<div></div>
  
  
  - 이미지
     * - img : 이미지를 담아서 표현하는 요소(src, alt, title)
       - src : 주소값(파일의 확장자가 올바르게 보이지 않는다면, 구성>폴더 및 검색옵션 > 보기탭, 알려진 암호형식... 체크해제)
       - alt : 해당하는 이미지의 설명
       - title : link기능과 같음
  
### style_기본형태(간단한 내용)







