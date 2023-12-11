import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Body from './Body';
import Filter from './Filter'
import AddCard from './AddCard';
import EssayForm from './EssayForm';
import './Css/Component.css';

function App() { 
  const [selected, setSelected] = useState([]);
  let [count_record, setCountrecord] = useState();
  const [loading, setLoading] = useState(true);
  const result = async () => {
    const res =  await axios.get('https://guarded-chamber-88701-7c7ee3d58107.herokuapp.com/protected_url');
      setLoading(res.data.status);
  }
  result();
  
  const content = loading ? <EssayForm loading={loading} setLoading={setLoading}/> :
  <div>
    <Header setLoading={setLoading}/>
    <Filter setSelected={setSelected} selected={selected} 
           count_record={count_record}/>
    <AddCard count_record={count_record} setCountrecord={setCountrecord}/>
    <Body selected={selected} count_record={count_record}/>
  </div>

return (
  <div>
    {content}
  </div>
)

}



export default App
