// 这个layout去掉了user请求，适合做协议页面这类的静态页面
import '@/common/js/bridge';
import React, { Component } from 'react';
import Navigation from '@/components/Navigation/Index';
import 'src/common/css/reset.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LocalStorage from 'localstorage';
import { getCookie, isInApp } from '@/utils/utils';
import styles from './Index.less';

const page100vhList = ['/example/with-basiclayout', '/risapp/games/cat'];
export default PackagedComponent => {
  return class StaticLayout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // 针对只有一屏的页面做适配
        is100vh: page100vhList.some(path => path === window.location.pathname),
        ready: false,
        isShowNav: false,
      };
    }

    componentDidMount() {
      // 存token
      const token = getCookie('token');
      localStorage.setItem('token', token);
      const userStorage = new LocalStorage('user');
      userStorage.put('token', token);

      // 绑定客户端回调全局事件
      this.bindEvents();

      // 获取客户端基础信息
      window.executeNativeCmd('getBaseInfo');
    }

    getBaseInfoResult(result) {
      // 处理拿到的baseinfo
        // eslint-disable-next-line no-console
        console.log(result);
      // 是否展示nav
      const getIsShowNav = () => {
        const noBarArr = []; // 不要头部
        if (isInApp()) {
          return !noBarArr.some(
            path => path.toLowerCase() === window.location.pathname.toLowerCase()
          );
        }
        return false;
      };
      const isShowNav = getIsShowNav();

      // 页面初始ready
      this.setState({
        ready: true,
        isShowNav,
      });
    }

    render() {
      const { ready, isShowNav, is100vh } = this.state;
      return (
        <div className={styles.container}>
          <TransitionGroup appear key={window.location.pathname}>
            <CSSTransition classNames="fade" timeout={300}>
              <div className={styles.pageWrapper} style={{ height: is100vh ? '100vh' : 'auto' }}>
                {ready && (
                  <>
                    <Navigation isShowNav={isShowNav} />
                    <PackagedComponent {...this.props} {...this.state} />
                  </>
                )}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      );
    }
  };
};
