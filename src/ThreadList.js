import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./ThreadList.css";

export const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  const getThreads = async () => {
    try {
      const url =
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
      const response = await axios.get(url);
      const data = response.data;
      setThreads(data);
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <Container>
      <h1 className="thread-list-title">新着スレッド一覧</h1>
      <Row>
        <Col>
          <ListGroup>
            {threads.map((thread) => (
              <ListGroup.Item key={thread.id} className="thread-list-item">
                <Link to={`/thread/${thread.id}`} className="thread-list-link">
                  {thread.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
