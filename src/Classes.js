import React, { Component } from 'react';



class Classes extends Component {

constructor(props){
super(props);
  
this.listItem=this.listItem.bind(this);

this.state={
  //My list
  classesList:[
     {nombre:'Fisica', codigoClase:'103'},
     {nombre:'UX', codigoClase:'201'},
     {nombre:'Teoria 2', codigoClase:'501'}
    ]
  };

}

listItem(item){ return (<li key={item.nombre}> {item.codigoClase} {item.nombre}</li>)}


render(){
return(
   <ul>
   {this.state.classesList.map(this.listItem)}
   </ul>
    );
 
  }

}

export default Classes;