import React, { useState } from "react";

//create your first component
export function Home() {
	const [todo, setTodo] = useState();
	const [todos, setTodos] = useState([
		"Mi primer tarea",
		"Mi segunda tarea",
		"Mi tercer tarea"
	]);
	const agregar = e => {
		if (Object.keys(todo).length === 0 || todo.trim() === "") {
			alert("el campo no puede estar vacio");
			return;
		}

		//splice busca el indice y elimina el elemento

		setTodos([...todos, todo]);
		// console.log(todo);
	};

	const eliminar = indice => {
		const newTodos = [...todos];
		newTodos.splice(indice, 1);
		setTodos(newTodos);
	};

	const cambiar = e => {
		// console.log(e.target.value);
		setTodo(e.target.value);
	};
	return (
		<div className="container-fluid">
			<div className="p-3 mb-2 bg-primary text-white">
				<h1 className="text-center text-light">Luigi To Do List</h1>
			</div>
			<div className="input-group mb-3">
				<form onSubmit={e => e.preventDefault()}>
					<input
						type="text"
						name="todo"
						className="form-control"
						placeholder="¿Que pendientes tengo?"
						aria-label="¿Que pendientes tengo?"
						aria-describedby="button-addon2"
						onChange={cambiar}
					/>
					<div className="input-group-append">
						<button
							onClick={agregar}
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2">
							Agregar
						</button>
					</div>
				</form>
			</div>

			<ul className="list-group">
				{todos.map((item, index) => (
					<li
						key={index}
						index={index}
						className="list-group-item font-weith-lighter">
						{item}
						<button
							// la funcion de abajo evita que se autollame
							onClick={() => eliminar(index)}
							className="btn float-right text-muted">
							<i className="fas fa-user-times"></i>
						</button>
					</li>
				))}
			</ul>
			<p className="text-muted card pl-1">{todos.length} items left</p>
		</div>
	);
}
