import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

class App extends Component {
  id = 3; // 기본 ID 값

  state = {
    input: "",
    todos: [], // 초기에는 빈 배열
  };

  // 컴포넌트가 마운트될 때 localStorage에서 todos를 불러옴
  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const todos = JSON.parse(savedTodos);

      // 저장된 할 일들 중에서 가장 큰 id를 찾아 this.id에 설정
      const maxId =
        todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
      this.id = maxId + 1; // 고유한 ID로 설정

      this.setState({
        todos: todos,
      });
    }
  }

  // todos가 업데이트될 때마다 localStorage에 저장
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;

    if (input.trim()) {
      this.setState({
        input: "",
        todos: todos.concat({
          id: this.id++, // 고유한 id 생성
          text: input,
          checked: false,
        }),
      });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    const nextTodos = todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: nextTodos,
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <Router>
        <Routes>
          {/* 기본 경로에서 /todolist로 리디렉션 */}
          <Route path="/" element={<Navigate to="/todolist" />} />
          <Route
            path="/todolist"
            element={
              <TodoListTemplate
                form={
                  <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                  />
                }
              >
                <TodoItemList
                  todos={todos}
                  onToggle={handleToggle}
                  onRemove={handleRemove}
                />
              </TodoListTemplate>
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
