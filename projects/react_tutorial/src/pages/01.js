import React from "react";
// 01.css로 만들고 여기서만 import했는데 전체 다 적용되는 이슈가 있었다.
import styles from "./01.module.css";


function One() {
  const colorblue = {
    color: "#79B6F2",
  };

  const colorgreen = {
    color: "#8DC891",
  };

  const bracket = {
    color: "#88C6BE",
  };

  return (
    <div>
      <h1>1. Hello World</h1>
      <p style={{ background: "#282C34", color: "white"}}>
        <span id={styles.purple_tag}>const</span>
        &nbsp;root = ReactDom.
        <span style={colorblue}>createRoot</span>
        <span style={bracket}>(</span>
        document.<span style={colorblue}>getElementByID</span>
        <span style={bracket}>(</span>
        <span style={colorgreen}>'root'</span>
        <span style={bracket}>));</span>
        <br />
        root<span style={colorblue}>.render</span>
        <span style={bracket}>(&lt;</span>
        <span id={styles.h1}>h1</span>
        <span style={bracket}>&gt;)</span>
        <span>Hello, world!</span>
        <span style={bracket}>(&lt;</span>
        <span id={styles.h1}>h1</span>
        <span style={bracket}>&gt;);</span>
      </p>
      <p>
        <strong>위 코드는 페이지에 "Hello, world!"를 표현</strong><br/>
        <h1 style={{border:'2px solid red'}}>Hello, world!</h1>
        React는 JavaScript 라이브러리 -&gt; 
        <strong>
        <a
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Language_Overview"
          target="_blank"
          //   참조방지   정보송신방지
          rel="noopener noreferrer"
          style={{
            textDecoration:'none',
            color:'hotpink'
          }}
        >JavaScript
        </a> 
        </strong>
        기본적인 이해必<br/><br/>
        엘리먼트와 컴포넌트라고 불리는 React 앱의 구성 블록들에 대해 살펴볼것이다.
      </p>
    </div>
  );
}

export default One;

/*
원문
<code class="gatsby-code-jsx">
  <span class="token keyword">const</span> root{" "}
  <span class="token operator">=</span> ReactDOM
  <span class="token punctuation">.</span>
  <span class="token function">createRoot</span>
  <span class="token punctuation">(</span>document
  <span class="token punctuation">.</span>
  <span class="token function">getElementById</span>
  <span class="token punctuation">(</span>
  <span class="token string">'root'</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>
  <span class="token function">render</span>
  <span class="token punctuation">(</span>
  <span class="token tag">
    <span class="token tag">
      <span class="token punctuation">&lt;</span>h1
    </span>
    <span class="token punctuation">&gt;</span>
  </span>
  <span class="token plain-text">Hello, world!</span>
  <span class="token tag">
    <span class="token tag">
      <span class="token punctuation">&lt;/</span>h1
    </span>
    <span class="token punctuation">&gt;</span>
  </span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">;</span>
</code>;
*/