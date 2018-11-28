import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const date = this.getDate.value;
    const street = this.getStreet.value;
    const num = this.getNum.value;
    const col = this.getCol.value;
    const cp = this.getCp.value;

    const data = {
      id: new Date(),
      name,
      email,
      date, 
      street,
      num,
      col,
      cp,
      editing: false,
    }
    
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })
    this.getName.value = '';
    this.getEmail.value = '';
    this.getDate.value = '';
    this.getStreet.value = '';
    this.getNum.value = '';
    this.getCol.value = '';
    this.getCp.value = '';
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Formulario</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="name" ref={(input) => this.getName = input } className="form-control" placeholder="Nombre" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="email" name="username" ref={(input) => this.getEmail = input } className="form-control" placeholder="Correo Electronico" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="date" name="date" ref={(input) => this.getDate = input } className="form-control" placeholder="Fecha de Registro" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="street" ref={(input) => this.getStreet = input } className="form-control" placeholder="Calle" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" pattern="[0-9]*" name="num" ref={(input) => this.getNum = input } className="form-control" placeholder="Num. Ext" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" pattern="[0-9]*" name="cp" ref={(input) => this.getCp = input } className="form-control" placeholder="C.P" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="col" ref={(input) => this.getCol = input } className="form-control" placeholder="Colonia" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <button><i className="fa fa-user"></i> Registrar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);