import React from "react";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="p-3 mb-2 bg-primary text-white">
				<h1 className="text-center text-light">Luigi's To Do List</h1>
			</div>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="¿Que pendientes tengo?"
					aria-label="¿Que pendientes tengo?"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2">
						Agregar
					</button>
				</div>
			</div>

			<ul className="list-group">
				<li className="list-group-item font-weight-lighter">
					Mi primer tarea
					<button className="btn float-right text-muted">
						<i className="fas fa-user-times"></i>
					</button>
				</li>
				<li className="list-group-item font-weight-lighter">
					Mi segunda tarea
					<button className="btn float-right text-muted">
						<i className="fas fa-user-times"></i>
					</button>
				</li>
				<li className="list-group-item font-weight-lighter">
					Mi tercer tarea
					<button className="btn float-right text-muted">
						<i className="fas fa-user-times"></i>
					</button>
				</li>
			</ul>
			<p className="text-muted card pl-1">3 items left</p>
		</div>
	);
}
