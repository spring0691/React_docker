import React from 'react';

function Eleven(){

  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color} style={{border:'8px solid blue'}}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

  function Contacts() {
    return <div className="Contacts" style={{width:'100%',height:'100%',backgroundColor:'lightblue'}}/>;
  }

  function Chat() {
    return <div className="Chat" style={{width:'100%',height:'100%',backgroundColor:'pink'}}/>;
  }

  function SplitPane(props) {
    return (
      <div className="SplitPane" style={{width:'500px',height:'300px'}}>
        <div className="SplitPane-left" style={{float:'left',width:'30%',height:'100%'}}>
          {props.left}
        </div>
        <div className="SplitPane-right" style={{float:'left',width:'70%',height:'100%'}}>
          {props.right}
        </div>
      </div>
    );
  }

  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  function WelcomeDialog1() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }

  function Dialog1(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }

  class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }

    render() {
      return (
        <Dialog1 title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog1>
      );
    }

    handleChange(e) {
      this.setState({login: e.target.value});
    }

    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

  return(
    <div>

      <div>
        <h1>11. 합성(Composition) vs 상속(Inheritance)</h1>

        React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여<br/>
        컴포넌트간에 코드를 재사용 하는것이 좋다.<br/><br/>

        이번 섹션에서는 React를 처음 접한 개발자들이 종종 상속으로 인해 부딪히는 몇가지 문제들과<br/>
        합성을 통해 이러한 문제를 해결하는 방법을 봐보자.
      </div>

      <hr/>

      <div>
        <h2>컴포넌트에서 다른 컴포넌트를 담기</h2>

        어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.<br/>
        범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다.<br/><br/>

        이러한 컴포넌트에서는 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는것이 좋다.<br/><br/>

        <img src='/img/105.png' alt=''/><br/><br/>

        이러한 방식으로 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있다.<br/><br/>

        <img src='/img/106.png' alt=''/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          border는 css 개별 설정임
        </span>
        <WelcomeDialog/><br/><br/>

        &lt;FancyBorder&gt; JSX 태그 안에 있는 것들이 FancyBorder 컴포넌트의 childern prop으로 전달<br/>
        FancyBorder는 &#123;props.children&#125;을 &lt;div&gt; 안에 렌더링하므로 전달된 엘리먼트들이 최종 출력.<br/><br/>

        흔하진 않지만 종종 컴포넌트에 여러 개의 "구멍"이 필요할 수도 있다.<br/>
        이런 경우에는 children대신 자신만의 고유한 방식을 적용할 수도 있다.<br/><br/>

        <img src='/img/107.png' alt=''/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          Contacts,Chat 및 css 설정 전부 개별설정
        </span>
        <App/><br/>
        &lt;Contaces &nbsp;/&gt;와 &lt;Chat &nbsp; /&gt;같은 React 엘리먼트는 단지 객체이기 때문에 다른 데이터처럼<br/>
        prop으로 전달할 수 있다. 이러한 접근은 다른 라이브러리의 "슬롯(slots)"과 비슷해보이지만<br/>
        React에서 prop으로 전달할 수 있는 것에는 제한이 없다.
      </div>

      <hr/>

      <div>
        <h2>특수화</h2>

        때로는 어떤 컴포넌트의 "특수한 경우"인 컴포넌트를 고려해야 하는 경우가 있다.<br/>
        예를 들어, WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있다.<br/><br/>

        React에서는 이 역시 합성을 통해 해결할 수 있다. 더 "구체적인" 컴포넌트가 "일반적인"<br/>
        컴포넌트를 렌더링하고 props를 통해 내용을 구성한다.<br/><br/>

        <img src='/img/108.png' alt=''/><br/>
        <WelcomeDialog1/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          FancyBorder에서 props.children으로 Dialog안에서 FancyBorder 컴포넌트의 안으로 오는 것들을<br/>
          자식으로 받아주고 있고 Dialog 컴포넌트가 다시 WelcomeDialog 컴포넌트 안으로 들어가 합성되었다.
        </span><br/><br/>

        합성은 클래스로 정의된 컴포넌트에서도 동일하게 적용된다.<br/><br/>

        <img src='/img/109.png' alt=''/><br/>
        <SignUpDialog/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          SiunUpDialog 컴포넌트 먼저 보면 초기값으로 login 공백주고 렌더 메소드 주고<br/>
          거기에 Dialog에 title, message 어트리뷰트 2개 주고, input과 button 폼이 추가되어서<br/>
          Dialog 컴포넌트에 prop.children이 추가되었다. handleChange는 지우고 할때마다 업데이트<br/>
          되어야해서 합성이벤트e가 들어가 있고 handleSignUp은 버튼 눌렀을때만 실행되어어 e가 없는듯하다
        </span>
      </div>

      <hr/>

      <div>
        <h2>그렇다면 상속은?</h2>

        Facebook에서는 수천개의 React 컴포넌트를 사용하지만, 컴포넌트를 상속 계층 구조로<br/>
        작성을 권장할 만한 사례를 아직 찾지 못했다.<br/><br/>

        props와 합성은 명시적이고 안전한 방법으로 컴포넌트의 모양과 동작을 커스터마이징하는데<br/>
        필요한 모든 유연성을 제공한다. 컴포넌트가 원시 타입의 값, React 엘리먼트 혹은 함수 등<br/>
        어떤한 props도 받을수 있다는걸 기억하자.<br/><br/>

        UI가 아닌 기능을 여러 컴포넌트에서 재사용하기를 원한다면, 별도의 JavaScript 모듈로<br/>
        분리하는것이 좋다. 상속없이 컴포넌트에서 해당 함수, 객체, 클래스 등을 import 할 수 있다.
      </div>

    </div>
  )
}

export default Eleven;