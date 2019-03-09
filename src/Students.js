import React, { Component } from 'react';




class Students extends Component {

constructor(props){
super(props);
  
this.listItem=this.listItem.bind(this);

this.state={
  //My list
  studentList:[
     {nombre:'Mike', apellido:'Sanchez', cuenta:'21711132'},
     {nombre:'Andrea', apellido:'Rodriguez', cuenta:'21718532'},
     {nombre:'Fernando', apellido:'Madrid', cuenta:'2832533'}
    ]
  };

}

listItem(item){ return (<li key={item.nombre}> {item.cuenta} {item.nombre} {item.apellido}</li>)}


render(){
return(
   <ul>
   {this.state.studentList.map(this.listItem)}
   </ul>
    );
 
  }

}

export default Students;