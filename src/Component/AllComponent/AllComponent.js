import React from "react";
import './AllComponent.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class AllComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
   		Start_DATE :'' ,
   		Progress : '' ,
   		End_DATE : '' ,
   		Comment:'',
   		clikOnTab : false,
   		ClickForUpdate : false,
   		CliktoSeeWrkbooks:false,
   		ClickOnCahier : false,
   		ClickForUpdate2 : false,
   		Conformiter : '',
   		LowSnag : [],
   		MeduimSnag :[],
   		HightSnag : []
   		
   		
    }
  }

Update2 =()=> {	
	fetch('https://gentle-sands-20048.herokuapp.com/update2',{
		method:'put',
		headers:{'Content-type':'application/json'},
		body : JSON.stringify({
			id : this.props.Myobj3.id,
			id_moun : this.props.Myobj2.id,
			Audit_Number : this.props.Myobj2.audit_number,
			Responsable_Audit : this.props.Myobj2.responsable_audit,
			dateOfentrie : this.props.Myobj2.dateofentrie,
			AirCraft : this.props.Myobj2.aircraft,
			Mounument :this.props.Myobj2.mounument,
			Conformiter: this.state.Conformiter,
			LOW_SNAG : this.state.LowSnag,
			Qty_LowSnag : this.state.LowSnag.length,
			MEDUIM_SNAG : this.state.MeduimSnag,
			Qty_MeduimSnag : this.state.MeduimSnag.length,
			HIGHT_SNAG : this.state.HightSnag,
			Qty_HightSnag : this.state.HightSnag.length		
		})
	})
	.then(data=> data.json())
	.then(data=> {
		if (data) { 
		this.ClickForUpdateFunc2();
		this.OnClickOnCahier();
		this.clearArray();
		
		}
	}).catch(err=> err)	
    }

Update =()=>{
	fetch('https://gentle-sands-20048.herokuapp.com/update',{
		method:'put',
		headers:{'Content-type':'application/json'},
		body : JSON.stringify({
			id : this.props.Myobj2.id,
			Audit_Number : this.props.Myobj.Audit_Number,
			Start_DATE :this.state.Start_DATE,
			Progress : this.state.Progress,
			End_DATE : this.state.End_DATE,
			Commentaire : this.state.Comment	
		})
	})
	.then(data=> data.json())
	.then(data=> {
		if (data) { 
		this.ClickForUpdateFunc();
		this.onClikOtab();
		this.props.calculProgress(); 
		
		}
	}).catch(err=> err)	
    }
componentDidUpdate(prevProps, prevState){
    if(prevState.ClickForUpdate !== this.state.ClickForUpdate || 
    prevState.ClickForUpdate2 !== this.state.ClickForUpdate2) {
           this.props.fetchGetMounument();
           this.props.fetchGetWorkbooks();
           
       
           console.log('Update2')
  }      
}
TowAction2=(e)=>{
	this.props.fetchentriesData2(e);
	this.onClikOtab();    
};
TowAction3=(e)=>{
	this.props.fetchentriesData3(e);
	this.OnClickOnCahier(); 
	// console.log(this.props.Myobj3)   
};

ClickForUpdateFunc = ()=>{
	this.setState({ClickForUpdate : !this.state.ClickForUpdate})
	
	// console.log(this.props.Myobj2)	
}

onConformitéChange=(event)=>{
	this.setState({ Conformiter: event.target.value})
	// this.CalculeResulte();
}


handleChangeLowSnag= (e)=> {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            this.setState({LowSnag: value});
          }
handleChangeMeduimSnag= (e)=> {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            this.setState({MeduimSnag: value});
            
            
          } 
handleChangeHightSnag= (e)=> {
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            this.setState({HightSnag: value});
          }

clearArray=()=>{
	this.state.LowSnag.splice(0,this.state.LowSnag.length)
	this.state.MeduimSnag.splice(0,this.state.MeduimSnag.length)
	this.state.HightSnag.splice(0,this.state.HightSnag.length)	
}

ClickForUpdateFunc2 = ()=> {
	this.setState({ClickForUpdate2 : !this.state.ClickForUpdate2})	
}

OnClickOnCahier =()=>{
	this.setState({ClickOnCahier : !this.state.ClickOnCahier})	
}
ClickToSeeWokbooks = ()=>{
	this.setState({CliktoSeeWrkbooks : !this.state.CliktoSeeWrkbooks})	
	console.log(this.props.FilterWB)
}
onClikOtab =()=>{
	this.setState({clikOnTab : !this.state.clikOnTab})
	// console.log(this.props.Myobj2)	
}

OnStart_DATEChange = (event)=> {
	this.setState({ Start_DATE: event.target.value})		
}

OnProgressChange = (event)=> {
	this.setState({Progress: event.target.value})
	// console.log(this.state.Progress)
}
OnEnd_DATEChange = (event)=> {
	this.setState({End_DATE : event.target.value})

}

OnCommentChange=(event)=>{
 this.setState({Comment: event.target.value})
 console.log(this.state.Comment)
}


  render() {
    const NCs= this.props.FilterWB.filter(nc =>{
    return nc.conformiter==="NON CONFORME";
    })
    return (
<div className='container'>
	<header>
		<div>
		{!this.state.clikOnTab ?
		<button className="cta" onClick={this.props.IsClick} >back to home</button>
		:( this.state.CliktoSeeWrkbooks ?
			<div>
			{this.state.ClickOnCahier ?
            <button className="cta" onClick={this.OnClickOnCahier} >back</button>
			:<button className="cta" onClick={this.ClickToSeeWokbooks} >back</button>}
			</div>
			:<button className="cta" onClick={this.onClikOtab} >back</button>)}
		</div>
		<nav>
		<input type='search' placeholder='Type...' />
		</nav>
		<div>
		{this.state.clikOnTab ?
		<div>	
		{!this.state.CliktoSeeWrkbooks ?
		<p>	
		<button className="cta" onClick={this.ClickForUpdateFunc} >Update</button>
        <button className="cta" onClick={this.ClickToSeeWokbooks} >Workbooks</button>
        
        </p>
			:(this.state.ClickOnCahier ?
			<button className="cta" onClick={this.ClickForUpdateFunc2}>Update</button>
			:<button className="cta" onClick={()=>this.props.createAndDownloadPdf()}>Generate PDF</button> 	)}
        </div>  
		:null} 
		</div>
	</header>     
	<div className='goLeft'>     
		<h3 className='titre'>Audit Number: {`BMMS-A00${this.props.Myobj.id}`}</h3>  
	</div> 
	<div className='goRight' >
		<ProgressBar
		filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
		percent={this.props.Moyenn}
		>
			<Step transition="scale">
			{({ accomplished, index }) => (
			<div
			className={`transitionStep ${accomplished ? "accomplished" : null}`}
			>
			<div id='circle1'></div>
			<div className='Open'>Open</div>
			</div>
			)}
			</Step>
			<Step transition="scale">
			{({ accomplished, index }) => (
			<div
			className={`transitionStep ${accomplished ? "accomplished" : null}`}
			>

			<div id='circle2'></div>
			<div className='Closed'>Completed</div>
			</div>
			)}
			</Step>
		</ProgressBar>
	</div> 
	{this.state.ClickForUpdate ?
	// <Popup2 Myobj={this.props.obj} closePopup2={this.props.closePopup2}/>
	<div className="bg-modal2">
		<div className="modal-contents2">
			<div className="close2" onClick={this.ClickForUpdateFunc}>+</div>
			<div className='center'>
				<div className="row">
					<div className="col-25">
					<label>Start Date</label>
					</div>
					<div className="col-75">
					<input type="Date" placeholder="Start Date"  onChange={this.OnStart_DATEChange}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label>Progession</label>
					</div>
					<div className="col-75">
					<select  onChange={this.OnProgressChange} >
					<option ></option>
					<option>25</option>
					<option>50</option>
					<option>75</option>
					<option>100</option>
					</select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label >End Date</label>
					</div>
					<div className="col-75">
					<input type="Date" placeholder="End Date"  onChange={this.OnEnd_DATEChange}/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label >Commentaire</label>
					</div>
					<div className="col-75">
					<input type="comment" placeholder="Commentaire .."  onChange={this.OnCommentChange}/>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Submit" onClick={this.Update} className='btn' />
				</div>
			</div>	
		</div>
	</div> 
	: (this.state.ClickForUpdate2 ?
    <div className="bg-modal2">
		<div className="modal-contents3">
			<div className="close2" onClick={this.ClickForUpdateFunc2}>+</div>
			<div className='center'>
				<div className="row">
					<div className="col-25">
					<label>Result</label>
					</div>
					<div className="col-75">
						<select onChange={this.onConformitéChange}>
						<option ></option>
						<option>CONFORME</option>
						<option>NON CONFORME</option>
						<option>N/A</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label>LOW SNAG</label>
					</div>
					<div className="col-75">
					    <select onChange={this.handleChangeLowSnag} multiple>					        
					        <option>1,3</option>
							<option>1,5</option>
							<option>2,5</option>
							<option>3,1</option>
							<option>3,10</option>
							<option>3,14</option>
							<option>3,15</option>
							<option>6,1</option>
							<option>6,2</option>
							<option>8.2</option>
							<option>8.3</option>
				        </select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label>MEDUIM SNAG</label>
					</div>
					<div className="col-75">
					    <select onChange={this.handleChangeMeduimSnag} multiple>					  
					   	    <option>1,2</option>
							<option>1,4</option>
							<option>2,4</option>
							<option>3,2</option>
							<option>3,3</option>
							<option>3,5</option>
							<option>3,13</option>
							<option>6,5</option>
				        </select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
					<label>HIGHT SNAG</label>
					</div>
					<div className="col-75">
					    <select onChange={this.handleChangeHightSnag} multiple>					        
					        <option>1,6</option>
							<option>2,1</option>
							<option>2,2</option>
							<option>2,3</option>
							<option>2,6</option>
							<option>2,7</option>
							<option>2,8</option>
							<option>3,1</option>
							<option>3,4</option>
							<option>3,6</option>
							<option>3,7</option>
							<option>3,8</option>
							<option>3,9</option>
							<option>3,11</option>
							<option>3,12</option>
							<option>3,16</option>
							<option>3,17</option>
							<option>3,18</option>
							<option>3,19</option>
							<option>4,1</option>
							<option>4,2</option>
							<option>4,3</option>
							<option>4,4</option>
							<option>4,5</option>
							<option>4,6</option>
							<option>5,1</option>
							<option>5,2</option>
							<option>6,3</option>
							<option>6,4</option>
							<option>7.1</option>
							<option>8.1</option>
								
				        </select>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Submit" onClick={this.Update2} className='btn' />
				</div>
			</div>	
		</div>
	</div> 	
		:null)}
    {this.state.CliktoSeeWrkbooks ?
     	<div className='Tableft'>
		<table>
			<tbody>
				<tr>
					<th>Projet</th>
					<td>{this.props.Myobj.projet}</td>
				</tr>
				<tr>
					<th>A/C</th>
					<td>{this.props.Myobj.aircraft}</td>
				</tr>
				<tr>
					<th>Responsable Audit</th>
					<td>{this.props.Myobj.responsable}</td>
				</tr>
				<tr>
					<th>Mounument</th>
					<td>{this.props.Myobj2.mounument}</td>
				</tr>
				<tr>
					<th>Responsable Mounument</th>
					<td>{this.props.Myobj2.responsable_mon}</td>
				</tr>
				<tr>
					<th>Step</th>
					<td>{this.props.Myobj2.step}</td>
				</tr>
				<tr>
					<th>QTY de Cahier</th>
					<td>{this.props.FilterWB.length}</td>
				</tr>
				<tr>
					<th>QTY de Cahier à Valider</th>
					<td>
						{ this.props.Myobj2.step===1 ?
							this.props.FilterWB.length*1
							:(this.props.Myobj2.step===2 ?
							Math.round(this.props.FilterWB.length*0.5)
							: Math.round(this.props.FilterWB.length*0.25))
						}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    :	<div className='Tableft'>
		<table>
			<tbody>
				<tr>
					<th>Projet</th>
					<td>{this.props.Myobj.projet}</td>
				</tr>
				<tr>
					<th>A/C</th>
					<td>{this.props.Myobj.aircraft}</td>
				</tr>
				<tr>
					<th>Responsable Audit</th>
					<td>{this.props.Myobj.responsable}</td>
				</tr>
				<tr>
					<th>Date of entrie</th>
					{ this.props.Myobj.dateofentrie === null ?
					<td></td>
					:<td>{this.props.Myobj.dateofentrie.slice(0,-14)}</td>
					}
				</tr>
				<tr>
					<th>Statu</th>
					<td>{this.props.statu}</td>
				</tr>
			</tbody>
		</table>
	</div> }
	{this.state.clikOnTab ? 
	<div>
	 { this.state.CliktoSeeWrkbooks ?
	 	<div>
	 	{this.state.ClickOnCahier?
	 		<div className='Tabright'>
			<table>
				<tbody>
					<tr>
						<th className="th2">ITEM ID</th>
						<td>{this.props.Myobj3.item_id}</td>
					</tr>
					<tr>
						<th className="th2">POSTE</th>
						<td>{this.props.Myobj3.post}</td>
					</tr>
					<tr>
						<th className="th2">Cahier</th>
						<td>{this.props.Myobj3.livrable}</td>
					</tr>
					<tr>
						<th className="th2">Typologie</th>
						<td>{this.props.Myobj3.typologie}</td>
					</tr>
					<tr>
						<th className="th2">DWG</th>
						<td>{this.props.Myobj3.dwg}</td>
					</tr>
					<tr>
						<th className="th2">REV</th>
						<td>{this.props.Myobj3.rev}</td>
					</tr>
					<tr>
						<th className="th2">DWG RAL BI</th>
						<td>{this.props.Myobj3.date_relache}</td>
					</tr>
					<tr>
						<th className="th2">Result</th>
						<td>{this.props.Myobj3.conformiter}</td>
					</tr>
					<tr>
						<th className="th2">LOW SNAG</th>
						<td>{this.props.Myobj3.low_snag}</td>
					</tr>
					<tr>
						<th className="th2">MEDUIM SNAG</th>
						<td>{this.props.Myobj3.meduim_snag}</td>
					</tr>
					<tr>
						<th className="th2">HIGHT SNAG</th>
						<td>{this.props.Myobj3.hight_snag}</td>
					</tr>
				</tbody>
			</table>
			</div> 
	 	:<div className='Tabright'>
		<table >
			<thead>
				<tr>
					<th>ITEM ID</th>
					<th>POSTE</th>
					<th>LIVRABLES</th>
					<th>Typologie</th>
					<th>DWG</th>
					<th>REV</th>
					<th>DWG RAL BI</th>
					<th>Result</th>
					<th>LOW SNAG</th>
					<th>MEDUIM SNAG</th>
					<th>HIGHT SNAG</th>
				</tr>
			</thead>
			<tbody>
		     {
				this.props.FilterWB.map((wbs,i) => {
				return (
				<tr key={i}  data-index3={i} onClick={this.TowAction3}>
					<td className= "col-1" >{wbs.item_id}</td>
					<td className= "col-2">{wbs.post}</td>
					<td className= "col-3">{wbs.livrable}</td>
					<td className= "col-4">{wbs.typologie}</td>
					<td className= "col-5">{wbs.dwg}</td>
					<td className= "col-6">{wbs.rev}</td>
					<td className= "col-7">{wbs.date_relache}</td>
					<td className= "col-7">{wbs.conformiter}</td>
					<td className= "col-7">{wbs.low_snag}</td>
					<td className= "col-7">{wbs.meduim_snag}</td>
					<td className= "col-7">{wbs.hight_snag}</td>
				</tr>
				);
				})}    
			</tbody>
		</table>
	</div>}
	</div>	
	:
	<div className='Tabright'>
			<table>
				<tbody>
					<tr>
						<th className="th2">Mounument</th>
						<td>{this.props.Myobj2.mounument}</td>
					</tr>
					<tr>
						<th className="th2">Groupe</th>
						<td>{this.props.Myobj2.groupe}</td>
					</tr>
					<tr>
						<th className="th2">Responsable Mounument</th>
						<td>{this.props.Myobj2.responsable_mon}</td>
					</tr>
					<tr>
						<th className="th2">Step</th>
						<td>{this.props.Myobj2.step}</td>
					</tr>
					<tr>
						<th className="th2">QTY de Cahier à Valider</th>
						<td>
								{ this.props.Myobj2.step===1 ?
								this.props.FilterWB.length*1
								:(this.props.Myobj2.step===2 ?
								 Math.round(this.props.FilterWB.length*0.5)
								: Math.round(this.props.FilterWB.length*0.25))
								}
						</td>
					</tr>
					<tr>
						<th className="th2">Start Date</th>
						{this.props.Myobj2.start_date === null ?
							<td></td>
						:<td>{this.props.Myobj2.start_date.slice(0,-14)}</td>
						}
						
					</tr>
					<tr>
						<th className="th2">Progression</th>
						<td>{this.props.Myobj2.progression}</td>
					</tr>
					<tr>
						<th className="th2">End Date</th>
						{ this.props.Myobj2.end_date===null ?
							<td></td>
						:<td>{this.props.Myobj2.end_date.slice(0,-14)}</td>	
						}
						
					</tr>
					<tr>
						<th className="th2">Annomalies Détectées</th>
						<td>{ NCs.map(NC=>{
							return `${NC.livrable} (${NC.low_snag} ${NC.meduim_snag} ${NC.hight_snag})`
						})
						}</td>
					</tr>
					<tr>
						<th className="th2">QTY Cahier Non Conforme</th>
						<td>{NCs.length}</td>
					</tr>
					<tr>
					<th className="th2">Commentaire</th>
						<td>{this.props.Myobj2.commentaire}</td>
					</tr>
					<tr>
						<th className="th2">Result</th>
						<td>{`${this.props.Myobj2.result}%`}</td>
					</tr>
				</tbody>
			</table>
			</div> }
	</div>
	:  
	<div className='Tabright'>
		<table >
			<thead>
				<tr>
					<th>Mounument</th>
					<th>Groupe</th>
					<th>Responsable</th>
					<th>Step</th>
					<th>Start Date</th>
					<th>Progress(%)</th>
					<th>End Date</th>
					<th>Result</th> 
				</tr>
			</thead>
			<tbody>
				{
				this.props.FilterMoun.map((entries,i) => {
				return (
				<tr key={i}  data-index2={i} onClick={this.TowAction2}>
					<td>{entries.mounument}</td>
					<td>{entries.groupe}</td>
					<td>{entries.responsable_mon}</td>
					<td>{`Step ${entries.step}`}</td>
					{entries.start_date===null?
					<td></td>
					:<td>{entries.start_date.slice(0,-14)}</td>
					}
					<td>{`${entries.progression}%`}</td>
					{ entries.end_date === null ?
                      <td></td>
                      :<td>{entries.end_date.slice(0,-14)}</td>
					}
					<td>{entries.result}</td>
				</tr>
				);
				})}    
			</tbody>
		</table>		
	</div> }
</div>
    );
  }
}
export default AllComponent;