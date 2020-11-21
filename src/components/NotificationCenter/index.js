import React, { Component } from 'react';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import { BellOutlined } from '@ant-design/icons';
import { HyperLink, HyperLinkText } from 'components/shared';
import { COLORS } from 'components/theme/colors';
import { FONT_WEIGHTS } from 'components/theme/fonts';
import { bindActionCreators } from 'redux';
import { getAdminAllNotifications } from 'redux-modules/user/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const { SUCCESS } = COLORS;

class NotificationCenter extends Component {
  icon = { fontSize: '26px', color: 'white' };

  style = {
    height: '64px',
    lineHeight: '64px',
    boxShadow: '0 1px 4px rgba(0,21,41,.12)',
    padding: '10px 40px',
  };

  state = {
    filterOptions: { limit: 5, skip: 0 },
  };

  static propTypes = {
    user: PropTypes.shape({}),
    notificationsList: PropTypes.arrayOf(PropTypes.shape({})),
    getAdminAllNotifications: PropTypes.func,
    isFetchingNotificationList: PropTypes.bool,
    notificationCountBadge: PropTypes.number,
    showViewMore: PropTypes.bool,
  };

  static defaultProps = {
    user: undefined,
    notificationsList: [],
    getAdminAllNotifications: () => {},
    isFetchingNotificationList: false,
    notificationCountBadge: 0,
    showViewMore: false,
  };

  componentDidMount() {
    const { getAdminAllNotifications: getAdminAllNotificationsAction } = this.props;
    const { filterOptions } = this.state;
    getAdminAllNotificationsAction(filterOptions);
  }

  onViewMore = () => {
    const { getAdminAllNotifications: getAdminAllNotificationsAction } = this.props;
    const {
      filterOptions: { skip, limit },
    } = this.state;

    this.setState(
      {
        filterOptions: { skip: skip + 5, limit },
      },
      () => {
        const { filterOptions: filterQueriesNextState } = this.state;

        getAdminAllNotificationsAction(filterQueriesNextState);
      },
    );
  };

  handelMentionsData = mentions =>
    mentions.map(mention => {
      const {
        _id,
        title: { ar },
        createdAt,
        url,
        avatar,
      } = mention;

      return {
        id: _id,
        title: ar,
        datetime: new Date(createdAt).toLocaleTimeString(),
        avatar,
        extra:
          _id !== 'last_mention' ? (
            <HyperLink href={url} target="_blank">
              <HyperLinkText cursor="pointer" color={SUCCESS} fontWeight={FONT_WEIGHTS.NORMAL}>
                عرض التفاصيل{' '}
              </HyperLinkText>
            </HyperLink>
          ) : (
            ''
          ),
      };
    });

  render() {
    const {
      notificationsList,
      isFetchingNotificationList,
      notificationCountBadge,
      showViewMore,
    } = this.props;

    return (
      <div style={this.style}>
        <NoticeIcon
          className="notice-icon"
          loading={isFetchingNotificationList}
          count={notificationCountBadge}
          bell={<BellOutlined style={this.icon} />}
          onViewMore={this.onViewMore}
          locale={{
            emptyText: 'لا يوجد اشعارات',
            clear: 'مسح',
            viewMore: 'تحميل المزيد',
            title: 'إشعارات',
            emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
          }}
        >
          <NoticeIcon.Tab
            list={this.handelMentionsData(notificationsList)}
            title="إشعارات"
            emptyText="لا يوجد إشعارات"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
            showClear={false}
            showViewMore={showViewMore}
          />
        </NoticeIcon>
      </div>
    );
  }
}
NotificationCenter.displayName = 'NotificationCenter';

const mapStateToProps = state => ({
  user: state.user.user,
  notificationsList: state.user.notificationsList,
  isFetchingNotificationList: state.user.getAllHisNotification.isFetching,
  isFetchingNotificationListSuccess: state.user.getAllHisNotification.isSuccess,
  isFetchingNotificationListError: state.user.getAllHisNotification.isFail.isError,
  fetchingNotificationListErrorMessage: state.user.getAllHisNotification.isFail.message,
  notificationCountBadge: state.user.notificationCountBadge,
  showViewMore: state.user.showViewMore,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAdminAllNotifications,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
