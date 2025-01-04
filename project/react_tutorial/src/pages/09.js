import React from 'react';

function Nine(){

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      // 내가 새로 추가한거. 생각했던 그대로 잘 됨 ㅎㅎ
      this.setState({value: ''});

    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////

  class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
      this.setState({value: '히히 초기화시켜버림'});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////

  class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////

  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <div style={{border:'2px dotted royalblue',display:'inline-block'}}>
          <form>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        </div>
      );
    }
  }

  return(
    <div>

      <div>
        <h1>9. 폼</h1>

        HTML 폼 엘리먼트는 그 자체가 내부 상태를 가지기 때문에,<br/>
        React의 다른 DOM 엘리먼트와 다르게 동작한다.<br/>
        예를 들어, 순수한 HTML에서 이폼은 name을 입력받는다.<br/><br/>

        <img src='/img/75.png' alt=''/><br/><br/>

        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form><br/>

        이 폼은 사용자가 폼을 제출하면 새로운 페이지로 이동하는 기본 HTML 폼 동작을 수행<br/>
        React에서 동일한 동작을 원한다면 그대로 사용하면 됨.그러나 대부분의 경우,<br/>
        JavaScript 함수로 폼의 제출을 처리하고 사용자가 폼에 입력한 데이터에 접근하도록<br/>
        하는것이 편리하다. 이를 위한 표준 방식은
        <span className='bggreen'>
          "제어 컴포넌트(controlled components)"
        </span><br/>
        라고 불리는 기술을 이용하는것<br/>
      </div>

      <hr/>

      <div>
        <h2>제어 컴포넌트</h2>

        HTML에서 &lt;input&gt;,&lt;textarea&gt;,&lt;select&gt;와 같은 폼 엘리먼트는 일반적으로<br/>
        사용자 입력을 기반으로 자신의 state를 관리하고 업데이트한다.React에서는 변경할 수 있는<br/>
        state가 일반적으로 컴포넌트의 state속성에 유지되며 setState()에 의해 업데이트 된다.<br/><br/>

        우리는 React state를 "신뢰 가능한 단일 출저 (single source of truth)"로 만들어 두 요소를<br/>
        결합할 수 있다. 그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어한다.<br/>
        이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 "제어 컴포넌트"라고 한다.<br/><br/>

        예를 들어, 이전 예시가 전송될 때 이름을 기록하길 원한다면 폼을 제어 컴포넌트로 작성 할 수 있다.<br/><br/>

        --&gt; 제어컴포넌트란 React에 의해 값이 제어되는 입력 폼 엘리먼트<br/>

        <img src='/img/76.png' alt=''/><br/>
        <NameForm/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          두 번째로 다시 제대로 보고 나니까 모르던게 좀 읽혀진다.<br/>
          어트리뷰트 --&gt; 위의 value같이 값들을 받는 컬럼의 이름<br/><br/>

          form,label,input,onSubmit을 알아야 위를 이해할수 있다.<br/><br/>
          첫줄부터 해석하자면 클래스 컴포넌트 선언후 생성자 선언 super(props)로 컴포넌트상속<br/>
          state로 value초기값 지정.이 부분에 뭘 입력하면 그게 기본값이 되어 첫페이지에 나온다<br/>
          그 후 계속 지우고 입력하고 할 때 이전 상태와 관계를 잃지 않기 위해 아래의 이벤트 핸들러에<br/>
          바인딩 2개 해준다.<br/><br/>

          그 다음 이벤트핸들러에 대한 설정이다. event는 6번섹션에서 설명한 합성이벤트를 말한다.<br/>
          합성이벤의 객체구조를 보면 target이 어떻게 나왔는지 이해할 수 있다.<br/>
          <img src='/img/120.png' alt='' style={{width:'300px'}}/><br/>
          이렇게 이벤트중 변화와 제출에 대한 설정을 각각 하게 되고 prepreventDefault()로<br/>
          기본 동작을 막아준다.<br/><br/>

          그 후 render()에서 렌더링 내용을 지정해준다.input의 onChange 함수는 변화를 탐지한다<br/>
          전체적인 틀은 다음을 참고하자<br/>
          <img src='/img/121.png' alt=''/><br/>
          constructor()에서 바인딩하는거랑 메소드에서 하는거랑 차이가 있나? (질문)<br/>
        </span><br/><br/>

        value 어트리뷰트는 폼 엘리먼트에 설정되므로 표시되는 값은 항상 this.state.value가 되고<br/>
        React state는 신뢰 가능한 단일 출저(single source of truth)가 된다.<br/>
        이를 업데이트하기 위해 모든 키 입력에서 handleChange가 동작하기 때문에 사용자가<br/>
        입력할 때 보여지는 값이 업데이트 된다.<br/><br/>

        제어 컴포넌트로 사용하면, input의 값은 항상 React state에 의해 결정된다.<br/>
        코드를 조금 더 작성해야 한다는 의미지만, 다른 UI 엘리먼트에 input의 값을 전달하거나<br/>
        다른 이벤트 핸들러에서 값을 재설정 할 수 있다.<br/>
      </div>

      <hr/>

      <div>
        <h2>textarea 태그</h2>

        HTML에서 &lt;textarea&gt;엘리먼트는 텍스트를 자식으로 정의한다.<br/><br/>

        <img src='/img/77.png' alt=''/><br/><br/>

        <textarea style={{border:'1px solid red'}}>
          Hello there, this is some text in a text area
        </textarea><br/><br/>

        React에서 &lt;textarea&gt;는 value 어트리뷰트를 대신 사용한다. 이렇게하면<br/>
        &lt;textarea&gt;를 사용하는 폼은 한 줄 입력을 사용하는 폼과 비슷하게 작성할 수 있다.<br/>
        --&gt; 인라인으로 표현하기?<br/><br/>

        <img src='/img/78.png' alt=''/><br/>
        <EssayForm/><br/>
        this.state.value를 생성자에서 초기화하므로 textarea는 일부 텍스트를 가진채 시작된다.<br/>
        --&gt; 이말 나오기 전에 이미 내가 위에서 초깃값으로 장난쳐봄 ㅋㅋ<br/>
        그리고 Submit하고 나면 공백으로 초기화되는거도 추가함 ㅋㅋ
      </div>

      <hr/>

      <div>
        <h2>select 태그</h2>

        HTML에서 &lt;select&gt;는 드롭 다운 목록을 만든다. 예를 들어, <br/>
        이 HTML은 과일 드롭 다운 목록을 만든다.<br/><br/>

        <img src='/img/79.png' alt=''/><br/><br/>

        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select><br/><br/>

        selected 옵션이 있으므로 Coconut 옵션이 초기값이 된다.(당연한말)<br/>
        그럼 selected옵션 빼면 공백으로 시작되나? ㄴㄴ 확인해보니 첫인덱스나옴<br/>
        React에서는 selected 어트리뷰트를 사용하는 대신 최상단 select 태그에 <br/>
        value 어트리뷰트를 사용. 한 곳에서 업데이트만 하면 되기때문에 제어<br/>
        컴포넌트에서 사용하기 더 편한다. 아래를 보자<br/><br/>

        <img src='/img/80.png' alt=''/><br/><br/>

        <FlavorForm/><br/><br/>

        <span style={{border:'2px dotted red',display:'inline-block'}}>
          이제는 뭐 더 설명 안해도 될것 같다. 위에서 부터 술술 읽어 내려가면 다 이해되고<br/>
          아래 render()만 좀 보자면 select에 value넣어서 변화를 업데이트 한다는 정도.
        </span><br/><br/>

        전반적으로 &lt;input type="text"&gt;, &lt;textarea&gt; 및 &lt;select&gt; 모두 매우 비슷하게 동작한다.<br/>
        모두 제어 컴포넌트를 구현하는데 value 어트리뷰트를 허용한다.<br/><br/>
        <img src='/img/81.png' alt=''/><br/><br/>
      </div>

      <hr/>

      <div>
        <h2>file input 태그</h2>

        HTML에서 &lt;input type="file"&gt;는 사용자가 하나 이상의 파일을 자신의 정치 저장소에서<br/>
        서버로 업로드하거나 File API를 통해 JavaScript로 조작할 수 있다.<br/>
        <p style={{ background: "#282C34", color: "white"}}>
          <span className='bracket'>
            &lt;
          </span>
          <span className='pink'>
            input
          </span>
          <span className='purple'>
            &nbsp;type
          </span>
          <span className='bracket'>
            ="
          </span>
          <span className='green'>
            file
          </span>
          <span className='bracket'>
            " &nbsp;/&gt;
          </span>
        </p>
        <input type="file" /><br/><br/>
        값이 읽기 전용이기 때문에 React에서는 비제어 컴포넌트이다.<br/>
        이 부분은 추가적으로 나중에 레벨이 올라가면 공부해야할듯<br/>
        <a
          href="https://ko.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink'
          }}
        >자세한 내용은 여기 참고</a><br/>
      </div>

      <hr/>

      <div>
        <h2>다중 입력 제어하기</h2>

        여러 input 엘리먼트를 제어해야할 때, 각 엘리먼트에 name 어트리뷰트를 추가하고<br/>
        event.target.name 값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해준다.<br/><br/>

        <img src='/img/82.png' alt=''/><br/>
        <Reservation/><br/><br/>

        <span style={{border:'2px dotted red',display:'inline-block'}}>
          위에서 쭉 이어진 내용들의 심화다. 첫줄부터 한번 읽어보자<br/>
          클래스형 컴포넌트 선언, 생성자 선언, 상속, 초기값지정 여기까지는 똑같다<br/>
          그런데 여기에선 2개의 초기값을 설정해준다. 그리고 이벤트 바인딩 1개 해준다.<br/><br/>

          그리고 InputChange핸들에서 이제 조금 어려워지는데 10분정도 보니까 이해됐다.<br/>
          일단 target 변수에 이벤트에 대한 .target 즉 input을 담는다. input은 내용?변화?<br/>
          그리고 value 변수에서 target의 type을 확인 후 삼항연산을 한다.<br/>
          아래에 2개의 input type을 보면 checkbox와 number2개가 있는걸 확인할 수있다.<br/>
          javascript에서 ===는 엄격한 연산자(Strict Equal Operator)이다.<br/>
          즉 값과 타입까지 같아야 True를 반환한다. 그렇게 boolean type check를 하고<br/>
          True면 checkbox의 checked가 False면 number의 value가 value변수에 그 값이 담긴다.<br/>
          name변수엔 target의 이름이 담긴다. 초깃값 어트리뷰트 이름 = input태그의 이름으로 설정해서<br/>
          setState에서 발생한 이벤트의 type에 맞는 state가 업데이트 된다.<br/>
          근데 이전섹션에서 하나로 똑딱거리는 식의 이벤트는 preState사용해서 바꾸지 않았나? 뭐가 다르지?<br/>
          toggle은 이전state와 현재state가 계속 바뀌는데 그 차이인가?<br/>
          onClick와 onChange의 차이인가?<br/>
          아무튼 이런식으로 name을 설정해서 하나의 핸들러에서 여러개의 input을 각각 업데이트 한다.
        </span><br/><br/>

        주어진 input 태그의 name에 일치하는 state를 업데이트하기 위해 ES6의<br/>
        <a
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#%EC%86%8D%EC%84%B1_%EA%B3%84%EC%82%B0%EB%AA%85"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink'
          }}
        >computed property name</a>
        구문을 사용하고 있다.<br/><br/>

        <img src='/img/83.png' alt=''/><br/><br/>

        ES5 코드는 다음과 같다.<br/><br/>

        <img src='/img/84.png' alt=''/><br/><br/>

        또한 setStage()는 자동적으로 현재 state에 일부 state를 병합하기 때문에<br/>
        바귄 부분에 대해서만 호출하면 된다.
      </div>

      <hr/>

      <div>
        <h2>제어되는 Input Null 값</h2>

        제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없다.<br/>
        value를 설정했는데 여전히 수정할 수 있다면 실수로 value를 undefined나 null로 설정했을수 있다.<br/><br/>

        <img src='/img/85.png' alt=''/><br/>
        <input value='hi' />
        <h3>이 부분 어떻게 하는지 모르겠다, 이 안에서만 ReactDOM.createRoot(mountNode)해보고싶다</h3>
      </div>

      <hr/>

      <div>
        <h2>제어 컴포넌트의 대안</h2>

        데이터를 변경할 수 있는 모든 방법에 대해 이벤트 핸들러를 작성하고 React 컴포넌트를 통해<br/>
        모든 입력 상태를 연결해야 하기 때문에 때로는 제어 컴포넌트를 사용하는게 지루할 수 있다.<br/>
        특히 기존의 코드베이스를 React로 변경하고자 할 때나 React가 아닌 라이브러리와 React<br/>
        애플리케이션을 통합하고자 할 때 짜증날 수 있다. 이러한 경우에 입력 폼을 구현하기 위한 <br/>
        대체 기술인
        <a
          href="https://ko.reactjs.org/docs/uncontrolled-components.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink',
            backgroundColor:'skyblue'
          }}
        >비제어 컴포넌트</a>
        를 확인할 수 있다.
      </div>

      <hr/>

      <div>
        <h2>완전한 해결책</h2>

        유효성 검사, 방문한 필드 추척 및 폼 제출 처리와 같은 완벽한 해결을 원한다면
        <a
          href="https://formik.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink',
            backgroundColor:'skyblue'
          }}
        >Formik</a>
        이 대중적인 선택중 하나이다.<br/>
        그러나 Formik은 제어 컴포넌트 및 state 관리에 기초하기 때문에 매우어렵다.
      </div>
    </div>
  )
}

export default Nine;