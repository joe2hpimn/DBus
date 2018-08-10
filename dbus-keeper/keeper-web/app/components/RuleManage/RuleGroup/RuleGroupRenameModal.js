import React, { PropTypes, Component } from 'react'
import { Modal, Form, Select, Input, Button, message,Table } from 'antd'
import { FormattedMessage } from 'react-intl'
import OperatingButton from '@/app/components/common/OperatingButton'

// 导入样式
import styles from './res/styles/index.less'
import Request from "@/app/utils/request";

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

@Form.create()
export default class RuleGroupRenameModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleSubmit = () => {
    const {tableId, updateApi, onClose, record, onRequest} = this.props
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onRequest({
          api: updateApi,
          params: {
            ...values,
            tableId,
            groupId: record.id,
            newStatus: record.status
          },
          callback: onClose
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const {key, visible, record, onClose} = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 5 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 19 },
        sm: { span: 12 }
      }
    }
    return (
      <div className={styles.table}>
        <Modal
          key={key}
          visible={visible}
          maskClosable={true}
          width={1000}
          title={'重命名'}
          onCancel={onClose}
          onOk={this.handleSubmit}
        >
          <Form autoComplete="off" onKeyUp={e => {
            e.keyCode === 13 && this.handleSubmit()
          }}>
            <FormItem label="新规则组名称" {...formItemLayout}>
              {getFieldDecorator('newName', {
                initialValue: record.groupName,
              })(<Input size="large" type="text" />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

RuleGroupRenameModal.propTypes = {
}
