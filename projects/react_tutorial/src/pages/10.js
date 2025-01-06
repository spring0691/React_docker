import React from 'react';

function Ten(){

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p style={{border:'2px dotted deeppink',display:'inline-block'}}>The water would boil.</p>;
    }
    return <p style={{border:'2px dotted royalblue',display:'inline-block'}}>The water would not boil.</p>;
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }

    handleChange(e) {
      this.setState({temperature: e.target.value});
    }

    render() {
      // 그냥 아래에 2번나와서 변수 선언해서 한듯
      const temperature = this.state.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      );
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }

    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////


  class Calculator2 extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }

    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  return(
    <div>

      <div>
        <h1>10. State 끌어올리기</h1>

        종종 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있다.<br/>
        이럴 때는 가장 가까운 공통 조상으로 state를 끌어올리는 것이 좋다.<br/><br/>

        주어진 온도에서 물의 끊는 여부를 추정하는 온도 계산기를 만들어보자<br/><br/>

        제일 먼저 BoilingVerdict라는 이름의 컴포넌트부터 만들어보자. 이 컴포넌트는 섭씨온도를<br/>
        의미하는 celsius prop를 받아서 이 온도가 물이 끓기에 충분한지 여부를 출력한다.<br/><br/>

        <img src='/img/86.png' alt=''/><br/>

        <BoilingVerdict celsius={99}/><br/>
        <BoilingVerdict celsius={100}/><br/>

        그 다음으로 Calculator라는 컴포넌트를 만들어보자. 이 컴포넌트는 온도를 입력할<br/>
        수 있는 &lt;input&gt;을 렌더링하고 그 값을 this.state.temperature에 저장한다.<br/><br/>

        또한 현재 입력값에 대한 BoilingVerdict 컴포넌트를 렌더링한다.<br/><br/>

        <img src='/img/87.png' alt=''/><br/><br/>

        <span style={{border:'2px dotted red',display:'inline-block'}}>
          크게 어려울게 없다 이제는. 제일 위에서 클래스형 컴포넌트, 생성자, props상속, 바인딩<br/>
          초기state지정, 합성이벤트로 setState설정, 여기까지는 똑같고<br/>
          temperature 변수에 this.state.temperature담고 이걸 input value에 받아서<br/>
          onChange : 우리가 작성한 코드를 통해 변화가 일어났는지 탐지<br/>
          handleChange로 state를 업데이트 해주고 이걸 BoilingVerdict 컴포넌트에 준다.
        </span>

        <Calculator/>
      </div>

      <hr/>

      <div>
        <h2>두 번째 Input 추가하기</h2>

        새 요구사항으로 섭씨 입력 필드뿐만 아니라 화씨 입력 필드를 추가하고<br/>
        두 필드 간에 동기화 상태를 유지해보자<br/><br/>

        Calculator에서 TemperatureInput 컴포넌트를 빼내는 작업부터 시작해보자.<br/>
        또한 "c" 또는 "f"의 값을 가질 수 있는 scale prop를 추가하자.<br/><br/>

        <img src='/img/88.png' alt=''/><br/><br/>

        <span style={{border:'2px dotted red',display:'inline-block'}}>
          scaleNames 변수에 2개의 prop 추가하고 TemperatureInpout 컴포넌트 생성<br/>
          내용은 뭐 더이상 딱히 설명 안해도 될듯
        </span><br/><br/>

        이제 Calculator가 분리된 두 개의 온도 입력 필드를 렌더링하도록 할 수 있다.<br/><br/>

        <img src='/img/89.png' alt=''/><br/><br/>

        <TemperatureInput scale='c' />
        <TemperatureInput scale='f' /><br/><br/>

        이제 2개의 입력 필드를 갖게 되었지만, 둘 중 하나에 온도를 입력하더라도 다른 하나는<br/>
        갱신되지 않는 문제가 있다. 또한 Calculatro에서 BoilingVerdict도 보여줄수 없다.<br/>
        현재 입력된 온도 정보가 TemperatureInput안에 숨겨져 있으므로 Calculator는 그 값을<br/>
        알 수 없기때문이다.
      </div>

      <hr/>

      <div>
        <h2>변환 함수 작성하기</h2>

        먼저, 섭씨를 화씨로, 또는 그 반대로 변환해주는 함수 작성<br/><br/>

        <img src='/img/90.png' alt=''/><br/><br/>

        이 두 함수는 숫자를 변환한다. 이제 temperature 문자열과 변환 함수를 인수로 취해서 <br/>
        문자열을 반환하는 또 다른 함수를 작성해보자. 그리고 그것을 한 입력값에 기반해 나머지<br/>
        입력값을 계산하는 용도로 사용하자. 이 함수는 올바르지 않은 temperature 값에 대해서는<br/>
        빈 문자열을 반환하고 값을 소수점 세번째 자리로 반올림하여 출력한다.<br/><br/>

        <img src='/img/91.png' alt=''/><br/><br/>

        예를 들어 tryConvert('abc', toCelsius)는 빈 문자열을 반환하고<br/>
        tryConvert('10.22', toFahrenheit)는 '50.396'을 반환한다.<br/>
        <span className='bgblue'>
          나중에 시간되면 이거 변환함수 적용되서 나오는 컴포넌트 하나 추가해보자
        </span>
      </div>

      <hr/>

      <div>
        <h2>State 끌어올리기</h2>

        현재는 두 TemperatureInput 컴포넌트가 각각의 입력값을 각자의 state에 독립적으로 저장<br/><br/>

        <img src='/img/92.png' alt=''/><br/><br/>

        그러나 우리는 두 입력값이 서로 동기화된 상태로 있기를 원한다. 섭씨온도 입력값을 바꾸면<br/>
        화씨온도 입력값 역시 변화되어야하고, 그 반대도 마찬가지여야 한다.<br/><br/>

        React에서 state를 공유하는 일은 그 값을 필요로 하는 컴포넌트 간의 가장 가까운 공통<br/>
        조상으로 state를 끌어올림으로써 할수 있다. 이런 방법을 "state 끌어올리기"라고 부른다<br/>
        이제 TemperatureInput이 개별적으로 가지고 있던 지역 state를 지우는 대신 <br/>
        Calculator로 그 값을 옮기자<br/><br/>

        Calculator가 공유될 state를 소유하고 있으면 이 컴포넌트는 두 입력 필드의 현재 온더에<br/>
        대한 "진리의 원천(source of truth)"이 된다. 이를 통해 두 입력 필드가 서로 간에<br/>
        일관된 값을 유지하도록 만들 수 있다. 두 TemperatureInput 컴포넌트의 props가 같은<br/>
        부모인 Calculator로부터 전달되기 때문에, 두 입력 필드는 항상 동기화된 상태를 유지할 수 있다<br/><br/>

        어떻게 동작하는지 살펴보자<br/><br/>

        우선, TemperatureInput 컴포넌트에서 this.state.temperature를<br/>
        this.props.temperature로 대체할 것이다. 지금은 this.props.temperature가<br/>
        존재한다고 가정해보자. 나중엔 이 값을 Calculator로부터 건네야 할 것.<br/>
        <span style={{display:'inline-block',border:'2px dotted red'}}>
          state는 내부적으로 선언한 상태관리 초기값, props는 외부로부터 받는 값
        </span><br/><br/>

        <img src='/img/93.png' alt=''/><br/><br/>

        props는 읽기전용.temperature가 지역 state였을 때는 그 값을 변경하기 위해서<br/>
        그저 TemperatureInput의 this.setState()를 호출하는걸로 충분했다.<br/>
        그러나 이제 temperature가 부모로부터 prop로 전달되기 때문엥 TemperatureInput은<br/>
        그 값을 제어할 능력이 없다.<br/><br/>

        React에서는 보통 이 문제를 컴포넌트를 "제어" 가능하게 만드는 방식으로 해결한다.<br/>
        DOM &lt;input&gt;이 value와 onChange prop를 건네받는 것과 비슷한 방식으로,<br/>
        사용자 정의된 TemperatureInput 역시 temperature와 onTemperatureChange props를<br/>
        자신의 부모인 Calculator로부터 건네받을 수 있다.<br/><br/>

        이제 TemperatureInput에서 온도를 갱신하고 싶으면<br/>
        this.props.onTemeratureChange를 호출하면 된다.<br/><br/>

        <img src='/img/94.png' alt=''/><br/><br/>
        <img src='/img/122.png' alt=''/><br/>
        <span style={{border:'2px dotted red',display:'inline-block'}}>
          onTemperatureChange는 그냥 어트리뷰트 이름
        </span><br/><br/>

        onTemperatureChange prop는 부모 컴포넌트인 Calculator로부터 temperature prop와<br/>
        함께 제공될 것. 이를 이용해 자신의 지역 state를 수정해서 변경사항을 처리하므로, 변경된 새 값을<br/>
        전달받은 두 입력 필드는 모두 리렌더링 될 것이다.<br/><br/>

        Calculator의 변경사항을 들여다보기 전에 TemperatureInput 컴포넌트에 대한 변경사항을<br/>
        요약해보자. 이 컴포넌트의 지역 state를 제거했으며 this.state.temperature 대신에<br/>
        this.props.temperature를 읽어오도록 변경했다. state를 변경하고 싶을 경우 <br/>
        this.setState() 대신에 Calculator로부터 건네받은 this.props.onTemperatureChange()<br/>
        호출하도록 만들었다.<br/><br/>

        <img src='/img/95.png' alt=''/><br/>

        이제 다시 Calculator 컴포넌트로 와보자<br/><br/>

        temperature와 scale의 현재 입력값을 이 컴포넌트의 지역 state에 저장한다.<br/>
        이것은 우리가 입력 필드들로부터 "끌어올린" state이며 그들에 대한 "진리의 원천(source of truth)"<br/>
        으로 작용할 것이다. 또한 두 입력 필드를 렌더링하기 위해서 알아야 하는 모든 데이터를 최소한의 것으로<br/>
        표현한 것이기도 함<br/><br/>

        예를 들어서 섭씨 입력 필드에 37을 입력하면 Calculator 컴포넌트의 state는 다음과 같을 것이다.<br/><br/>

        <img src='/img/96.png' alt=''/><br/><br/>

        이후에 화씨 입력 필드의 값을 212로 수정하면 Calculator의 state는 다음과 같은 모습일 것이다.<br/><br/>

        <img src='/img/97.png' alt=''/><br/><br/>

        두 입력 필드에 모두 값을 저장하는 일도 가능했지만 결국은 불필요한 작업이었던 것.<br/>
        가장 최근에 변경된 입력값과 그 값이 나타내는 단위를 저장하는 것만으로도 충분했다.<br/>
        그러고 나면 현재의 temperature와 scale에 기반해 다른 입력 필드의 값을 추론할 수 있다.<br/><br/>

        두 입력 필드의 값이 동일한 state로부터 계산되기 때문에 이 둘은 항상 동기화된 상태를 유지하게 됨<br/><br/>

        <img src='/img/98.png' alt=''/><br/><br/>

        <Calculator2/><br/><br/>

        이제 어떤 입력 필드를 수정하든 간에 Calculator의 this.state.temperature와 <br/>
        this.state.scale이 갱신된다. 입력 필드 중 하나는 그대로의 값을 받으므로 사용자가<br/>
        입력한 값이 보존되고, 다른 입력 필드의 값은 항상 다른 하나에 기반해 재계산된다.<br/><br/>

        입력값을 변경할 때 일어나는 일들을 정리해보자<br/>

        <ol style={{border:'2px solid green'}}>
          <span style={{fontSize:'30px',fontWeight:'bold',display:'block',textAlign:'center'}}>
            최종정리
          </span><br/>

          <li>
            React는 DOM &lt;input&gt;의 onChange에 지정된 함수를 호출한다. 위 예시의 경우<br/>
            TemperatureInput의 handleChange 메서드에 해당(
            <span className='pink'>handleChange는 그냥 메서드 이름이다.</span>)
          </li><br/>

          <li>
            TemperatureInput 컴포넌트의 handleChange 메서드는 새로 입력된 값과 함께<br/>
            this.props.onTemperatureChange()를 호출한다. 이 어트리뷰트를 포함한 이 컴포넌트의<br/>
            props는 부모 컴포넌트인 Calculator로부터 제공받은 받았다.<br/>
            <span className='pink'>TemperatureInput은 새로 계속 쓸수있게 해주는 역할</span>
          </li><br/>

          <li>
            이전 렌더링 단계에서, Calculator는<br/>
            섭씨 TemperatureInput의 onTemperatureChange를 Calculator의 handleCelsiusChange 메서드로,<br/>
            화씨 TemperatureInput의 onTemperatureChange를 Calculator의 handleFahrenheitChange 메서드로<br/>
            지정했었다. 따라서 우리가 둘 중 어떤 입력 필드를 수정하느냐에 따라 Calculator의 두 메서드 중 하나가 호출된다.
          </li><br/>

          <li>
            이들 메서드는 내부적으로 Calculator 컴포넌트가 새 입력값, 그리고 현재 수정한 입력 필드의 <br/>
            입력 단위와 함께 this.setState()를 호출하게 함으로써 React에게 자신을 다시 렌더링하도록 요청한다.
          </li><br/>

          <li>
            React는 UI가 어떻게 보여야 하는지 알아내기 위해 Calculator 컴포넌트의 render 메서드를 호출한다.<br/>
            두 입력 필드의 값은 현재 온도와 활성화된 단위를 기반으로 재계산된다. 온도의 변환이 이 단계에서 수행됨.
          </li><br/>

          <li>
            React는 Calculator가 전달한 새 props와 함께 각 TemperatureInput 컴포넌트의 render<br/>
            메서드를 호출한다. 그러면서 UI가 어떻게 보여야 할지를 파악한다.
          </li><br/>

          <li>
            React는 BoilingVerdict 컴포넌트에게 섭씨온도를 props로 건네면서 그 컴포넌트의 render 메서드를 호출한다.
          </li><br/>

          <li>
            React DOM은 물의 끓는 여부와 올바른 입력값을 일치시키는 작업과 함께 DOM을 갱신,<br/>
            값을 변경한 입력 필드는 현재 입력값을 그대로 받고, 다른 입력 필드는 변환된 온도 값으로 갱신된다.
          </li>

        </ol>

        입력 필드의 값을 변경할 때마다 동일한 절차를 거치고 두 입력 필드는 동기화된 상태로 유지된다.<br/>
      </div>

      <hr/>

      <div>
        <h2>교훈</h2>

        React 애플리케이션 안에서 변경이 일어나는 데이터에 대해서는 "진리의 원천(source of truth)"을 하나만 두어야 함<br/>
        보통의 경우, state는 렌더링에 그 값을 필요로 하는 컴포넌트에 먼저 추가된다.<br/>
        그러고 나서 다른 컴포넌트도 역시 그 값이 필요하게 되면 그 값을 그들의 가장 가까운 공통 조상으로 끌어올리면 된다.<br/>
        다른 컴포넌트 간에 존재하는 state를 동기화시키려고 노력하는 대신 하향식 데이터 흐름에 기대는 걸 추천한다.<br/><br/>

        state를 끌어올리는 작업은 양방향 바인딩 접근 방식보다 더 많은 "보일러 플레이트" 코드를 유발하지만,<br/>
        버그를 찾고 격리하기 더 쉽게 만든다는 장점이 있다. 어떤 state든 간에 특정 컴포넌트 안에서 존재하기<br/>
        마련이고 그 컴포넌트가 자신의 state를 스스로 변경할 수 있으므로 버그가 존재할 수 있는 범위가 크게 줄어든다.<br/>
        또한 사용자의 입력을 거부하거나 변형하는 자체로직을 구현할 수도 있다.<br/><br/>

        어떤 값이 props 또는 state로부터 계산될 수 있다면, 아마도 그 값을 state에 두어서는 안된다.<br/>
        예를 들어 celsiusValue와 fahrenheitValue를 둘 다 저장하는 대신, 단지 최근에 변경된<br/>
        temperature와 scale만 저장하면 된다. 다른 입력 필드의 값은 항상 그 값들에 기반해서<br/>
        render() 메서드 안에서 계산될 수 있다. 이를 통해 사용자 입력값의 정밀도를 유지한 채 다른<br/>
        필드의 입력값에 반올림을 지우거나 적용할 수 있게 된다.<br/><br/>

        UI에서 무언가 잘못된 부분이 있을 경우, React Developer Tools를 이용하여 props를 검사하고<br/>
        state를 갱신할 책임이 있는 컴포넌트를 찾을 때까지 트리를 따라 탐색해보자.<br/>
        이렇게 함으로써 소스 코드에서 버그를 추척할 수 있다.<br/>
        <img src='/img/100.gif' alt=''/>
      </div>

    </div>
  )
}

export default Ten;