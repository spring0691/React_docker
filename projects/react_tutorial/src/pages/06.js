import React from 'react';

function Six(){

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  class LoggingButton extends React.Component {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    // 주의: 이 문법은 *실험적인* 문법입니다.
    handleClick = () => {
      console.log('this is:', this);
    };

    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }

  class LoggingButton2 extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }

    render() {
      // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }

  return(
    <div>

      <h1>6. 이벤트 처리하기</h1>

      <p>
        React 엘리먼트에서 이벤트를 처리하는 방식은 DOM엘리먼트에서 <br/>
        이벤트를 처리하는 방식과 매우 유사하다.<br/>
        - React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용<br/>
        - JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달<br/><br/>

        HTML은 다음과 같다.<br/>
        <img src='img/42.png' alt=''/><br/>
        Reactdptjsms 살짝 다르다.<br/>
        <img src='img/43.png' alt=''/><br/><br/>

        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * onclick? 사용자가 요소를 클릭할때 발생하는 이벤트*
        </p><br/>

        또 다른 차이점으로, React에서는 false를 반환해도 기본 동작을 방지할 수 없다.<br/>
        반드시 preventDefalut를 명시적으로 호출해야 한다.<br/>
        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * 기본동작방지? a 태그를 눌렀을때 href로 이동하는것, form 안에 submit 역할을<br/>
          하는 버튼을 누르면 새로고침하는 것등... 이러한 기본동작을 안하게 막는것*
        </p><br/>

        예를 들어, 일반 HTML에서 폼을 제출할 때 가지고 있는 기본 동작을 방지하기 위해<br/>
        아래와 같은 코드를 작성할 수 있다.<br/>
        <img src='img/44.png' alt=''/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          * onsubmit? 양식 제출 이넵트가 발생할 때의 동작을 지정한다.<br/>
            onsubmit은 &lt;form&gt; 태그 내부에서 &lt;input type="submit"&gt;로 인해 발생하는<br/>
            이벤트를 처리할 수가 있다. 이벤트 발생과 action에 지정된 URL이 적용되는 그<br/>
            사이의 지점에 처리할 동작을 onsubmit 속성을 통해 지정할 수 있는 것. 일반적으로<br/>
            자바스크립트 함수를 지정하여 처리하는 게 경우가 많다. *
        </span><br/>
        React에서는 다음과 같이 작성한다.<br/>
        <img src='img/45.png' alt=''/><br/>
        여기서 e는 합성이벤트이다.
        <a
          href="https://www.w3.org/TR/DOM-Level-3-Events/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color:'royalblue'
          }}
        >W3C 명세
        </a>
        에 따라 합성 이벤트를<br/> 정의하기때문에 브라우저 호환성에 대해 걱정할 필요가 없다.<br/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          * 이벤트? 브라우저에서 사용자의 조작이나 환경의 변화로 벌어진 사건 *
        </span><br/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          * 합성이벤트? SyntheticEvent는 객체이다. 모든 브라우저에서 이벤트를 동일하게<br/>
            처리하기 위한 Wrapper 객체이다. 대부분의 인터페이스는 브라우저 고유 이벤트와 같다.<br/>
            !소프트웨어에서 래핑(Wrapping)란, 기본 기능을 감싸는 새로운 기능을 만드는것!<br/>
            React는 Element가 처음 렌더링될 때 이벤트 리스너를 제공하여 처리한다.<br/>
            이때, 리스너와 대응되는 이벤트 핸들러 함수는 모든 브라우저에서 이벤트를 동일하게<br/>
            처리하기 위한 이벤트 래퍼를 전달받아야 하며, React에서 제공하는 이 이벤트 래퍼가<br/>
            SyntheticEvent(합성 이벤트) 객체*
        </span><br/><br/>

        React 이벤트는 브라우저 고유 이벤트와 정확히 동일하게 동작하지는 않는다<br/><br/>
        React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해<br/>
        addEventListener를 호출할 필요가 없다. 대신, 엘리먼트가 처음 렌더링 될 때<br/>
        리스너를 제공하면 된다.<br/>

        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * 이벤트리스너?  DOM 객체에서 이벤트가 발생할 경우 해당 이벤트 처리 핸들러를<br/>
          추가할 수 있는 오브젝트. 이를 이용하면 특정 DOM에 JavaScript 이벤트가<br/>
          발생할 때 특정 함수를 호출한다 *
        </p><br/>

        ES6 클래스를 사용하여 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 <br/>
        클래스의 메서드로 만드는 것. 예를 들어, 다음 Toggle 컴포넌트는 <br/>
        사용자가 'ON'과 'OFF' 상태를 토글 할 수 있는 버튼을 렌더링한다.<br/>
        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * 이벤트핸들러? 이벤트에 대해 즉각적인 반응을 할 수 있게 하는 장치 *
        </p><br/>

        <img src='img/46.png' alt=''/><br/>

        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * 바인딩? JS에서 객체 안 메서드에서 this는 그 메서드가 포함된 object를 의미<br/>
            메서드 안에서 this.prop을 사용하여 메서드를 구성할 수 있음 <br/>
            그러나 새로운 변수에 기존변수.메서드를 할당하게 되면 this와 <br/>
            기존변수와의 관계가 상될되게 됨. 이럴때 사용하는것이 바인딩<br/>
            React에서는 주로 생성자 안에서 바인딩 함*
        </p><br/>

        <p style={{display:'inline-block',border:'2px dotted red'}}>
          * prevState? 이전 state의 값. setState()는 비동기로 작동한다.<br/>
            즉 setState로 변경한 state값이 즉시 적용되지 않는다.<br/>
            그래서 handleClick()으로 이전 state의 값을 변경하여<br/>
            즉시 적용하는 식으로 위에서 구현한 것 같다. 로그인,로그아웃<br/>
            은 각각의 메서드가 있지만 이 경우 하나의 상태를 바꿔가는 차이가 있음 *
        </p><br/>

        <Toggle/><br/><br/>

        JSX 콜백 안에서 this의 의미에 대해 주의해야 한다.<br/>
        JavaScript에서 클래스 메서드는 기본적으로 바인딩 되어있지 않다.<br/>
        this.handleClick을 바인딩하지 않고 onClick에 전달하였다면,<br/>
        함수가 실제 호출될 때 this는 undefined가 된다.<br/><br/>

        이는 React만의 특수한 동작이 아니라, JS에서 함수가 작동하는 방식의 일부다.<br/>
        일반적으로 onClick=&#123;this.handleClick&#125;과 같이 뒤에 ()를<br/>
        사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 한다.<br/><br/>

        bind를 호출하는 것이 불편하다면, 이를 해결할 수 있는 두 가지 방법이 있다.<br/>
        콜백을 올바르게 바인딩하기 위해 퍼블릭 클래스 필드 문법을 활용할 수 있다.<br/>
        <img src='img/47.png' alt=''/><br/><br/>

        <LoggingButton/><br/><br/>

        Create React App에서는 이 문법이 기본적으로 설정되어 있다.<br/>
        클래스 필드 문법을 사용하고 있지 않다면, 콜백에 화살표 함수를 사용하는 방법도 있다.<br/>

        <img src='img/48.png' alt=''/><br/><br/>

        <LoggingButton2/><br/><br/>

        이 문법의 문제점은 LoggingButton이 렌더링될 때마다 다른 콜백이 생성된다는 것.<br/>
        대부분의 경우 문제가 되지 않으나, 콜백이 하위 컴포넌트에 props로서 전달된다면<br/>
        그 컴포넌트들은 추가로 다시 렌더링을 수행할 수도 있다.<br/>
        이러한 종류의 성능문제를 피하고자, 생성자 안에서 바인딩하거나<br/>
        클래스 필드 문법을 사용하는 것을 권장한다.<br/>
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>이벤트 핸들러에 인자 전달하기</h2>

      <p>
        루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적이다.<br/>
        예를 들어, id가 행의 ID일 경우 다음 코드가 모두 작동한다.다<br/>
        <img src='img/49.png' alt=''/><br/>
        위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용한다.<br/><br/>

        두 경우 모두 React 이벤트를 나타내는 e 인자가 ID뒤에 두 번째 인자로 전달된다.<br/>
        화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우<br/>
        추가 인자가 자동으로 전달된다.
      </p>

    </div>
  )
}

export default Six;