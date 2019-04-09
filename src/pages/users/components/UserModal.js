import React from 'react';
import PropTypes from 'prop-types';
import {Form, Modal, Input} from 'antd';

const FormItem = Form.Item;
@Form.create()
export default class UserEditModal extends React.Component {

  state = {
    visible: false,
  };
  okHandler = () => {

  };
  hideModelHandler = () => {

  };
  showModalHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {children, record: {name, email, phone}} = this.props;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    return (
      <span>
        <span onClick={this.showModalHandler}>
          {children}
        </span>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="Name"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Email"
            >
              {
                getFieldDecorator('email', {
                  initialValue: email,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Phone"
            >
              {
                getFieldDecorator('phone', {
                  initialValue: phone,
                })(<Input/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    )
  }
}
UserEditModal.propTypes = {
  record: PropTypes.object,
  onOk: PropTypes.func,
};
