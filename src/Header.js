import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <div>
      <header className="bg-primary text-white p-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3">掲示板</h1>
            <div>
              <Link to="/thread/new" className="btn btn-light me-2">
                スレッドを立てる
              </Link>
              <Link to="/" className="btn btn-light">
                home
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
