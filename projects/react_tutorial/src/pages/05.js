import React from 'react';

function Five(){

  class OldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      return (
        <div style={{display:'inline-block',border:'2px dotted red'}}>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div style={{border:'2px dotted blue',display:'inline-block'}}>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }

  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }

  return(
    <div>

      <h1>5. State and Lifecycle</h1>
      
      <p>3번 섹션에서 시계를 업데이트 하기 위해&nbsp;
        <span style={{backgroundColor:'rgb(255,0,255,0.2'}}>
          root.render()
        </span>
        를 호출하고 1초마다 갱신했었다<br/>

        <img src='/img/11.png' alt='' style={{width:'500px'}}></img><br/>
        <p style={{border:'2px solid red',display:'inline-block'}}>
          new Date().toLocaleTimeString()?<br/>
          --&gt; Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 플랫폼에 종속되지 않는 형태로 생성<br/>
          --&gt; Date 객체의 시간 부분의 현지시간에 따른 값을 문자열로 변환
        </p><br/>

        이번 섹션에서는 Clock컴포넌트를 만들어서 재사용하고 캡슐화한다<br/>
        이 컴포넌트는 스스로 타이머를 설정하고 매초 스스로 업데이트 가능<br/><br/>

        시계가 생긴 것에 따라 캡슐화하는 것부터 시작할 수 있다.<br/>

        <img src='/img/24.png' alt='' style={{width:'500px'}}></img><br/>
        &lt;Clock&gt; 컴포넌트와 &lt;tick&gt; 함수로 나누었다.<br/><br/>

        그러나 아직도 문제가 있다.<br/>
        Clock이 타이머를 설정하고 매초 UI를 업데이트 하는 기능이<br/>
        Clock의 내부에 구현 세부사항이 되어야 한다.<br/>
        한번만 코드 작성하면 Clock이 스스로 업데이트하는것이 이상적이다.
        <br/><br/>
        <strong>이상적인 코드는 아래와 같다.</strong>
        <p style={{ background: "#282C34", color: "white"}}>
          root
          <span className='blue'>
            .render
          </span>
          <span className='bracket'>
            (&lt;
          </span>
          <span className='yellow'>
            Clock
          </span>
          <span className='bracket'>
            &nbsp;&nbsp;/&gt;);
          </span>
        </p>

        위와 같이 되려면 Clock컴포넌트에 "state"를 추가해야한다.<br/>
        State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됨
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>함수에서 클래스로 변환하기</h2>
        
      <p>
        5단계로 Clock과 같은 함수 컴포넌트를 클래스로 변환할 수 있다.<br/><br/>
        1.React.Componet를 확장하는, 동일한 이름의 ES6 Class 생성<br/>
        2.render()라고 불리는 빈 메서드 추가<br/>
        3.함수의 내용을 render() 메서드 안으로 옮김<br/>
        4.render() 내용 안에 있는 props를 this.props로 변경<br/>
        5.남아있는 빈 함수 선언을 삭제<br/><br/>

        <img src='/img/112.png' alt=''/><br/>
        <p style={{textAlign:'center',width:'500px',display:'inline-block'}}>
          &darr;&darr;&darr;&darr;</p><br/>
        <img src='/img/25.png' alt=''/><br/><br/>

        Clock은 이제 함수가 아닌 클래스<br/>
        render메서드는 업데이트가 발생할 때마다 호출되지만,<br/>
        같은 DOM노드로 &lt;Clock /&gt;을 렌더링하는 경우<br/>
        Clock클래스의 단일 인스턴스만 사용함<br/>
        이것은 로컬 state와 생명주기 메서드에 부가적인 기능을 사용가능하게 해준다<br/>
      </p>
      
      <div style={{border:'1px solid black'}}></div>

      <h2>클래스에 로컬 State 추가하기</h2>
      
      <p>
        3단계에 걸쳐서 date를 props에서 state로 이동<br/><br/>
        1.render() 메서드 안에 있는 this.props.date를 this.state.date로 변경<br/>
        <a
          href="https://blog.naver.com/c0h6e9o1n/222935242400"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'black',
            backgroundColor:'skyblue'
          }}
        >* props와 state의 차이? *</a><br/>
        <img src='/img/26.png' alt=''></img><br/><br/>

        2.초기 this.state를 지정하는 class constructor를 추가<br/>
        <a
          href="https://blog.naver.com/c0h6e9o1n/222935254894"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'black',
            backgroundColor:'skyblue'
          }}
        >* constructor? *</a><br/>
        <img src='/img/27.png' alt=''></img><br/>
        클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야한다.<br/><br/>

        3.&lt;Clock /&gt; 요소에서 date prop를 삭제
        <p style={{ background: "#282C34", color: "white"}}>
          root
          <span className='blue'>
            .render
          </span>
          <span className='bracket'>
            (&lt;
          </span>
          <span className='yellow'>
            Clock
          </span>
          <span className='bracket'>
            &nbsp;&nbsp;/&gt;);
          </span>
        </p>
        삭제 후 결과<br/>
        <img src='/img/28.png' alt='' style={{width:'500px'}}></img><br/>
        현재 상태는 현재 시각만 구해서 렌더링하고 업데이트는 되지 않고 있다.<br/>
        <OldClock/><br/>
        그 다음으로  Clock이 스스로 타이머를 설정하고 매초마다 업데이트 하도록 해보자
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>생명주기 메서드를 클래스에 추가하기</h2>

      <p>
        많은 컴포넌트가 있는 애플리케이션에서 컴포넌트가 삭제될 때 <br/>
        해당 컴포넌트가 사용중이던 리소스를 확보하는 것이 중요 <br/>
        <span className='bgyellow'><strong>&nbsp;&nbsp;&nbsp;마운팅</strong></span>
        --&gt; Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정<br/>
        <span className='bgblue'><strong>언마운팅</strong></span>
        --&gt; Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제<br/>
        컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가<br/>
        마운트되거나 언 마운트 될 때 일부 코드 작동가능<br/>
        <img src='/img/30.png' alt='' ></img><br/>
        이러한 메서드들은
        <a
          href="https://velog.io/@youngminss/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0-%EB%A9%94%EC%84%9C%EB%93%9C"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink',
            backgroundColor:'skyblue'
          }}
        >"생명주기 메서드"</a>
        라고 한다<br/>
        <span className='bggreen'>componentDidMount()</span>메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됨<br/>
        이 장소가 타이머를 설정하기에 좋음<br/>
        <img src='/img/31.png' alt='' ></img><br/>
        <span className='bgyellow'>this.timerID</span>가 어떻게 타이머 ID를 제대로 저장하는지 보자<br/>
        <span className='bgyellow'>this.props</span>가 React에 의해 스스로 설정되고
        <span className='bgyellow'>this.state</span>가 특수한 의미가 있는반면<br/>
        <span className='bgyellow'>this.timerID</span>같이 데이터 흐름안에 포함되지 않는 어떤 항목을 보관할<br/>
        필요가 있다면 자유롭게 클래스에 수동으로 부가적인 필드를 추가해도 된다.<br/>
        <br/>
        <span className='bggreen'>componentWillUnMount()</span> 생명주기 메서드 안에 있는 타이머를 분해<br/>
        <img src='/img/32.png' alt='' ></img><br/>
        <br/>
        <span className='bggreen'>tick()</span>메서드 --&gt; Clock 컴포넌트가 매초 작동하도록 함<br/>
        <span className='bggreen'>tick()</span>는 로컬 state를 업데이트 하기 위해
        <span className='bgblue'>this.setState()</span>를 사용<br/>
        <img src='/img/33.png' alt='' style={{width:'500px'}}></img><br/>
        <strong style={{fontSize:'30px'}}>이제 시계가 제대로 작동된다!!</strong><br/>

        <Clock/>

        <p style={{border:'2px solid green'}}>
          <span style={{border:'1px solid red',fontSize:'25px',
            fontWeight:'bold'}}>최종정리</span><br/><br/>
          1.&lt;Clock /&gt;가 root.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor 호출<br/>
          Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화<br/>
          --&gt; 나중에 state 업데이트<br/><br/>

          2.React는 Clock 컴포넌트의 render() 메서드 호출. <br/>
          이를 바탕으로 React는 화면에 표시할 내용을 알게됨.<br/>
          React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM 업데이트<br/><br/>

          3.Clock 출력값이 DOM에 삽입되면, React는 <span className='bggreen'>componentDidMount()</span>
          생명주기 메서드를 호출<br/> 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를<br/>
          호출하기 위한 타이머를 설정하도록 브라우저에 요청<br/><br/>

          4.매초 브라우저가 tick() 메서드를 호출. 그 안에서 Clock 컴포넌트는 setState()에<br/>
          현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행<br/>
          setState() 호출 덕분에 React는 state가 변경된 것을 인지하고<br/>
          화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출<br/>
          이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함<br/>
          React는 이에 따라 DOM을 업데이트<br/><br/>

          5.Clock 컴포넌트가 DOM으로부터 한번이라도 삭제된 적이 있다면<br/>
          React는 타이머를 멈추기 위해 <span className='bggreen'>componentWillUnMount()</span>
          생명주기 메서드를 호출<br/> (현재 상태에서는 쓰이지 않는다.)
        </p>
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>State를 올바르게 사용하기</h2>

      <p>
        <span className='bgyellow'>setState()</span>에 대해서 알아야 할 세 가지

        <h3>직접 State를 수정금지</h3>
        아래 코드는 컴포넌트를 다시 렌더링하지 않는다.<br/>
        <img src='/img/34.png' alt=''/><br/>
        대신 setState()를 사용한다.<br/>
        <img src='/img/35.png' alt=''/><br/>
        this.state를 지정할 수 있는 유일한 공간은 바로 constructor이다.<br/>

        <h3>State 업데이트는 비동기적일수도 있음</h3>
        React는 성능을 위해 여러 setState()호출을 단일 업데이트로 한꺼번에 처리가능<br/>
        this.props와 this.state가 비동기적으로 업데이트될 수 있기때문에<br/>
        다음 state를 계산할 때 해당 값에 의존해서는 안됨<br/>
        * 동기 : 동시에 일어나는, 요청을 하면 요청한 자리에서 결과가 나와야함<br/>
        결과가 나올때까지 대기상태로 있어야함<br/>
        * 비동기 : 동시에 일어나지 않는, 요청을 하고 결과가 동시에 일어나지 않음<br/>
        결과가 나올때가지 다른 작업 가능<br/><br/>

        아래의 코드는 카운터 업데이트에 실패할 수 있다<br/>
        <img src='/img/36.png' alt=''/><br/>
        이를 수정하기 위해선 객체보다는 함수를 인자로 사용하는 다른 형태의 setState()를 사용<br/><br/>

        아래 함수는 이전 state를 첫번째 인자로 받아들이고<br/>
        업데이트가 적용된 시점의 props를 두번째로 받아들임<br/>
        <img src='/img/37.png' alt=''/><br/>
        화살표 함수 말고 일반적인 함수에서도 정상적으로 작동한다<br/>
        <img src='/img/38.png' alt=''/><br/>

        <h3>State 업데이트는 병합된다</h3>

        setState()를 호출할때 React는 제공한 객체를 현재 state로 병합한다<br/><br/>

        예를 들어, state는 다양한 독립적인 변수를 포함할수 있다.<br/><br/>

        <img src='/img/39.png' alt=''/><br/><br/>

        별도의 setState() 호출로 이러한 변수를 독립적으로 업데이트할수 있다.<br/><br/>

        <img src='/img/40.png' alt=''/><br/><br/>

        병합은 얕게 이루어지기 때문에 this.setState(&#123;comments&#125;)는<br/>
        this.state.posts에 영향을 주진 않지만 this.state.comments는 완전히 대체된다.
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>데이터는 아래로 흐른다</h2>

      <p>
        부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알수없고,<br/>
        어떤 함수나 클래스로 정의되었던지 영향을 받지 않는다.<br/><br/>

        이 때문에 종종 state는 로컬 또는 캡슐화라고 불린다.<br/>
        state가 소유하고 설정한 컴포넌트 이외엔 어떤 컴포넌트에도 접근할 수 없다.<br/><br/>

        컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다.<br/>

        <p style={{ background: "#282C34", color: "white"}}>
          <span className='bracket'>&lt;</span>
          <span className='yellow'>FormattedDate</span>
          &nbsp;
          <span className='purple'>date</span>
          <span className='bracket'>=&#123;</span>
          <span className='purple'>this</span>
          <span className='bracket'>.</span>
          <span className='pink'>state</span>
          <span className='bracket'>.</span>
          <span className='pink'>date</span>
          <span className='bracket'>&#125; /&gt;</span>
        </p>

        FormattedDate 컴포넌트는 date를 자신의 props로 받을 것이고 이것이 <br/>
        Clock의 state로부터 왔는지, Clock의 props에서 왔는지, 수동으로 입력한것인지 모른다.<br/>

        <img src='/img/41.png' alt='' style={{width:'400px'}}/><br/><br/>

        일반적으로 이를 "하향식(top-down)" 또는 "단방향식" 데이터 흐름이라고 한다.<br/>
        모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터<br/>
        파상된 UI 또는 데이터는 오직 트리구조에서 자신의 "아래"에 있는 컴포넌트에만 영향을 미친다.<br/><br/>

        트리구조가 props들의 폭포라고 상상하면 각 컴포넌트의 state는 임의의 점에서 만나지만<br/>
        동시에 아래로 흐르는 부가적인 수원(wate source)이라고 할수있다<br/><br/>

        모든 컴포넌트가 완전히 독립적이라는 것을 보여주기 위해 <br/>
        App 렌더링하는 새개의 &lt;Clock&gt;를 만들었다<br/><br/>

        <img src='/img/113.png' alt=''/><br/>
        <App/>

        각 Clock은 자신만의 타이머를 설정하고 독립적으로 업데이트한다.<br/>
        React앱에서 컴포넌트가 유상태 또는 무상태에 대한 것은 시간이 지남에 따라 <br/>
        변경될 수 있는 세부 사항으로 간주한다.유상태 컴포넌트 안에서 무상태<br/>
        컴포넌트를 사용할 수 있으며, 그 반대 경우도 마찬가지다.
      </p>
    </div>
  )
}

export default Five;