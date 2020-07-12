import React from 'react';
import './Table.css';


class Table extends React.Component {
    constructor(){
    super();
    this.state = {
      obj : {
              id: '', 
              Projet: '', 
              AirCraft: '', 
              Responsable: '', 
              dateOfentrie: '',
              Result : '',
              Statu : '',
              Audit_Number: ''
             }
    }
  }

TowAction=(e)=>{
  this.props.fetchentriesData(e);
  this.props.IsClick();
};



render(){
return  (
    <table>
        <thead>
            <tr>
                <th>Audit Nmber</th>
                <th>Projet</th>
                <th>A/C</th>
                <th>Responsable Audit</th>
                <th>Date</th>
                <th>Statu</th>
            </tr>
        </thead>
        <tbody>
        {
            this.props.AllEntries.map((entries,index) => {
          return (
            <tr key={index}  data-index={index} onClick={this.TowAction}>
              <td>{entries.Audit_Number}</td>
              <td>{entries.projet}</td>
              <td>{entries.aircraft}</td>
              <td>{entries.responsable}</td>
              <td>{entries.dateofentrie.slice(0,-14)}</td>
              <td>{this.props.statu}</td>
            </tr>
          );
        })}
        </tbody>
    </table>
    
    )    
}
}
export default Table;
