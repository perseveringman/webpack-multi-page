import React, { Component } from "react";
import ReactDOM from "react-dom";
import { formatMessage } from './locales';
import { fetchDailyRecommendList } from 'src/services';
import 'src/common/css/reset.css';
import style from './index.less';
document.title = formatMessage('example.title') || document.title;

class Home extends Component {
  componentDidMount() {
    fetchDailyRecommendList({ date: '2019-11-10' }).then(res => console.log(res))
  }
  render() {
    return (
      <div class={style.home}>
        <h1>{formatMessage('example.hello')}</h1>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
