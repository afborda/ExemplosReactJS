import React, { useReducer, useState } from "react";

/**
 * @reducer
 * @disclaimer - como o useReducer é algo um pouco mais avançado que alguns hooks mais simples
  é recomendado a leitura dos docs: https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer
 * @param state - estado que será processado e gerado um novo após uma ação ser selecionada
 * @param action - item que passamos para alterar o objeto
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": // Aqui definimos o nome da ação que iremos fazer
      return {
        // Aqui retornamos o nosso objeto com as modificações necessárias
        todos: [
          ...state.todos,
          { id: action.id, text: action.text, completed: false },
        ],
      };
    case "COMPLETE_TODO":
      return {
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const exampleTodos = [
    {
      id: Math.random() * 100,
      text: "Eu gosto de aprender React :D",
      completed: false,
    },
  ];

  const [{ todos }, dispatch] = useReducer(reducer, { todos: exampleTodos });
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const onFormSubmited = (event) => {
    event.preventDefault();
    setId(Math.random() * 100);
    dispatch({ type: "ADD_TODO", text, id });
    setText("");
  };

  return (
    <>
      <form onSubmit={(event) => onFormSubmited(event)}>
        <label>O que você têm que fazer hoje?</label>
        <br />
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Digite na sua lista de afazeres"
        />
      </form>

      {todos.map((item, index) => (
        <div
          key={item.id}
          style={{
            textDecoration: item.completed ? "line-through" : "underline",
            color: item.completed ? "green" : "black",
          }}
          onClick={() => dispatch({ type: "COMPLETE_TODO", id: item.id })}
        >
          <span>
            {item.text}
            <button
              style={{
                marginLeft: "5px",
              }}
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", id: item.id, index })
              }
            >
              X
            </button>
          </span>
        </div>
      ))}
    </>
  );
};

export default UseReducer;
