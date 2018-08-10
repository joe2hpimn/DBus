/**
 * @author 戎晓伟
 * @description  普通用户-项目管理-TOPO管理
 */

import React, { PropTypes, Component } from 'react'
import Helmet from 'react-helmet'

// 导入自定义组件
import ProjectTopologyWrapper from '../../containers/ProjectManage/ProjectTopologyWrapper'

export default class TopologyWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projectId: '',
      projectDisplayName: ''
    }
  }
  componentWillMount = () => {
    const {location} = this.props
    const projectId = location.query.projectId
    const projectDisplayName = location.query.projectDisplayName
    if (projectId && projectDisplayName) {
      this.setState({projectId, projectDisplayName})
    } else {
      window.location.href = '/project-manage/home'
    }
  }

  render () {
    const {projectId, projectDisplayName} = this.state
    return (
      <div>
        <Helmet
          title="Project11"
          meta={[{ name: 'description', content: 'Description of Project' }]}
        />
        <ProjectTopologyWrapper
          projectId={projectId}
          projectDisplayName={projectDisplayName}
          isCreate
        />
      </div>
    )
  }
}
