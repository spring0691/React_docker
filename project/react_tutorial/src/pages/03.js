import React from 'react';
import {NavLink} from "react-router-dom"

function Three(){

  const bracket = {
    color: "#88C6BE",
  };

  const element = <h2>Hello, world</h2>;

  return(
    <div>

      <h1>3. 엘리먼트 렌더링</h1>
      <p>
        엘리먼트는 화면에 표시할 내용을 기술
        <p style={{ background: "#282C34", color: "white"}}>
          <span style={{color:'#C5A5C5'}}>const</span>
          &nbsp;element = &nbsp;
          <span style={bracket}>&lt;</span>
          <span style={{color:'#FC9292'}}>h1</span>
          <span style={bracket}>&gt;</span>
          <span>Hello, world!</span>
          <span style={bracket}>&lt;</span>
          <span style={{color:'#FC9292'}}>h1</span>
          <span style={bracket}>&gt;;</span>
        </p>
        브라우저 DOM엘리먼트와 달리 React 엘리먼트는 일반 객체(plain object)<br />
        React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트<br />
        * 엘리먼트는 컴포넌트의 "구성 요소" 혼동 주의*
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>DOM에 엘리먼트 렌더링</h2>
      <p>
        HTML 파일 어딘가에 <span style={{backgroundColor:'rgba(255,0,0,0.2)'}}>
        &lt;div&gt;</span>가 있다고 가정
        <p style={{ background: "#282C34", color: "white"}}>
          <span style={bracket}>&lt;</span>
          <span style={{color:'#FC9292'}}>div</span>
          &nbsp;
          <span style={{color:'#C5A5C5'}}>id</span>
          <span className='bracket'>="</span>
          <span className='green'>root</span>
          <span className='bracket'>"&gt;</span>
          <span className='bracket'>&lt;/</span>
          <span className='pink'>div</span>
          <span className='bracket'>&gt;</span>
        </p>
        이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리 --&gt; “루트(root)” DOM 노드<br /><br />

        React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM노드<br />
        React를 기존 앱에 통합하려는 경우 많은 수의 DOM노드가 있을 수 있다<br />
        <br />
        React 엘리먼트를 렌더링하기 위해선 DOM 엘리먼트를 
        <span style={{backgroundColor:'rgb(0,255,255,0.2)'}}>
          ReactDOM.createRoot()
        </span>
        에 전달한 다음,<br /> React 엘리먼트를
        <span style={{backgroundColor:'rgb(255,0,255,0.2)'}}>
          root.render()
        </span>
        에 전달해야함<br/>

        <img src='/img/10.png' alt=''></img><br/>
        결과 : {element}
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>렌더링 된 엘리먼트 업데이트</h2>
      <p>
        React 엘리먼트는&nbsp;
        <span style={{backgroundColor:'rgb(0,255,255,0.2)'}}>불변객체</span>다.<br/>
        엘리먼트를 생성한 이후엔 해당 엘리먼트의 자식이나 속성 변경 불가<br />
        엘리먼트는 동영상에서 하나의 프레임처럼 특정 시점의 UI를 보여준다.<br/><br/>

        현재까지의 정보로만 UI를 업데이트하려면 새로운 엘리먼트를 생성하고 <br />
        이것을&nbsp;
        <span style={{backgroundColor:'rgb(255,0,255,0.2)'}}>
          root.render()
        </span>
        로 전달하는 방법 이외엔 없음<br/><br/>

        <img src='/img/11.png' alt='' style={{width:'500px'}}/><br/><br/>

        <p style={{border:'2px solid red',display:'inline-block'}}>
          new Date().toLocaleTimeString()?<br/>
          --&gt; Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 플랫폼에 종속되지 않는 형태로 생성<br/>
          --&gt; Date 객체의 시간 부분의 현지시간에 따른 값을 문자열로 변환
        </p><br/>
        위 함수는
        <span style={{backgroundColor:'rgb(0,255,255,0.2)'}}>
          setInterval()
        </span>
        콜백을 이용해 초마다
        <span style={{backgroundColor:'rgb(255,0,255,0.2)'}}>
          root.render()
        </span>
        를 호출<br/>

        <span>!!현재 해당 페이지에서 구현 불가!!</span>
        <nav>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Three/Practice2' target={'_blank'}>
            Practice2
          </NavLink>
        </nav>
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>변경된 부분만 업데이트</h2>
      <p>
        React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와<br/>
        비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트<br/>
        위의 Practice2로 새탭을 열고 F12를 눌러 개발자 도구에서 확인가능<br/>
        <img src='/img/110.gif' alt='' style={{width:'200px'}}/>
      </p>
    </div>
  )
}

export default Three;