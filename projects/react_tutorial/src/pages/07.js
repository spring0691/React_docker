import React from 'react';

function Seven(){

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  ////////////////////////////////////////////////////////////////////////

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }

      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  ////////////////////////////////////////////////////////////////////

  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }

  const messages = ['React', 'Re: React', 'Re:Re: React'];

  const count = 0;
  const count1 = 2;

  /////////////////////////////////////////////////////////////////////

  class Ternary extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }

      return (
        <div style={{border:'2px solid royalblue',display:'inline-block'}}>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.<br/>
          {button}
        </div>
      );
    }
  }

  /////////////////////////////////////////////////////////////////////

  class Ternary2 extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;

      return (
        <div>
          {isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick} />
            : <LoginButton onClick={this.handleLoginClick} />
          }
        </div>
      );
    }
  }

  /////////////////////////////////////////////////////////////////////

  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }

    return (
      <div className="warning">
        Warning!
      </div>
    );
  }

  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }

    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }

  return(
    <div>

      <div>
        <h1>7. 조건부 렌더링</h1>

        React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있다.<br/>
        이렇게 하면 애플리케이션의 상태에 따라서 컴포넌트 중 몇개만을 멘더링 할 수 있다.<br/><br/>

        React에서 조건부 렌더링은 JS에서의 조건 처리와 같이 동작<br/>
        if나 조건부 연산자 같은 JS연산자를 현재 상태를 나타내는 엘리먼트 만드는데 써보자<br/>
        그러면 React는 현재 상태에 맞게 UI를 업데이트 할 것.<br/><br/>

        아래 두 개 컴포넌트가 있다고 가정<br/>
        <img src='img/50.png' alt=''/>
        <UserGreeting/>
        <GuestGreeting/>
        로그인 상태에 따라 둘 중 하나를 보여주는 Greeting 컴포넌트를 만들자자<br/>
        <img src='img/51.png' alt=''/><br/>
        <img src='img/52.png' alt=''/><br/>
        <Greeting isLoggedIn={false} /><br/>
        <img src='img/53.png' alt=''/><br/>
        <Greeting isLoggedIn={true} /><br/>

        위의 예시는 isLoggedIn prop에 따라서 다른 인사말을 렌더링 한다.
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>엘리먼트 변수</h2>

        엘리먼트를 저장하기 위해 변수를 사용할 수 있다. 출력의 다른 부분은<br/>
        변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있다.<br/><br/>

        로그아웃과 로그인 버튼을 나타내는 두 컴포넌트가 있다고 가정해 보자<br/>
        <img src='img/54.png' alt=''/><br/><br/>
        <LoginButton/><LogoutButton/><br/><br/>

        이 아래에 LoginControl이라는 유상태 컴포넌트를 만들어보자<br/>
        이 컴포넌트는 현재 상태에 맞게 &lt;LoginButton /&gt;이나 <br/>
        &lt;LogoutButton /&gt;을 렌더링한다. 또한 위의
        &lt;Greeting /&gt;도 함께 렌더링한다.<br/><br/>
        <img src='img/55.png' alt=''/><br/><br/>

        <LoginControl/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          제일 처음 생성자를 선언하고 super(props)로 LoginControl 클래스형 컴포넌트를 상속받는다<br/>
          그 후 state가 계속 업데이트 되어도 이전 state와의 관계가 상실되지 않게 하기위해 바인딩하고<br/>
          state 초깃값으로 inLoggedIn: false를 준다.<br/><br/>

          그 후 로그인,로그아웃의 setState를 각각 지정해주고 render() 메서드에서 설계를 한다<br/>
          isLoggedIn 상수에 state 초기값을 주고 button 변수를 선언하고 조건문으로 button의<br/>
          상태를 바꿔준다. 그리고 마지막으로 return에 위의 Greeting과 button을 준다.
        </span><br/><br/>

        변수를 선언하고 if를 사용해서 조건부로 렌더링하는 것은 좋은 방법이지만 더 짧은으면 좋겠다.<br/>
        여러 조건을 JSX안에서 인라인(inline)으로 처리할 방법 몇 가지를 보자
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>논리 && 연산자로 if를 인라인으로 표현하기</h2>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          * 인라인으로 표현? 여러줄의 코드를 한 줄안에 표현 하는걸 인라인으로 표현한다고 칭한다.*
        </span><br/><br/>
        JSX 안에는 중괄호를 이용해서 표현식을 포함 할 수 있다. 그 안에 JS의 <br/>
        논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있다.을<br/>
        <img src='img/56.png' alt=''/><br/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          렌더링할때 빨간박스를 잘 보자. props의 이름을 적고 값을 제대로 줘야 작동한다.<br/>
          간단하게 unreadMessages의 길이가 0보다 크면 --&gt; 하나라도 뭐가 있으면<br/>
          그것의 길이(갯수)를 출력해주는 함수형 컴포넌트이다.
        </span><br/>

        <Mailbox unreadMessages={messages} /><br/>

        <span className='bgyellow'>
          JavaScript에서 true && expression은 항상 expression으로 평가되고 <br/>
          false && expression은 항상 false로 평가된다.
        </span><br/><br/>

        따라서 && 뒤의 엘리먼트는 조건이 true일때 출력된다.<br/>
        조건이 false라면 React는 무시하고 건너뒨다.<br/><br/>

        falsy 표현식을 반환하면 여전히 && 뒤에 있는 표현식은 건너뛰지만 falsy 표현식이<br/>
        반환된다는 것에 주의하자. 아래 예시에서, &lt;div&gt;0&lt;/div&gt;이 render 메서드에 반환된다.<br/>
        <img src='img/57.png' alt=''/><br/><br/>
        <div>
          {count && <h1>Messages: {count}</h1>}
          {count1 && <h1>Messages: {count1}</h1>}
        </div>
        <span style={{display:'inline-block',border:'2px dotted red'}}>
          프로그래밍 언어에서 0은 false 0 이외의 수는 true로 처리한다.<br/>
          그래서 위에서 count는 0, --&gt; false가 되어 && 논리연산이<br/>
          실행되지 않았지만, count그 자체의 값 0은 남아서 0이 덩그러니 출력<br/>
          되었고, count1에 2를 할당하여 출력해봤더니 위와 같이 출력되었다
        </span><br/>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>조건부 연산자로 If-Else구문 인라인으로 표현하기</h2>

        엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인<br/>
        condition ? true:false를 사용하는 것 (삼항 연산)<br/>
        아래는 짧은 구문을 조건부로 렌더링한다.<br/><br/>

        <img src='img/58.png' alt=''/><br/><br/>

        <span className='bgblue'>
          아직 공부가 부족해서 여기 부분은 구현하지 못했다 추후 구현 예정<br/>
          --&gt; 월요일 이과장님 컨펌이후 구현
        </span><br/><br/>

        <Ternary/><br/><br/>

        가독성은 떨어지지만, 더 큰 표현식에도 이 구문을 사용할 수 있다.<br/>
        <img src='img/114.png' alt=''/><br/>
        이 사진을 아래로 바꾸겠다는 소리다.<br/>
        <img src='img/59.png' alt=''/><br/><br/>

        <span className='bgblue'>
          아직 공부가 부족해서 여기 부분은 구현하지 못했다 추후 구현 예정<br/>
          --&gt; 월요일 이과장님 컨펌이후 구현
        </span>
        <br/><br/>
        <Ternary2/><br/>

        JavaScript와 마찬가지로, 가독성이 좋다고 생각하는 방식을 선택하면 된다.<br/>
        또한 조건이 너무 복잡하다면 컴포넌트를 분리하는 방법도 있다.
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>컴포넌트가 렌더링하는 것을 막기</h2>

        가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨겨야할 때가 있다.<br/>
        이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있다.<br/><br/>

        아래의 예시에서는 &lt;WarningBanner /&gt;가 warn prop의 값에 의해서 렌더링 됨.<br/>
        prop이 false라면 컴포넌트는 렌더링하지 않게 됨<br/>
        <img src='img/60.png' alt=''/><br/><br/>
        <Page /><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          위에서 WarningBanner은 특정상황에서 숨겨지고 싶은 함수형 컴포넌트이다.<br/>
          !(느낌표)는 NOT연산자이며, 입력값을 boolean으로 변환하여 값이 true는 false로,<br/>
          false는 true로 값을 리턴한다. 그렇게 props.warn으로 ture false값을 받아서<br/>
          if조건문에 의해 특정조건일때 null을 반환하여 컴포넌트를 숨기게 된다.<br/><br/>

          그 아래는 뭐 생성자 선언해서 초기값 만들고 바인딩하고 그 아래 render()에서<br/>
          컴포넌트에 props 넣어주고 버튼 onClick에 this 넣어주고 그다음 삼항연산자<br/>
          해서 Page컴포넌트 만드는건 이정도 설명이면 충분한 것 같다.
        </span><br/><br/>

        컴포넌트의 render 메서드로부터 null을 반환하는것은 생명주기 메서드 호출에<br/>
        영향을 주지않는다. 그 예시로 componentDidUpdate는 계속해서 호출되게 된다.
      </div>

    </div>
  )
}

export default Seven;