import React from 'react';

function Four(){

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <Welcome name="Sara" />;

  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Avatar(props) {
    return (
      <img className="Avatar"
           src={props.user.avatarUrl}
           alt={props.user.name}
          style={{width:'100px'}}/>
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  return(
    <div>

      <h1>4. Componets와 Props</h1>
      
      <p>
        컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로<br/>
        나누고 각 조각을 개별적 관리가능<br/>
        개념적으로 컴포넌트는 JavaScript 함수와 유사함<br/>
        <span style={{background:'rgba(0,255,255,0.4'}}>
          "props"라고 하는 임의의 임력을 받은 후, 화면에 어떻게 표시되는지를<br/>
          기술하는 React 엘리먼트를 반환
        </span>
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>함수 컴포넌트와 클래스 컴포넌트</h2>
      
      <p>컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것
        <p style={{ background: "#282C34", color: "white"}}>
          <span className='purple'>function</span>
          <span className='blue'> Welcome</span>
          <span className='bracket'>(</span>
          props
          <span className='bracket'>)</span>
          &nbsp;&nbsp;
          <span className='bracket'></span>
          <span className='bracket'>&#123;</span>
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='purple'>return</span>
          &nbsp;&nbsp;
          <span className='bracket'>&lt;</span>
          <span style={{color:'#FC9292'}}>h1</span>
          &nbsp;
          <span className='bracket'>&gt;</span>
          Hello,&nbsp;&nbsp;
          <span className='bracket'>&#123;</span>
          props.name
          <span className='bracket'>&#125;</span>
          <span className='bracket'>&lt;/</span>
          <span className='pink'>h1</span>
          <span className='bracket'>&gt;;</span>
          <br/>
          <span className='bracket'>&#125;</span>
        </p>
        이 함수는 데이터를 가진 하나의 "props(속성을 나타내는 데이터)"<br/>
        객체인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트이다.<br/>
        이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 "함수 컴포넌트"라고 호칭
        <br/><br/>

        <strong>ES6 class</strong>를 사용하여 클래스 컴포넌트 정의가능<br/>
        <img src='/img/12.png' alt=''/><br/>
        React의 관점에서 볼 때 위 두 가지 유형의 컴포넌트는 동일
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>컴포넌트 렌더링</h2>

      <p>
        이전까지는 DOM 태그만을 사용해서 React 엘리먼트를 나타냈다<br/><br/>
        <img src='/img/111.png' alt=''/><br/><br/>
        React 엘리먼트는 사용자 정의 컴포넌트로도 표현가능하다<br/><br/>
        <img src='/img/13.png' alt=''/><br/><br/>
        React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와<br/>
        자식을 해당 컴포넌트에 단일 객체로 전달한다. 이 객체가 "props"다.<br/><br/>

        <img src='/img/14.png' alt=''/><br/>
        위 사진에 대한 렌더링 결과 : {element}

        렌더링 과정은 다음과 같다.<br/>
        1.&lt;Welcome name="Sara" /&gt; 엘리먼트로 root.render()를 호출<br/>
        2.React는 &#123;name: 'Sara'&#125;를 props로 하여 Welcome 컴포넌트 호출<br/>
        3.Welcome 컴포넌트는 결과적으로 &lt;h1&gt; Hello, Sara &lt;/h1&gt; 엘리먼트 반환<br/>
        4.React DOM은 &lt;h1&gt;Hello, Sara&lt;/h1&gt; 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트
      </p>
      
      <div style={{border:'1px solid black'}}></div>

      <h2>컴포넌트 합성</h2>

      <p>
        컴포넌트는 자신의 출력에 다른 컴포넌트 참조가능<br/> 
        --&gt; 모든 세부단계에서 동일한 추상 컴포넌트 사용 가능<br/>
        React 앱에서는 버튼,폼,화면 등 모든 것들이 컴포넌트로 표현된다.<br/>
        Welcome을 여러번 렌더링 하는 App 컴포넌트<br/>
        <img src='/img/15.png' alt=''/>
        <App/>
        일반적으로 새 React앱은 최상위에 단일 App 컴포넌트를 가지고 있음.<br/>
        하지만 기존 앱에 React를 통합하는 경우 Button과 같은 작은 컴포넌트부터<br/>
        시작해서 뷰 계층의 상단으로 올라가면서 점진적으로 작업해야함
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>컴포넌트 추출</h2>

      <p>
        컴포넌트를 작은 컴포넌트 여러개로 분할가능<br/>
        <img src='/img/16.png' alt=''/><br/>

        이 컴포넌트는 author(객체),text(문자열) 및 date(날짜)를 props로<br/>
        받은 후 소셜 미디어 웹 사이트의 코멘트를 나타낸다.<br/>
        현재 구성요소들이 모두 중첩되어 있어서 구성요소 변경과 재사용이 어렵다.<br/>
      </p>

      <h3>1.Avatar 추출</h3>

      <p>
        <img src='/img/17.png' alt=''/><br/>

        Avatar는 자신이 Comment 내에서 렌더링 된다는 것을 알 필요가 없다.<br/>
        props이름을 author --&gt; user로 변경<br/>
        *props이름은 컴포넌트 자체의 관점에서 작명할것*<br/>

        <img src='/img/18.png' alt=''/><br/>
        Avatar컴포넌트를 따로 만들고 Comment컴포넌트의 일부를 Avatar컴포넌트로 교체
      </p>

      <h3>2.UserInfo 추출</h3>

      <p>
        <img src='/img/19.png' alt=''/><br/><br/>
        UserInfo 컴포넌트는 Avatar 컴포넌트를 포함하고 있다.<br/><br/>
        <img src='/img/20.png' alt=''/><br/><br/>
        Comment가 더욱 단순해졌다<br/>
        재사용 가능한 컴포넌트를 만들어 놓는 것은 더 큰 앱에서 작업할때 효력이 나온다.<br/>
        UI 일부가 여러 번 사용되거나, UI 일부가 자체적으로 복잡한 경우에는<br/>
        별도의 컴포넌트로 만드는게 좋다.<br/><br/>


        컴포넌트 이해에 있어서 만드는것도 중요하지만 어떤식으로 값을<br/>
        주고 받는지 눈으로 직접 확인하면 이해에 더 도움이 될것 같아서 아래를 추가한다.<br/>

        <img src='/img/21.png' alt=''/><br/><br/>
        <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
      </p>

      <div style={{border:'1px solid black'}}></div>

      <h2>props는 읽기 전용</h2>

      <p>함수 컴포넌트, 클래스 컴포넌트 모두 컴포넌트 자체 props 수정하면 안됨</p>

      <img src='/img/22.png' alt=''/>
      <p>입력값을 바꾸려 하지 않고 항상 동일한 동작을 함 --&gt; 
        <span style={{background:'rgb(0,255,255,0.3)'}}>순수 함수</span>
        </p>
      <img src='/img/23.png' alt=''/>
      <p>입력값을 수정함 --&gt; 
        <span style={{background:'rgb(0,255,255,0.3)'}}>순수 함수 X</span>
        </p>

      <strong>모든 React 컴포넌트는 자신의 props를 순수 함수처럼 동작하게 설계해야함</strong>
    </div>
  )
}

export default Four;