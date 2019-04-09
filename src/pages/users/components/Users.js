import React from 'react';
import {connect} from 'dva';
import {Table, Pagination,Button} from 'antd';
import {routerRedux} from 'dva/router';
import {PAGE_SIZE} from '../constants';
import Styles from './Users.less';
import UserModal from './UserModal';

@connect(({testUsers, loading}) => ({...testUsers, loading}))
export default class Users extends React.Component {

  pageChangeHandler = (page) => {
    const {dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: '/users',
      query: {page},
    }))
  };

  createUser = ()=>{

  };

  render() {
    const columns = [
      {
        title: '姓名',
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: '邮箱',
        key: 'email',
        dataIndex: 'email',
      },
      {
        title: '手机号',
        key: 'phone',
        dataIndex: 'phone',
      },
      {
        title: '公司',
        key: 'companyName',
        dataIndex: 'company',
        render: (text, record) => {
          return <div>{record.company.name}</div>
        }
      },
      {
        title: '操作',
        key: 'options',
        render: () => {

        }
      }
    ];
    const {data, total, page,loading} = this.props;
    return (
      <div>
        <div className={Styles.create}>
          <UserModal record={{}} onOk={this.createUser}>
            <Button type="primary">新增用户</Button>
          </UserModal>
        </div>
        <Table rowKey={record => record.id} columns={columns} dataSource={data} pagination={false} loading={loading.models.testUsers}/>
        <Pagination className="ant-table-pagination" showQuickJumper current={page} total={total} pageSize={PAGE_SIZE}
                    onChange={this.pageChangeHandler}/>
      </div>
    )
  }
}
