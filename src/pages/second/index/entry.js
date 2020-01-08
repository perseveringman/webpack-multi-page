import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Helmet from "preact-helmet";  build后22k，暂时不引入
import { formatMessage } from './locales';
import { fetchDailyRecommendList } from 'src/services/index';
import 'src/common/css/reset.css';
import style from './index.less';
document.title = formatMessage('vote.index.tips') || document.title;

class Home extends Component {
  componentDidMount() {
    fetchDailyRecommendList({ date: '2019-11-10' }).then(res => console.log(res))
  }
  render() {
    return (
      <div class={style.home}>
        {/* <Helmet title={formatMessage('vote.index.tips')} /> */}
        <h1>{formatMessage('vote.index.tips')}</h1>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
