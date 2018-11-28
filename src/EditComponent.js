import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newDate = this.getDate.value;
    const newStreet = this.getStreet.value;
    const newNum = this.getNum.value;
    const newCol = this.getCol.value;
    const newCp = this.getCp.value;
    
    const data = {
      newName,
      newEmail,
      newDate,
      newStreet,
      newNum,
      newCol,
      newCp,
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
      <div key={this.props.post.id} className="post">

        <form className="form" onSubmit={this.handleEdit}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="name" ref={(input) => this.getName = input } 
                  className="form-control" placeholder="Nombre" defaultValue={this.props.post.name} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="email" name="username" ref={(input) => this.getEmail = input } 
                  className="form-control" placeholder="Correo Electronico" defaultValue={this.props.post.email} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="date" name="date" ref={(input) => this.getDate = input } 
                  className="form-control" placeholder="Fecha de Registro" defaultValue={this.props.post.date} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="street" ref={(input) => this.getStreet = input } 
                  className="form-control" placeholder="Calle" defaultValue={this.props.post.street} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" pattern="[0-9]*" name="num" ref={(input) => this.getNum = input } 
                  className="form-control" placeholder="Num. Ext" defaultValue={this.props.post.num} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" pattern="[0-9]*" name="cp" ref={(input) => this.getCp = input } 
                  className="form-control" placeholder="C.P" defaultValue={this.props.post.cp} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-group">
                <input required type="text" name="col" ref={(input) => this.getCol = input } 
                  className="form-control" placeholder="Colonia" defaultValue={this.props.post.col} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <button><i className="fa fa-edit"></i> Actualizar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);