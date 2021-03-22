import React from "react";

//create your first component
export function Home() {
	return (
		<div className="container">
			<h1 className="text-center text-muted">To Do List</h1>
			<div class="input-group mb-3">
				<input
					type="text"
					class="form-control"
					placeholder="¿Que pendientes tengo?"
					aria-label="¿Que pendientes tengo?"
					aria-describedby="button-addon2"
				/>
				<div class="input-group-append">
					<button
						class="btn btn-outline-secondary"
						type="button"
						id="button-addon2">
						Clear
					</button>
				</div>
			</div>

			<ul className="list-group">
				<li className="list-group-item font-weight-lighter">
					Mi primera tarea
					<button className="btn float-right text-muted">
						<i class="fas fa-user-times"></i>
					</button>
				</li>
				<li className="list-group-item font-weight-lighter">
					Mi segunda tarea
					<button className="btn float-right text-muted">
						<i class="fas fa-user-times"></i>
					</button>
				</li>
				<li className="list-group-item font-weight-lighter">
					Mi tercera tarea
					<button className="btn float-right text-muted">
						<i class="fas fa-user-times"></i>
					</button>
				</li>
			</ul>
			<p className="text-muted card pl-1">3 items left</p>
		</div>
	);
};