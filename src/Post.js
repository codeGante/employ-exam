import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {

  render() {
    return (
        <div className="post">
        <h1 className="post_heading">Lista de Empleados</h1>
          <div className="table-responsive">
            <div className="control-buttons">
              <button className="edit"
                onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                }
              >Editar</button>
              <button className="delete"
                onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
              >Eliminar</button>
            </div>    
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fecha de registro</th>
                    <th scope="col">Calle</th>
                    <th scope="col">Numero exterior</th>
                    <th scope="col">Colonia</th>
                    <th scope="col">Codigo postal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.post.name}</td>
                    <td>{this.props.post.email}</td>
                    <td>{this.props.post.date}</td>
                    <td>{this.props.post.street}</td>
                    <td>{this.props.post.num}</td>
                    <td>{this.props.post.col}</td>
                    <td>{this.props.post.cp}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    );
  }
}
export default connect()(Post);