import React from 'react';
import img1 from "../images/1.png";

function Two(){

  const bracket = {
    color: "#88C6BE",
  };

  //1
  const name = 'yeram cheon';
  const element1 = <h3>Hello, {name}</h3>;

  //2
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'spring',
    lastName: 'comes again',
    avatarUrl: 'https://img.khan.co.kr/news/2019/11/29/l_2019112901003607500286631.webp'
  };

  const element2 = (
    <h3>
      Hello, {formatName(user)}!
    </h3>
  );

  //3
  function getGreeting3(user) {
    if (user) {
      return <h3>Hello, {formatName(user)}!</h3>;
    }
    return <h3>Hello, Stranger.</h3>;
  }

  //4
  const element4 = <a href="https://www.reactjs.org" target={'_blank'} rel="noopener noreferrer"> link </a>;

  //5
  const element5 = <img src={user.avatarUrl} alt='sample' style={{width:'500px'}}></img>;

  //6
  const element6 = <img src={user.avatarUrl} alt='sample' style={{width:'500px'}}/>;

  //7
  const element7 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

  //8 이것이 안전하다는데 모르겠다
  //const title = response.potentiallyMaliciousInput;
  //const element8 = <h1>{title}</h1>;

  return(
    <div>

      <h1>2. JSX 소개</h1>
      <p style={{ background: "#282C34", color: "white"}}>
        <span style={{color:'#C5A5C5'}}>const</span>
        &nbsp; element = 
        <span style={bracket}> &lt;</span>
        <span style={{color:'#FC9292'}}>h1</span>
        <span style={bracket}>&gt;</span>
        <span>Hello, world!</span>
        <span style={bracket}>&lt;</span>
        <span style={{color:'#FC9292'}}>h1</span>
        <span style={bracket}>&gt;;</span>
      </p>
      <ul>
        <li>위의 태그문법은 문자열,HTML이 아님 --&gt; JSX</li>
        <li>JSX는 JavaScript를 확장한 문법</li>
        <li>JSX는 엘리먼트(element)를 생성</li>
        <li>
          React는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식,<br />
          시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비<br />
          되는 방식 등)과 연결된다고 가정
        </li>
        <li>
          React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신,<br />
          둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리
        </li>
      </ul>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX에 표현식 포함</h2>
      <p>
        JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 삽입가능<br/><br/>

        <img src={img1} alt="JSX에 표현식 포함하기"></img><br/>
        element1 렌더링 : {element1}

        JavaScript 함수 호출의 결과인 formatName(user)을 &lt;h1&gt; 엘리먼트에 포함<br/>
        <img src='/img/2.png' alt='JSX에 표현식 포함하기'></img><br/>
        element2 렌더링 : {element2}
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX 표현식</h2>
      <p>
        컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식됨<br />
        JSX를 <span style={{backgroundColor:'rgba(255,0,0,0.2)'}}>if</span>
        구문 및 <span style={{backgroundColor:'rgba(255,0,0,0.2)'}}>for</span>
        &nbsp;loop 안에 사용하고, 변수에 할당하고, 인자로 받아들이고, 함수로부터 반환 가능<br/>

        <img src='/img/3.png' alt='JSX 표현식'></img><br/>
        getGreeting함수 user 有 : {getGreeting3(user)}<br/>
        getGreeting함수 user 無 : {getGreeting3()}
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX 속성 정의</h2>
      <p>
        어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의가능<br/><br/>

        <img src='/img/4.png' alt='JSX 속성 정의' style={{width:'500px'}}></img><br/><br/>

        element4 렌더링 : {element4}<br/><br/>

        <img src='/img/5.png' alt='JSX 속성 정의' style={{width:'500px'}}></img><br/><br/>
        중괄호를 사용하여 어트리뷰트에 JavaScript 표현식 삽입가능<br/>
        element5 렌더링 : {element5}<br/>
        어트리뷰트에 JavaScript 표현식을 삽일할 때 중괄호 주변에 따옴표 입력금지.<br/>
        따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용하고,<br/>
        동일한 어트리뷰트에 두 가지를 동시에 사용 금지
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX로 자식정의</h2>
      <p>
        태그가 비어있다면 XML처럼 /&gt; 를 이용해 바로 닫아주어야 함<br/><br/>
        <img src='/img/6.png' alt='JSX로 자식 정의'></img><br/>
        element6 렌더링 : {element6}<br/><br/>

        JSX태그는 자식을 포함가능<br/>
        <img src='/img/7.png' alt='JSX로 자식 정의'></img><br/>
        element7 렌더링 : {element7}
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX는 주입공격 방지</h2>
      <p>
        JSX에 사용자 입력을 삽입하는 것은 안전<br/>
        여기는 잘 모르겠다 패스
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>JSX는 객체를 표현</h2>
      <p>
        Babel은 JSX를 <span style={{backgroundColor:'rgba(255,0,0,0.2)'}}>
        React.createElement()</span> 호출로 컴파일
        아래 두 예시는 동일<br/>
        <img src='/img/8.png' alt='JSX 객체 표현'></img><br/>

        <span style={{backgroundColor:'rgba(255,0,0,0.2)'}}>React.createElement()</span>
        &nbsp;는 버그가 없는 코드를 작성하는데 도움이 <br />
        되도록 몇가지 검사를 수행하며 아래와 같은 객체 생성<br/>

        <img src='/img/9.png' alt='JSX 객체 표현'></img><br/>
        이러한 객체를<span className='bgyellow'>"React 엘리먼트"</span>
        라고 함, 화면에서 보고 싶은것을 나타내는 표현<br/>
        React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는데 사용
      </p>

    </div>
  )
}

export default Two;