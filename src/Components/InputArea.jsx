import React from "react";
import "../navbar.css";

export default function InputArea({ city, handleChange, handleClick }) {
  return (
    <div>
      <div class="pinterest">
        <div class="left">
          <a href="#" class="logo">
            <i class="fab fa-pinterest"></i>
          </a>
          <a href="#" class="home">
            Home
          </a>
        </div>

        <div class="search">
          <i class="fas fa-search"></i>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Search"
            value={city}
          />
        </div>

        <div class="right">
          <a href="#" class="items">
            <button
              style={{ border: 0, backgroundColor: "transparent" }}
              onClick={handleClick}
            >
              <i class="fas fa-search" />
            </button>
          </a>
          <a href="#" class="items">
            <i class="far fa-comment-dots"></i>
          </a>
          <a href="#" class="avatar">
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80"
                alt=""
              />
            </div>
          </a>
          <a href="#" class="items-down">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
