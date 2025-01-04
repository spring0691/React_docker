import React from 'react';

function Twelve(){

  return(
    <div>

      <div>
        <h1>12. React로 사고하기</h1>

        React는 JavaScript로 규모가 크고 빠른 웹 애플리케이션을 만드는 가장좋은 방법이다.<br/>
        React는 Facebook과 Instagramdmf 통해 확장성을 입증했다.<br/><br/>

        React의 가장 멋진 점 중 하나는 앱을 설계하는 방식이다. 이 문서를 통해 React로 상품들을<br/>
        검색할 수 있는 데이터 테이블을 만드는 과정을 함께 생각해보자
      </div>

      <hr />

      <div>
        <h2>목업으로 시작하기</h2>

        JSON API와 목업을 디자이너로부터 받았다고 가정해보자. 목업은 다음과 같을것이다.<br/><br/>

        <img src='/img/101.png' alt='' style={{width:'200px'}}/><br/><br/>

        JSON API는 아래와 같은 데이터를 반환한다.<br/><br/>

        <img src='/img/102.png' alt=''/>
      </div>

      <hr />

      <div>
        <h2>1단계:UI를 컴포넌트 계층 구조로 나누기</h2>

        우리가 할 첫 번째 일은 모든 컴포넌트(와 하위 컴포넌트)의 주변에 박스를 그리고 그 각각에<br/>
        이름을 붙이는 것. 디자이너와 함께 일한다면, 이것들을 이미 정해두었을 수 있으니 한번 대화해보자<br/>
        디저이너의 Photoshop 레이어 이름이 React 컴포넌트의 이름이 될 수 있다.<br/><br/>

        하지만 어떤 것이 컴포넌트가 되어야 할지 어떻게 알 수 있을까? 우리가 새로운 함수나 객체를<br/>
        만들때처럼 만들면 된다. 한 가지 테크닉은 단일 책임 원칙이다. 이는 하나의 컴포넌트는 한 가지 일을<br/>
        하는게 이상적이라는 원칙. 하나의 컴포넌트가 커지게 된다면 이는 보다 작은 하위 컴포넌트로 분리되어야 함<br/><br/>

        주로 JSON 데이터를 유저에게 보여주기 때문에, 데이터 모델이 적절하게 만들어졌다면, UI(컴포넌트 구조)가<br/>
        잘 연결될 것. 이는 UI와 데이터 모델이 같은 인포메이션 아키텍처를 가지는 경향이 있기 때문.<br/>
        각 컴포넌트가 데이터 모델의 한 조각을 나타내도록 분리해주자.<br/><br/>

        <img src='/img/103.png' alt=''/><br/><br/>

        다섯개의 컴포넌트로 이루어진 앱을 한번 보자. 각각의 컴포넌트에 들어간 데이터는 이탤릭채로 표기.<br/>
        이미지의 숫자는 아래 숫자에 해당된다.<br/><br/>

        <img src='/img/104.png' alt=''/><br/><br/>

        ProductTable을 보면 "Name"과 "Price"레이블을 포함한 테이블 헤더만을 가진 컴포넌트는 없다.<br/>
        이 같은 경우, 데이터를 위한 독립된 컴포넌트를 생성할지 안할지는 선택이다.<br/>
        이 예시에서는 ProductTable의 책임인 데이터 컬렉션이 렌더링의 일부이기 때문에 ProductTable을 남겨두었다.<br/>
        그러나 이 헤더가 복잡해지면(즉 정렬을 위한 기능을 추가하는 등) ProductTableHeader 컴포넌트를 만드는것 추천<br/><br/>

        이제 목업에서 컴포넌트를 확인하였으므로 이를 계층 구조로 나열해보자<br/>
        모형의 다른 컴포넌트 내부에 나타나는 컴포넌트는 계층 구조의 자식으로 나타낸다.<br/><br/>

        <ul>
          <li>
            FilterableProductTable
            <ul>
              <li>SearchBar</li>
              <li>
                ProductTable
                <ul>
                  <li>ProductCategoryRow</li>
                  <li>ProductRow</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2>2단계:React로 정적인 버전 만들기</h2>

        <a
            href="https://codepen.io/gaearon/pen/BwWzwm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration:'none',
              color:'hotpink',
              backgroundColor:'skyblue'
            }}
          >Thinking In React: Step2</a>
        를 먼저 보고오자<br/><br/>

        이제 컴포넌트 계층구조가 만들어졌으니 앱을 실제로 구현해볼 시간이다. 가장 쉬운 방법은<br/>
        데이터 모델을 가지고 UI를 렌더링은 되지만 아무 동작도 없는 버전을 만들어 보는것이다.<br/>
        이처럼 과정을 나누는 것이 좋은데 정적 버전을 만드는 것은 생각은 적게 필요하지만 타이핑은<br/>
        많이 필요로 하고, 상호작용을 만드는 것은 생각은 많이 해야 하지만 타이핑은 적게 필요로 하기<br/>
        때문이다.<br/><br/>

        데이터 모델을 렌더링하는 앱의 정적 버전을 만들기 위해 다른 컴포넌트를 재사용하는 컴포넌트를<br/>
        만들고 props를 이용해 데이터를 전달해주자.props는 부모가 자식에게 데이터를 넘겨줄 때<br/>
        사용할 수 있는 방법이다. 정적 버전을 만들기 위해 state를 사용하지 말자. state는 오직<br/>
        상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용한다. 지금은 앱의 정적<br/>
        버전을 만들고 있기 때문에 지금은 필요하지 않다.<br/><br/>

        앱을 만들 때 하양식(top-down)이나 상향식(bottom-up)으로 만들 수 있다.<br/>
        다시 말해 계층 구조의 상층부에 있는 컴포넌트 (즉 FilterableProductTable부터 시작하는 것)<br/>
        부터 만들거나 하층부에 있는 컴포넌트 (ProductRow)부터 만들 수도 있다.간단한 예시에서는<br/>
        보통 하향식으로 만드는게 쉽지만 프로젝트가 커지면 상향식으로 만들고 테스트를 작성하면서 개발하는게 더 쉽다.<br/><br/>

        이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 컴포넌트들의 라이브러리를 가지게 된다.<br/>
        현재는 앱의 정적 버전이기 때문에 컴포넌트는 render() 메서드만 가지고 있을 것이다.<br/>
        계층구조의 최상단 컴포넌트 (FilterableProductTable)는 prop으로 데이터 모델을 받는다.<br/>
        데이터 모델이 변경되면 root.render()를 다시 호출해서 UI가 업데이트 된다.<br/>
        UI가 어떻게 업데이트되고 어디세어 변경해야하는지 알 수 있다.<br/>
        React의 단방향 데이터 흐름은 모든것을 모듈화하고 빠르게 만들어 준다.
      </div>

      <hr />

      <div>
        <h2>3단계: UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기</h2>

        UI를 상호작용하게 만들려면 기반 데이터 모델을 변경할 수 있는 방법이 있어야 한다.<br/>
        이를 React는 state를 통해 변경한다.<br/><br/>

        애플리케이션을 올바르게 만들기 위해서는 애플리케이션에서 필요로 하는 변경 가능한 state의<br/>
        최소 집합을 생각해보아야 한다. 여기서 핵심은 중복배제원칙이다.<br/>
        애플리케이션이 필요로하는 가장 최소한의 state를 찾고 이를 통해 나머지 모든 것들이<br/>
        필요에 따라 그때그때 계산되도록 만들어야한다.<br/>
        예를 들어 TODO 리스트를 만든다고 하면, TODO 아이템을 저장하는 배열만 유지하고<br/>
        TODO 아이템의 개수를 표현하는 state를 별도로 만들지 말자.<br/>
        TODO 갯수를 렌더링해야한다면 TODO 아이템 배열의 길이를 가져오면 된다.<br/><br/>

        예시 애플리케이션 내 데이터들을 생각해보자. 애플리케이션은 다음과 같은 데이터를 가지고 있다.

        <ul>
          <li>제품의 원본 목록</li>
          <li>유저가 입력한 검색어</li>
          <li>체크박스의 값</li>
          <li>필터링 된 제품들의 목록</li>
        </ul>

        각각 살펴보고 어떤게 state가 되어야 하는지 살펴보자. 세 가지의 질문을 통해 결정할 수 있다.

        <ol>
          <li>부모로부터 props를 통해 전달되는가? --&gt; state가 아니다</li>
          <li>시간이 지나도 변하지 않는가? --&gt; state가 아니다</li>
          <li>컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가? --&gt; state가 아니다</li>
        </ol>

        제품의 원본 목록은 props를 통해 전달되므로 state가 아니다. 검색어와 체크박스는 <br/>
        state로 볼 수 있는데 시간이 지남에 따라 변하기도 하고 다른것들로부터 계산될수 없기때문<br/>
        필터링된 목록은 state가 아니다. 제품 목록의 원본 목록과 검색어, 체크박스의 값을<br/>
        조합해서 계산해낼 수 있기 때문<br/><br/>

        결과적으로 애플리케이션은 다음과 같은 state를 가진다.
        <ul>
          <li>유저가 입력한 검색어</li>
          <li>체크박스의 값</li>
        </ul>
      </div>

      <hr />

      <div>
        <h2>4단계: State가 어디에 있어야 할 지 찾기</h2>

        <a
          href="https://codepen.io/gaearon/pen/qPrNQZ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink',
            backgroundColor:'skyblue'
          }}
        >Thinking In React: Step4</a>
        를 먼저 보고오자<br/><br/>

        앱에서 최소한으로 필요한 state가 뭔지 찾아냈다. 다음으로는 어떤 컴포넌트가 state를 소유할지 찾아야한다.<br/><br/>

        React는 항상 컴포넌트 계층구조를 따라 아래로 내려가는 단방향 데이터 흐름을 따른다.<br/>
        어떤 컴포넌트가 어떤 state를 가져야 하는지 바로 결정하기 어려울 수 있다.<br/>
        이 부분을 많은 초보자들이 어려워한다. 아래 과정을 따라 결정해보자<br/><br/>

        애플리케이션이 가지는 각각의 state에 대해서

        <ul>
          <li>state를 기반으로 렌더링하는 모든 컴포넌트를 찾기</li>
          <li>공통 소유 컴포넌트 (common owner component)를 찾기<br/>
            (계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트)</li>
          <li>공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 함</li>
          <li>state를 소유할 적절한 컴포넌트를 찾지 못하였다면, state를 소유하는 컴포넌트를<br/>
            하나 만들어서 공통 소유 컴포넌트의 상위 계층에 추가</li>
        </ul>

        이 전략을 애플리케이션에 적용해보자

        <ul>
          <li>ProductTable은 state에 의존한 상품 리스트에 필터링해야 하고 SearchBar는<br/>
              검색어와 체크박스의 상태를 표시해주어야 함</li>
          <li>공통 소유 컴포넌트는 FilterableProductTable</li>
          <li>의미상으로도 FilterableProductTable이 검색어와 체크박스의 체크 여부를 가지는 것이 타당</li>
        </ul>

        filterText를 "ball"로 설정하고 앱을 새로고침해보자. 테이블이 올바르게 업데이트 될 것이다.<br/>
      </div>

      <hr />

      <div>
        <h2>5단계: 역방향 데이터 흐름 추가하기</h2>

        <a
          href="https://codepen.io/gaearon/pen/LzWZvb"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink',
            backgroundColor:'skyblue'
          }}
        >Thinking In React: Step5</a>
        를 먼저 보고오자<br/><br/>

        지금까지 계층 구조 아래로 흐르는 props와 state 함수로써 앱을 만들었다.<br/>
        이제 다른 방향의 데이터 흐름을 만들어보자. 계층 구조의 하단에 있는 폼 컴포넌트에서<br/>
        FilterableProductTable의 state를 업데이트할 수 있어야 한다.<br/><br/>

        React는 전통적인 양방향 데이터 바인딩(two-way data binding)과 비교하면 더 많은<br/>
        타이핑을 필요로 하지만 데이터 흐름을 명시적으로 보이게 만들어서 프로그램이 어떻게 동작하는지<br/>
        파악할 수 있게 도와준다.<br/><br/>

        4단계에서의 예시에서 체크하거나 키보드를 타이핑할 경우 React가 입력을 무시하는 현상이 었었는데,<br/>
        이는 input태그의 value 속성이 항상 FilterableProductTable에서 전달된 state와<br/>
        동일하도록 설정했기 때문이다.즉 의도된 것이었다.<br/><br/>

        우리가 원하는것이 무엇인지 생각해보면, 사용자가 폼을 변경할 때마다 사용자의 입력을 반영할 수 있도록<br/>
        state를 업데이트하기를 원한다. 컴포넌트는 그 자신의 state만 변경할 수 있기 때문에 FilterableProductTable<br/>
        은 SearchBar에 콜백을 넘겨서 state가 업데이트되어야 할 때마다 호출되도록 할 것이다. 우리는 input에 onChange<br/>
        이벤트를 넘겨서 사용해서 알림을 받을 수 있다.FilterableProductTable에서 전달된 콜백은 setState()를 <br/>
        호출하고 앱이 업데이트 될 것이다.
      </div>

      <div>
        <h2>이게 전부입니다.</h2>

        이 글을 통해 React를 가지고 애플리케이션과 컴포넌트를 만드는 데에 대한 사고방식을 얻어갈 수 있기를 바랍니다.<br/>
        이전보다 더 많은 타이핑을 해야 할 수 있지만, 코드를 쓸 일보다 읽을 일이 더 많다는 사실을 기억하세요.<br/>
        모듈화되고 명시적인 코드는 읽을 때 조금 덜 어렵습니다. 큰 컴포넌트 라이브러리를 만들게 되면 이 명시성과 모듈성에<br/>
        감사할 것이며 코드 재사용성을 통해 코드 라인이 줄어들기 시작할 것입니다. :)
      </div>
    </div>
  )
}

export default Twelve;