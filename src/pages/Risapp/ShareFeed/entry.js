import '@/common/css/reset.css';
import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import { formatMessage } from './locales';
import styles from './index.less';
import logo from '@/assets/Risapp/logo.png';
import replayIcon from '@/assets/Risapp/ShareFeed/replay.png';
import facebookIcon from '@/assets/Risapp/ShareFeed/facebook.png';
import whatsappIcon from '@/assets/Risapp/ShareFeed/whatsapp.png';
import twitterIcon from '@/assets/Risapp/ShareFeed/twitter.png';
import hotIcon from '@/assets/Risapp/ShareFeed/hot.png';
import classNames from 'classnames/bind';
import * as shareFeedApi from '@/services/Risapp/sharefeed';
import { getPageQuery } from '@/utils/utils';
const cx = classNames.bind(styles);

document.title = formatMessage('title.risApp') || document.title;

const bestArr = [{ "feed_id": "5cce43a3ce797", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/JDrzrY3R-2M.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/JDrzrY3R-2M.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/JDrzrY3R-2M.mp4.new.jpg" } }, { "feed_id": "5cdf546925f2d", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_a3QxOL3.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_a3QxOL3.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_a3QxOL3.mp4.new.jpg" } }, { "feed_id": "5cdf592bb8273", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_a2ZGmx1.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_a2ZGmx1.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_a2ZGmx1.mp4.new.jpg" } }, { "feed_id": "5cdf708825ef8", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_awA5y01.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_awA5y01.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_awA5y01.mp4.new.jpg" } }, { "feed_id": "5cdf72e04e0bb", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_a83py31.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_a83py31.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_a83py31.mp4.new.jpg" } }, { "feed_id": "5cdf72e056d41", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_aVYDpnw.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_aVYDpnw.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_aVYDpnw.mp4.new.jpg" } }, { "feed_id": "5cdf7790d2508", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/9gag_aVYX5q2.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/9gag_aVYX5q2.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/9gag_aVYX5q2.mp4.new.jpg" } }, { "feed_id": "5ce530775448b", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZW3B6.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZW3B6.jpg' } }, { "feed_id": "5ce53077686b8", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aLgbLxP.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aLgbLxP.jpg' } }, { "feed_id": "5ce530777750d", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aGZoz1K.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aGZoz1K.jpg' } }, { "feed_id": "5ce532ccbbea4", "content_type": "gif" }, { "feed_id": "5ce532cd5486d", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aD1Qo5B.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aD1Qo5B.jpg' } }, { "feed_id": "5ce535273d97c", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a6O3N1m.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a6O3N1m.jpg' } }, { "feed_id": "5ce5352741613", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aXYGjrb.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aXYGjrb.jpg' } }, { "feed_id": "5ce5352815115", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aD1MEE9.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aD1MEE9.jpg' } }, { "feed_id": "5ce53528326a9", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az9QzZp.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az9QzZp.jpg' } }, { "feed_id": "5ce53528366be", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZy6vG.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZy6vG.jpg' } }, { "feed_id": "5ce5377ba211f", "content_type": "gif" }, { "feed_id": "5ce5377c2f34b", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a2ZLBG9.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a2ZLBG9.jpg' } }, { "feed_id": "5ce5377c4d1aa", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aA3OEzR.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aA3OEzR.jpg' } }, { "feed_id": "5ce5377c5fe20", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a5Mq0wq.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a5Mq0wq.jpg' } }, { "feed_id": "5ce5377c6b686", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0Qw7LO.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0Qw7LO.jpg' } }, { "feed_id": "5ce539e8ed014", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a83KY9Q.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a83KY9Q.jpg' } }, { "feed_id": "5ce539e90e9eb", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_axzYEDD.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_axzYEDD.jpg' } }, { "feed_id": "5ce539e9e8acf", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_agn46bw.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_agn46bw.jpg' } }, { "feed_id": "5ce539ea93a92", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aQRADeq.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aQRADeq.jpg' } }, { "feed_id": "5ce53c2e24fda", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a3Q8G78.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a3Q8G78.jpg' } }, { "feed_id": "5ce53c2e90614", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a6OnDEm.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a6OnDEm.jpg' } }, { "feed_id": "5ce54112e2219", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_awAOmg1.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_awAOmg1.jpg' } }, { "feed_id": "5ce5411390444", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aVYE90w.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aVYE90w.jpg' } }, { "feed_id": "5ce54113c8363", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0QVd7Q.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0QVd7Q.jpg' } }, { "feed_id": "5ce54113cc7b9", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_awA3Lwy.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_awA3Lwy.jpg' } }, { "feed_id": "5ce541141886c", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aR1ZZ2B.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aR1ZZ2B.jpg' } }, { "feed_id": "5ce54114a779d", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0Qow6O.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0Qow6O.jpg' } }, { "feed_id": "5ce5434eca29c", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_arGyyOK.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_arGyyOK.jpg' } }, { "feed_id": "5ce5434ee5309", "content_type": "gif" }, { "feed_id": "5ce5434f6d255", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az9eD5b.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az9eD5b.jpg' } }, { "feed_id": "5ce5434f86bcf", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az92nRB.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_az92nRB.jpg' } }, { "feed_id": "5ce5435025367", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZxz9V.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aMZxz9V.jpg' } }, { "feed_id": "5ce545a1801fb", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aGZdBe7.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aGZdBe7.jpg' } }, { "feed_id": "5ce545a1988ed", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0QR2Vz.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a0QR2Vz.jpg' } }, { "feed_id": "5ce545a1c68bd", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aE2g8Qo.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aE2g8Qo.jpg' } }, { "feed_id": "5ce545a233894", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_agnnnO1.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_agnnnO1.jpg' } }, { "feed_id": "5ce545a2ab68d", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aWYqn64.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aWYqn64.jpg' } }, { "feed_id": "5ce54808830ce", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aQRxVx7.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aQRxVx7.jpg' } }, { "feed_id": "5ce5480905702", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a737M8A.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_a737M8A.jpg' } }, { "feed_id": "5ce54809632ad", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aE21O3e.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aE21O3e.jpg' } }, { "feed_id": "5ce54a41923f7", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aA3V3Mg.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/9gag_aA3V3Mg.jpg' } }, { "feed_id": "5ce692693aa89", "content_type": "pics", "pic_src": 'http://dzsf6n3czs1lh.cloudfront.net/images/ins_BxDnqunJDQq.jpg', "pics": { "src": 'http://dzsf6n3czs1lh.cloudfront.net/images/ins_BxDnqunJDQq.jpg' } }, { "feed_id": "5cecdc714397d", "content_type": "vedio", "pic_src": "http://cover.oas.golemon123.com/cover/ins_Bxf5K6piRHX.mp4.new.jpg", "low_src": "http://dretq8rzit3t7.cloudfront.net/ins_Bxf5K6piRHX.mp4", "vedio": { "front_pic": "http://cover.oas.golemon123.com/cover/ins_Bxf5K6piRHX.mp4.new.jpg" } }]

class ShareFeed extends Component {

  state = {
    open: true, // 描述 默认展开样式
    swiperData: [],
    user: {},
    endList: [], // 视频放完分享
    risData: {}
  }

  node = null;

  componentDidMount() {
    this.setState({ width: parseFloat(window.getComputedStyle(this.node).width) })
    this.fetch();

    //埋点 event: lucky_show
    const query = getPageQuery();
    window.gtag('event', 'h5_share_page_show', { action: query.feed_id });
    // window.executeNativeCmd('onStat', { key: 'lucky_show', });
  }

  fetch() {
    const query = getPageQuery();
    let feedList = [];
    shareFeedApi.getFeeds({ feed_id: query.feed_id })
      .then(({ code, data, msg }) => {
        if (code === 0) {
          const { feeds } = data;
          feedList.push(feeds[0]);
          return shareFeedApi.getFeedByTopic({ m2: query.m2, topic_id: feeds[0] ? feeds[0].topic_id : '' })
        }
        return {}
      }).then(({ code, data, msg }) => {
        if (code === 0) {
          data.feeds.forEach(feed => {
            feedList.push(feed);
          });

          const { name, avater, app = '' } = query;
          let randomBanner = [];
          for (let i = 0; i < 3; i++) {
            randomBanner.push(this.renderRandom());
          }
          console.log(randomBanner);
          this.setState({
            risData: {
              ...this.state.risData,
              feeds: [...feedList],
            },
            endList: feedList.map(() => { return false }),
            swiperData: randomBanner,
            user: { name, avater },
            downloadUrl: `https://play.google.com/store/apps/details?id=com.golemon.wegoo.funny&referrer=utm_source=share&utm_medium=${app}%2Fsystem%2Ftwitter&utm_term=feedid&utm_content=m2&anid=admob`
          })
        }
      })
    // const { dispatch } = this.props;

    // dispatch({
    //   type: 'risApp/getFeeds',
    //   payload: {
    //     feed_id: this.props.location.query.feed_id,
    //     m2: this.props.location.query.m2,
    //   }
    // }).then(res => {
    //   if (res && res.length > 0) {
    //     const list = [];
    //     res.forEach(it => { list.push(false) })
    //     this.setState({ endList: list })
    //   }
    // })
    // const { name, avater, app = '' } = this.props.location.query;
    // let randomBanner = [];
    // for (let i = 0; i < 3; i++) {
    //   randomBanner.push(this.renderRandom());
    // }
    // console.log(randomBanner);
    // this.setState({
    //   swiperData: randomBanner,
    //   user: { name, avater },
    //   downloadUrl: `https://play.google.com/store/apps/details?id=com.golemon.wegoo.funny&referrer=utm_source=share&utm_medium=${app}%2Fsystem%2Ftwitter&utm_term=feedid&utm_content=m2&anid=admob`
    // })
  }

  renderRandom() {
    return bestArr[parseInt(Math.random() * 50, 10)]
  }

  toDownload(type) {
    const query = getPageQuery();
    //埋点 event: lucky_show
    window.gtag('event', 'h5_feedshare_download_click', { label: type, action: query.feed_id });
    window.open(
      this.state.downloadUrl
      // 'https://play.google.com/store/apps/details?id=com.golemon.wegoo.funny&referrer=utm_source%3Dshare%26utm_medium%3Dfacebook%252Fsystem%252Ftwitter%26utm_term%3Dfeedid%26utm_content%3Dm2%26anid%3Dadmob'
    )
  }


  transformHeight(val) {
    let per = this.state.width / val.width;
    if (!(val.height * per)) return;
    return val.height * per
  }


  playFeed(it) {
    console.log('play', it)
    //埋点 event: lucky_show
    window.gtag('event', 'h5_feedshare_download_click', { action: it.feed_id });
  }

  endFeed(it, key) {
    let list = [...this.state.endList];
    list[key] = true;
    this.setState({ endList: list })
  }


  replay(key) {
    let list = [...this.state.endList];
    list[key] = false;
    this.setState({ endList: list })
    window.document.getElementById('video' + key).play();
  }

  showType(item, key) {
    if (item.content_type === "vedio") {
      return (
        <div style={{ position: "relative" }}>
          <video
            controls
            className={styles.videoStyle}
            id={'video' + key}
            style={{
              width: '100%',
              height: this.transformHeight(item)
            }}
            onPlay={() => { this.playFeed(item) }}
            onEnded={() => { this.endFeed(item, key) }}
          >
            <source src={item.low_src} type="video/mp4" />
          </video>
          <div className={styles.modalStyle}
            style={{
              width: '100%',
              height: this.transformHeight(item),
              display: this.state.endList[key] ? 'flex' : 'none'
            }}>
            <div>
              <img src={replayIcon} alt="" className={styles.videoShare} onClick={() => { this.replay(key) }} />
              <img src={whatsappIcon} alt="" className={styles.videoShare} onClick={() => { this.shareMore(0) }} />
              <img src={facebookIcon} alt="" className={styles.videoShare} onClick={() => { this.shareMore(1) }} />
              <img src={twitterIcon} alt="" className={styles.videoShare} onClick={() => { this.shareMore(2) }} />
            </div>
          </div>
        </div>
      )
    }

    if (item.content_type === "gif") {
      return (
        <img
          src={item}
          className={styles.videoStyle}
          alt=""
          style={{
            width: '100%',
            height: this.transformHeight(item)
          }} />
      )
    }
    if (item.content_type === "pics") {
      return (
        <img
          src={item.pics.src[0]}
          className={styles.videoStyle}
          alt=""
          style={{
            width: '100%',
            height: this.transformHeight(item)
          }} />
      )
    }

  }


  showMore(item) {
    if (item.content_type === "vedio") {
      return (
        <Fragment>
          <img
            src={item.vedio.front_pic}
            className={styles.openRisapp}
            alt=""
          />
          <div className={styles.play}></div>
        </Fragment>
      )
    }

    if (item.content_type === "gif") {
      return (
        <Fragment>
          <img
            src={item}
            className={styles.openRisapp}
            alt=""
          />
          <div className={styles.play}></div>
        </Fragment>
      )
    }
    if (item.content_type === "pics") {
      return (
        <Fragment>
          <img
            src={item.pics.src[0]}
            className={styles.openRisapp}
            alt=""
          />
          <div className={styles.play}></div>
        </Fragment>
      )
    }

  }

  // 分享 
  shareMore(type) {
    const shareUrl = window.location.href;
    const shareTitle = window.document.title;
    console.log(shareUrl, shareTitle)
    const query = getPageQuery();

    //埋点 event: lucky_show
    window.gtag('event', 'h5_share_content_click', { action: query.feed_id, label: type });
    switch (type) {
      case 0:
        // window.open('whatsapp://send?text=NOS CASAMOS.\n' + encodeURIComponent(shareUrl));
        // window.location.href = 'whatsapp://chat?code=GOyZN6Dy3vg65xhQ0nIDhm';
        window.location.href = `whatsapp://send?text=''\n${encodeURIComponent(shareUrl)}`
        break;
      case 1:// 分享到Facebook的代码
        window.open(`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${encodeURIComponent(shareUrl)}&display=popup&ref=plugin&src=share_button`)
        break;
      case 2:// 分享到twitter的代码
        window.open(`https://twitter.com/intent/tweet?hashtags=&url=${encodeURIComponent(shareUrl)}&text=${''}&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2Fen%2Fdocs%2Ftwitter-for-websites%2Ftweet-button%2Fguides%2Fparameter-reference1&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&tw_p=tweetbutton`);
        break;
      default: break;
    }
  }

  render() {
    const { user, open, swiperData, risData } = this.state;
    const it = risData.feeds && risData.feeds[0] || {};
    return (
      <div className={styles.risApp} ref={(ref) => this.node = ref}>
        <div className={styles.carousel} onClick={() => { this.toDownload('videocover') }}>
          <div className={styles.swiper}>
            {/* <Carousel
              autoplay={false}
              // autoplayInterval={500}
              infinite={true}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
              dotStyle={{ width: 3, height: 3, background: 'rgba(255,255,255,0.7)' }}
              dotActiveStyle={{ width: 6, height: 3, background: '#FFFFFF' }}
            >
            </Carousel> */}
            {swiperData.map((val, key) => (
              <div style={{ height: 43, display: 'flex', alignItems: 'center' }} key={key}>
                <div className={styles.swiperIcon}>
                  <img src={val.pic_src} alt="" />
                  {/* <div className={styles.play}> </div> */}
                </div>
                <div>{formatMessage({ id: 'risApp.popular' })}</div>
              </div>
            ))}
          </div>
          <div className={styles.inviteMore} >{formatMessage({ id: 'risApp.open' })}</div>
        </div>
        {
          it ? //map((it, key) =>
            <div className={styles.item}>
              {/* <div className={styles.title}>
                <div className={styles.authorIcon} style={{ backgroundImage: `url(${it.avatar})` }}></div>
                <div className={styles.authorName}>{it.author}</div>
                <div className={styles.goDownload} onClick={() => { this.toDownload('follow') }}>{formatMessage({ id: 'risApp.message.follow' })}</div>
              </div>
             */}
              <div>{this.showType(it, 0)}</div>
              {
                user ?
                  <div className={styles.risDownload} onClick={() => { this.toDownload('googleplay') }}>
                    <div className={styles.downLoadIcon} style={{ backgroundImage: user.avatar ? `url(${user.avatar})` : `url(${logo})` }}></div>
                    {/* <div className={styles.downLoadDesc}>{user.name ? `${user.name + formatMessage({ id: 'risApp.message.invite' })}` : formatMessage({ id: 'risApp.message.download' })}</div> */}
                    <div className={styles.downLoadDesc}>{formatMessage({ id: 'risApp.download' })}</div>
                    <div className={styles.downLoadBtn}></div>
                  </div>
                  : null
              }
              {it.title ?
                <div className={styles.discription} >
                  <p style={{ WebkitBoxOrient: 'vertical' }}
                    className={cx(!open ? styles.showExpend : '')}
                  >{it.title}</p>
                  {it.title.length > 50 ?
                    <div className={cx(open ? styles.open : styles.pack)} onClick={
                      () => { this.setState({ open: !open }) }
                    }></div>
                    : null}
                </div> : null}
              <div className={styles.share}>
                <div>{formatMessage({ id: 'risApp.share' })}</div>
                <div>
                  <img src={whatsappIcon} alt="" className={styles.shareIcon} onClick={() => { this.shareMore(0) }} />
                  <img src={facebookIcon} alt="" className={styles.shareIcon} onClick={() => { this.shareMore(1) }} />
                  <img src={twitterIcon} alt="" className={styles.shareIcon} onClick={() => { this.shareMore(2) }} />
                </div>
              </div>
            </div>
            : null
          //)
        }
        <div className={styles.moreDiv}>
          <div className={styles.hotTitle}><img src={hotIcon} alt="" />HOT</div>
          <div className={styles.hotMain}>
            {risData.feeds && risData.feeds.slice(1).map((it, key) =>
              <div
                className={styles.hotItem}
                key={key}
                onClick={() => { this.toDownload('morevideo') }}>
                {this.showMore(it)}
              </div>
            )}
          </div>
        </div>
      </div >
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<ShareFeed />, rootElement);