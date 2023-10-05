import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import "./ThreadPosts.css";

export const ThreadPosts = () => {
  const { thread_id } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  const getThreadPosts = async () => {
    try {
      const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${thread_id}/posts`;
      const response = await axios.get(url);
      const data = response.data;
      setPosts(data.posts);
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  const handlePostSubmit = async () => {
    try {
      const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${thread_id}/posts`;
      const response = await axios.post(url, { post: newPostContent });
      const newPost = response.data;

      setPosts((prevPosts) => [...prevPosts, newPost]);

      setNewPostContent("");
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  useEffect(() => {
    getThreadPosts();
  }, [thread_id]);

  return (
    <Container>
      <h1 className="thread-title">スレッド内投稿一覧</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            {posts.map((post) => (
              <ListGroup.Item key={post.id} className="post-item">
                {post.post}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="postContent">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="メッセージを入力してください"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="post-input"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handlePostSubmit}
              className="post-button"
            >
              投稿
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
