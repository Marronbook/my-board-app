import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const New = () => {
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onClickButton = async () => {
    try {
      await axios.post(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`,
        {
          title: text,
        }
      );
      setIsSent(true);
    } catch (error) {
      console.log("エラーが発生しました。");
    }
  };
  useEffect(() => {
    if (isSent) {
      setText("");
      setIsSent(false);
    }
  }, [isSent]);

  return (
    <div className="container mt-4">
      <h6>スレッド新規作成</h6>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="スレッドタイトル"
        />
        <div className="input-group-append">
          <button
            onClick={onClickButton}
            className="btn btn-primary"
            type="button"
          >
            作成
          </button>
        </div>
      </div>
    </div>
  );
};
