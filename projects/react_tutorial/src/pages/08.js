import React from 'react';

function Eight(){

  const numbers = [1, 2, 3, 4, 5];

  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);

  ///////////////////////////////////////////////////////////////////

  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  ///////////////////////////////////////////////////////////////////

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // before
      // <li>{number}</li>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  ///////////////////////////////////////////////////////////////////

  // id와 text구현하는 법 아직모름
  const todos = ['밥 먹기','산책 하기','운동 하기','공부 하기']

  function TodosList(props) {
    const todos = props.todos;
    const todoItems = todos.map((todo) =>
      <li key={todo.toString()}>
        {todo}
      </li>
    );
    return (
      <ul>{todoItems}</ul>
    );
  }

  function TodosList2(props) {
    const todos = props.todos;
    const todoItems = todos.map((todo, index) =>
      // Only do this if items have no stable IDs
      <li key={index}>
        {todo}
      </li>
    );
    return (
      <ul>{todoItems}</ul>
    );
  }

  ///////////////////////////////////////////////////////////////////

  function ListItem1(props) {
    const value = props.value;
    return (
      // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
      <li key={value.toString()}>
        {value}
      </li>
    );
  }

  function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 틀렸습니다! 여기에 key를 지정해야 합니다.
      <ListItem1 value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  ///////////////////////////////////////////////////////////////////

  function ListItem2(props) {
    // 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
    return <li>{props.value}</li>;
  }

  function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 맞습니다! 배열 안에 key를 지정해야 합니다.
      <ListItem2 key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  ///////////////////////////////////////////////////////////////////

  function Blog(props) {

    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );

    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );

    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  ///////////////////////////////////////////////////////////////////

  function NumberList3(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem1 key={number.toString()}
                value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  ///////////////////////////////////////////////////////////////////

  function NumberList4(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem1 key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }

  ///////////////////////////////////////////////////////////////////


  return(
    <div>

      <div>
        <h1>8. 리스트와 Key</h1>

        JavaScript에서 리스트를 어떻게 변환하는지 보자.<br/><br/>

        아래는 map()함수를 이용하여 numbers 배열의 값을 두배로 만든 후 map()에서<br/>
        반환하는 새 배열을 doubled변수에 할당하고 로그를 확인하는 코드이다.<br/>
        <img src='/img/61.png' alt=''/><br/>
        이 코드는 콘솔에 [2,4,6,8,10]을 출력한다.<br/>
        <img src='/img/115.png' alt=''/><br/>
        React에서 배열을 엘리먼트 리스트로 만드는 방식은 이와 거의 동일하다.<br/>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>여러개의 컴포넌트 렌더링 하기</h2>

        엘리먼트 모음을 만들고 중괄호 &#123;&#125;를 이용하여 JSX에 포함 가능<br/><br/>

        아래의 JavaScript map()함수를 사용하여 numbers 배열을 반복 실행하자.<br/>
        각 항목에 대해 &lt;li&gt;엘리먼트를 반환하고 엘리먼트 배열의 결과를 listItems에 저장한다.<br/><br/>

        <img src='/img/62.png' alt=''/><br/><br/>
        그러면 &lt;ul&gt;엘리먼트 안에 전체 listItems 배열을 포함시킬 수 있다.<br/><br/>
        <img src='/img/64.png' alt=''/><br/>
        <ul>{listItems}</ul>
        <span style={{display:'inline-block',border:'2px dotted red'}}>
          * map()? 모든 배열의 값에 Function을 실행하는 Method
        </span>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>기본 리스트 컴포넌트</h2>

        일반적으로 컴포넌트 안에서 리스트를 렌더링 한다.<br/><br/>

        이전 예시를 numbers 배열을 받아서 순서 없는 엘리먼트 리스트를<br/>
        출력하는 컴포넌트로 리팩토링 할 수 있다.<br/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          * 리팩토링? 이미 작성한 코드에서 구현된 일련의 행위들을 변경없이,<br/>
            코드의 가독성과 유지보수성을 높이기 위해 내부구조를 변경하는것<br/>
            기능을 유지하되 읽기 좋고 관리하기 편하게 코드를 재작성,정리 하는것
        </span><br/><br/>

        <img src='/img/63.png' alt=''/><br/><br/>

        이 코드를 실행하면 리스트의 각 항목에 key를 넣어야 한다는 경고가 표시된다.<br/>
        <img src='/img/116.png' alt=''/><br/>
        "key"는 엘리먼트 리스트를 만들때 포함해야 하는 특수한 문자열 어트리뷰트.<br/>
        이제 numbers.map() 안에서 리스트의 각 항목에 key를 할당하여 해결해보자<br/>
        <img src='/img/65.png' alt=''/><br/>
        <NumberList numbers={numbers} /><br/>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>Key</h2>

        Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.<br/>
        key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야한다.<br/>
        <img src='/img/66.png' alt=''/><br/>
        <NumberList numbers={numbers}/>

        <h3>아래는 임의의 const todo와 컴포넌트를 만들어 출력하였음</h3>
        Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게<br/>
        식별할 수 있는 문자열을 사용하는 것. 대부분의 경우 데이터의 ID를 key로 사용<br/>
        <img src='/img/67.png' alt=''/><br/>
        * id,text 구현하는법 아직 모름 *<br/>
        <img src='/img/118.png' alt=''/><br/>
        이런식으로 하면 되는듯?<br/>
        <TodosList todos={todos}/>
        렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용가능<br/>
        <img src='/img/68.png' alt=''/><br/>
        <TodosList2 todos={todos}/>
        <img src='/img/117.png' alt=''/><br/>

        항목의 순서가 바뀔수 있는 경우 key에 인덱스를 사용하는것은 권장 X<br/>
        이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할수 있음<br/>
        리스트 항목에 명시적으로 key를 지정하지 않으면 React는 기본적으로 인덱스를 key로 사용<br/>
        <a
          href="https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink'
          }}
        >왜 key가 필요한가?
        </a>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>Key로 컴포넌트 추출하기</h2>

        키는 주변 배열의 context에서만 의미가 있다.<br/><br/>

        예를 들어 ListItem 컴포넌트를 추출할 경우 ListItem안에 있는 &lt;li&gt; 엘리먼트가<br/>
        아니라 배열의 &lt;ListItem /&gt; 엘리먼트가 key를 가져야 한다.<br/><br/>

        ex) 잘못된 Key 사용법<br/><br/>

        <img src='/img/69.png' alt=''/><br/>

        <NumberList1 numbers={numbers}/>

        ex) 올바른 Key 사용법<br/><br/>

        <img src='/img/70.png' alt=''/><br/>

        <NumberList2 numbers={numbers}/>

        map()함수 내부에 있는 엘리먼트에 key를 넣어 주는게 좋다.<br/>
        <span className='bgyellow'>
          이 부분은 아무리 봐도 이상함 팀장님 오시면 물어보기
        </span>
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>Key는 형제 사이에서만 고유한 값이어야 한다.</h2>

        Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다.<br/>
        두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다.<br/><br/>

        <img src='/img/71.png' alt=''/><br/>
        <Blog posts={posts} /><br/>
        <img src='/img/119.png' alt=''/><br/><br/>

        <span style={{display:'inline-block',border:'2px dotted red'}}>
          div에 id값이 들어가 있는걸 확인 할 수 있다.<br/>
          const posts를 먼저 보자. 키,밸류의 형태로 3개의 값이 들어있는 배열이 2개인 상수다.<br/>
          그리고 제일 아래 root.render()를 보면 props을 그냥 통째로 넣어주고 있다.<br/>
          Blog 컴포넌트 안에 2개의 메서드에서 posts를 각각 원하는대로 map() 메서드로<br/>
          꺼내서 사용하고 있다. sidebar, content 메서드에서 원하는대로 작업하고<br/>
          return()으로 던져준다. &lt;hr /&gt;는 중간에 선이다. 나도 이거 쓸걸;<br/>
          한번 만들면 다시 특정 동작을 하는 컴포넌트는 아니라서 render()는 안에 없다.<br/>
        </span><br/><br/>

        React에서 key는 힌트를 제공하지만 컴포넌트로 전달하지는 않는다.<br/>
        컴포넌트에서 key와 동일한 값이 필요하면 다른 이름의 prop으로 명시적으로 전달<br/><br/>

        <img src='/img/72.png' alt=''/><br/><br/>

        <span className='bgyellow'>
          이 부분은 Post 컴포넌트 직접구현해서 렌더링 해보려했는데 실패함 이해부족..
        </span><br/>
        위 예시에서 Post 컴포넌트는 props.id를 읽을 수 있지만 props.key는 읽을 수 없다.
      </div>

      <div style={{border:'1px solid black'}}></div>

      <div>
        <h2>JSX에 map() 포함시키기</h2>

        위 예시에서 별도의 listItems 변수를 선언하고 이를 JSX에 포함했다<br/><br/>

        <img src='/img/73.png' alt=''/><br/>
        <NumberList3 numbers={numbers} /><br/>

        JSX를 사용하면 중괄호 안에 모든 표현식을 포함 시킬 수 있으므로 map() <br/>
        함수의 결과를 인라인으로 처리가능<br/><br/>

        <img src='/img/74.png' alt=''/><br/>
        <NumberList4 numbers={numbers} /><br/>

        <span className='bgyellow'>
          여기도 지금 공식문서상으로 잘못된 방법으로 했을때에 li에 key값이 생긴다 검토필요함
        </span><br/>
        이 방식을 사용하면 코드가 더 깔끔해 지지만, 남발하는것은 좋지 않다<br/>
        JavaScript와 마찬가지로 가독성을 위해 변수로 추출해야 할지 아니면 인라인으로<br/>
        넣을지는 개발자가 직접 판단해야함.map() 함수가 너무 중첩된다면 컴포넌트로 추출 ㄱㄱ
      </div>

    </div>
  )
}

export default Eight;