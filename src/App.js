/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Modal(props){
  return (
    <div className="modal" style={{background: props.color}}>
        <h2>{props.title[props.atitle]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.edit}>글 수정</button>
      </div>
  )
}

function App() {

  function edit() {
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    return setTitle(copy);
  }

  let [title, setTitle] = useState(['남자 코트 추천','강남 우동 맛집','공부는 왜 할까?']);
  let [good, setGood] = useState([0,0,0]);
  let [atitle, asettitle] = useState(0);
  let [modal, setModal] = useState();

  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <header className="black-nav">
        <div>개발 Blog</div>
      </header>

      {
        title.map(function(a,i) {
          return <div className="list" key={i}>
            <h3 onClick={()=>{modal == true ? setModal(false) : setModal(true); asettitle(i)}}>{title[i]}</h3>
            <p>2월 17일 발행
              <span onClick={ ()=>{ 
                let Goodcopy = [...good];
                Goodcopy[i]+=1
                setGood(Goodcopy); }}>  ♥{good[i]}
              </span>
              <div style={{ textAlign: 'right' }}>
                <button onClick={()=>{
                  let titleCopy = [...title];
                  titleCopy.splice(i,1);
                  setTitle(titleCopy);
              }}>삭제</button>
              </div>
            </p>
           <hr/>
        </div>
        })
      }

      <input onChange = { (e)=> {
        setInputValue(e.target.value);
      }}/><button onClick={ ()=>{
        let titleCopy = [...title];
        titleCopy.unshift(inputValue);
        setTitle(titleCopy);

        let Goodcopy = [...good];
        Goodcopy.unshift(0)
        setGood(Goodcopy);
      }}>발행</button>

      {
        modal == true ? <Modal atitle={atitle} edit={edit} color={'skyblue'} title={title} /> : null
      }
      
    </div>
  );
}


export default App;
