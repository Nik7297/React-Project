// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue !== '') {
//       setTodos([...todos, { text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const handleDelete = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   const handleEdit = (index) => {
//     const newTodos = [...todos];
//     const updatedTodo = prompt('Update todo', newTodos[index].text);
//     if (updatedTodo !== null) {
//       newTodos[index].text = updatedTodo;
//       setTodos(newTodos);
//     }
//   };

//   const handleCheck = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <span style={todo.completed ? { textDecoration: 'line-through' } : null}>
//               {todo.text}
//             </span>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleCheck(index)}>
//               {todo.completed ? 'Undo' : 'Done'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;







// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addTodo, deleteTodo, editTodo, checkTodo } from './actions';

// const TodoList = ({ todos, addTodo, deleteTodo, editTodo, checkTodo }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue !== '') {
//       addTodo({ text: inputValue, completed: false });
//       setInputValue('');
//     }
//   };

//   const handleDelete = (id) => {
//     deleteTodo(id);
//   };

//   const handleEdit = (id) => {
//     const updatedTodo = prompt('Update todo', todos.find((todo) => todo.id === id).text);
//     if (updatedTodo !== null) {
//       editTodo({ id, text: updatedTodo });
//     }
//   };

//   const handleCheck = (id) => {
//     checkTodo(id);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span style={todo.completed ? { textDecoration: 'line-through' } : null}>
//               {todo.text}
//             </span>
//             <button onClick={() => handleDelete(todo.id)}>
//               <i className="fas fa-trash-alt"></i>
//             </button>
//             <button onClick={() => handleEdit(todo.id)}>
//               <i className="fas fa-edit"></i>
//             </button>
//             <button onClick={() => handleCheck(todo.id)}>
//               {todo.completed ? (
//                 <i className="fas fa-undo"></i>
//               ) : (
//                 <i className="fas fa-check"></i>
//               )}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo, checkTodo })(TodoList);
