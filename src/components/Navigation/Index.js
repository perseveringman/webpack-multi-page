import React, { Component } from 'react';
import styles from './Index.less';

class Navgation extends Component {
  timer = null;

  num = 0;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    this.getTitle();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  getTitle() {
    if (this.num > 3) {
      return;
    }
    this.timer = setTimeout(() => {
      this.num += 1;
      this.setState({
        title: document.title,
      });
      clearTimeout(this.timer);
      this.getTitle();
    }, 300);
  }

  render() {
    const { isShowNav } = this.props;
    const { title } = this.state;
    return (
      <div className={styles.navWrapper}>
        {isShowNav && (
          <div className={styles.container}>
            <div className={styles.content}>
              <span
                className={styles.backBtn}
                onClick={() => {
                  window.executeNativeCmd('destroyPage');
                }}
              />
              <div className={styles.titleBox}>{title}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navgation;
