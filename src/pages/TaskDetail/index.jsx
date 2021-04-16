import { Row, Card, Col } from "antd";
import React, { useEffect } from "react";
import {connect} from 'react-redux';

import { getDetail } from "../../redux/actions";


function DetailPage(props) {
  const { match, taskDetail, getDetail} = props;
  const index = match.params.index;

  useEffect(() => {
    getDetail({ index: index});
  }, []);

  return (
    <Card style={{ width: 300, margin: "16px auto" }}>
      <Row>
        <Col span={8}>Title:</Col>
        <Col span={16}>{taskDetail.title}</Col>
        <Col span={8}>Description:</Col>
        <Col span={16}>{taskDetail.description}</Col>
      </Row>
    </Card>
  );
}

const mapStateToProps = (state) => {
  const { taskDetail } = state.toDoListReducer;
  return {
    taskDetail: taskDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (params) => dispatch(getDetail(params)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
