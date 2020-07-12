import React from 'react';  
import './Popup.css'; 

const AllState = {
      Projet :'',
      AC : '',
      Respo : '',
      
      Step_for_Avionic : 1,
      Step_for_Carpet : 1,
      Step_for_Daddo : 1,
      Step_for_DIVend : 1,
      Step_for_DivBoxSub : 1,
      Step_for_Ecs : 1,
      Step_for_Floor : 1,
      Step_for_Hand : 1,
      Step_for_LavAft : 1,
      Step_for_LavFwd : 1,
      Step_for_Lh : 1,
      Step_for_Pax : 1,
      Step_for_Peri : 1,
      Step_for_Plac : 1,
      Step_for_Seat : 1,
      Step_for_ShoZone : 1,
      Step_for_Side : 1,
      Step_for_Tab : 1,
      Step_for_Threa : 1,
      Step_for_Under : 1,
      Step_for_View : 1,
      Step_for_WardAft : 1,
      Step_for_WardState : 1,
      commodities : [
					{   
				
						Mounument:'ECS CAP',
						Step_for_Ecs : 1,
						Groupe : 'G4',
						Responsable_Moun : 'Moad Ajellal'
						
					},
					{   
					
						Mounument:'PLACARD',
						Step_for_Plac : 1,
						Groupe : 'G6',
						Responsable_Moun : 'Oussama ASSAKHEN'
						
					},  
    ]
      
    }

class Popup extends React.Component { 
	constructor(props){
    super(props);
    this.state = AllState
  } 
async HandelSteps (){

	for (let i=0; i<this.state.commodities.length;i++) {
     const array = this.props.AllMoun.filter(e=>e.mounument.includes(this.state.commodities[i].Mounument))
     if (array.length % 2===0){
     	const lastTow = array.slice(-2)
     	// console.log(this.props.AllMoun)
     	if (lastTow[0].result >= 80 && lastTow[1].result >= 80){
     		if (array[0].mounument === 'AVIONIC RACK'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Avionic:3})
     				console.log(this.state.Step_for_Avionic)
     				console.log('stay at step 3 AVIONIC RACK')
     			} else {
     				await this.setState({Step_for_Avionic: lastTow[1].step + 1})
     				console.log(this.state.Step_for_Avionic)
     				console.log('must change Step of avionic rack') 
     			}
     		} else if (array[0].mounument === 'CARPET'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Carpet:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Carpet: lastTow[1].step + 1})
     				console.log('must change Step of carpet')
     			}
     			
     		} else if (array[0].mounument === 'DADO'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Daddo:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Daddo: lastTow[1].step + 1})
     				console.log('must change Step of DADO') 
     			}
     			
     		} else if (array[0].mounument === 'DIVAN END'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_DIVend:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_DIVend: lastTow[1].step + 1})
     				console.log('must change Step of DIVAN END') 
     			}
     			
     		} else if (array[0].mounument === 'DIVAN/DIVAN BOX/DIVA'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_DivBoxSub:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_DivBoxSub: lastTow[1].step + 1})
     				console.log('must change Step of DIVAN/DIVAN BOX/DIVA')
     			}
     			
     		} else if (array[0].mounument === 'ECS CAP'){
     			if(lastTow[1].Step ===3){
     				await this.setState({Step_for_Ecs:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Ecs: lastTow[1].step + 1})
     				console.log('must change Step of ECS') 
     			}
     			
     		} else if (array[0].mounument === 'FLOORING'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Floor:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Floor: lastTow[1].step + 1})
     				console.log('must change Step of FLOORING') 
     			}
     			
     		} else if (array[0].mounument === 'HANDRAIL'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Hand:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Hand: lastTow[1].step + 1})
     				console.log('must change Step of HANDRAIL') 
     			}
     			
     		} else if (array[0].mounument === 'LAVATORY AFT'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_LavAft:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_LavAft: lastTow[1].step + 1})
     				console.log('must change Step of LAVATORY AFT') 
     			}
     			
     		} else if (array[0].mounument === 'LAVATORY FWD'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_LavFwd:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_LavFwd: lastTow[1].step + 1})
     				console.log('must change Step of LAVATORY FWD') 
     			}
     			
     		} else if (array[0].mounument === 'LH ENCLOSURE'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Lh:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Lh: lastTow[1].step + 1})
     				console.log('must change Step of LH ENCLOSURE')
     			}
     			
     		} else if (array[0].mounument === 'PAX DOOR IDENTIFICAT'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Pax:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Pax: lastTow[1].step + 1})
     				console.log('must change Step of PAX DOOR') 
     			}
     			
     		} else if (array[0].mounument === 'PERIPHERY'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Peri:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Peri: lastTow[1].step + 1})
     				console.log('must change Step of PERIPHERY') 
     			}
     			
     		} else if (array[0].mounument === 'PLACARD'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Plac:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Plac: lastTow[1].step + 1})
     				console.log('must change Step of PLACARD')
     			}
     			
     		} else if (array[0].mounument === 'SEAT'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Seat:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Seat: lastTow[1].step + 1})
     				console.log('must change Step of SEAT') 
     			}
     			
     		} else if (array[0].mounument === 'SHOWER ZONE'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_ShoZone:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_ShoZone: lastTow[1].step + 1})
     				console.log('must change Step of SHOWER ZONE')
     			}
     			
     		} else if (array[0].mounument === 'SIDELEDGE'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Side:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Side: lastTow[1].step + 1})
     				console.log('must change Step of SIDELEDGE') 
     			}
     			
     		} else if (array[0].mounument === 'TABLE'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Tab:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Tab: lastTow[1].step + 1})
     				console.log('must change Step of TABLE') 
     			}
     			
     		} else if (array[0].mounument === 'THRESHOLD'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Threa:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Threa: lastTow[1].step + 1})
     				console.log('must change Step of THRESHOLD')
     			}
     			
     		} else if (array[0].mounument === 'UNDERLAY'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_Under:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_Under: lastTow[1].step + 1})
     				console.log('must change Step of UNDERLAY') 
     			}
     			
     		} else if (array[0].mounument === 'VIEWING AID'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_View:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_View: lastTow[1].step + 1})
     				console.log('must change Step of VIEWING AID') 
     			}
     			
     		} else if (array[0].mounument === 'WARDROBE AFT'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_WardAft:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_WardAft: lastTow[1].step + 1})
     				console.log('must change Step of WARDROBE AFT')
     			}
     			
     		} else if (array[0].mounument === 'WARDROBE STATEROOM'){
     			if(lastTow[1].step ===3){
     				await this.setState({Step_for_WardState:3})
     				console.log('stay at step 3')
     			} else {
     				await this.setState({Step_for_WardState: lastTow[1].step + 1})
     				console.log('must change Step of WARDROBE STATEROOM')
     			}
     			
     		}
     	} else {
     		if (array[0].mounument === 'AVIONIC RACK'){
     			await this.setState({Step_for_Avionic : 1})
     			console.log('must go to Step1 for avionic rack')

     		} else if (array[0].mounument === 'CARPET'){
     			await this.setState({Step_for_Carpet : 1})
     			console.log('must go to Step1 for carpet')

     		} else if (array[0].mounument === 'DADO'){
     			await this.setState({Step_for_Daddo : 1})
     			console.log('must go to Step1 for DADO')

     		} else if (array[0].mounument === 'DIVAN END'){
     			await this.setState({Step_for_DIVend : 1})
     			console.log('must go to Step1 for DIVAN END')

     		} else if (array[0].mounument === 'DIVAN/DIVAN BOX/DIVA'){
     			await this.setState({Step_for_DivBoxSub : 1})
     			console.log('must go to Step1 for DIVAN/DIVAN BOX/DIVA')

     		} else if (array[0].mounument === 'ECS CAP'){
     			await this.setState({Step_for_Ecs : 1})
     			console.log('must go to Step1 for ECS')

     		} else if (array[0].mounument === 'FLOORING'){
     			await this.setState({Step_for_Floor : 1})
     			console.log('must go to Step1 for FLOORING')

     		} else if (array[0].mounument === 'HANDRAIL'){
     			await this.setState({Step_for_Hand : 1})
     			console.log('must go to Step1 for HANDRAIL')

     		} else if (array[0].mounument === 'LAVATORY AFT'){
     			await this.setState({Step_for_LavAft : 1})
     			console.log('must go to Step1 for LAVATORY AFT')

     		} else if (array[0].mounument === 'LAVATORY FWD'){
     			await this.setState({Step_for_LavFwd : 1})
     			console.log('must go to Step1 for LAVATORY FWD')

     		} else if (array[0].mounument === 'LH ENCLOSURE'){
     			await this.setState({Step_for_Lh : 1})
     			console.log('must go to Step1 for LH ENCLOSURE')

     		} else if (array[0].mounument === 'PAX DOOR IDENTIFICAT'){
     			await this.setState({Step_for_Pax : 1})
     			console.log('must go to Step1 for PAX DOOR')

     		} else if (array[0].mounument === 'PERIPHERY'){
     			await this.setState({Step_for_Peri : 1})
     			console.log('must go to Step1 for PERIPHERY')

     		} else if (array[0].mounument === 'PLACARD'){
     			await this.setState({Step_for_Plac : 1})
     			console.log('must go to Step1 for PLACARD')

     		} else if (array[0].mounument === 'SEAT'){
     			await this.setState({Step_for_Seat : 1})
     			console.log('must go to Step1 for SEAT')

     		} else if (array[0].mounument === 'SHOWER ZONE'){
     			await this.setState({Step_for_ShoZone : 1})
     			console.log('must go to Step1 for SHOWER ZONE')

     		} else if (array[0].mounument === 'SIDELEDGE'){
     			await this.setState({Step_for_Side : 1})
     			console.log('must go to Step1 for SIDELEDGE')

     		} else if (array[0].mounument === 'TABLE'){
     			await this.setState({Step_for_Tab : 1})
     			console.log('must go to Step1 for TABLE')

     		} else if (array[0].mounument === 'THRESHOLD'){
     			await this.setState({Step_for_Threa : 1})
     			console.log('must go to Step1 for THRESHOLD')

     		} else if (array[0].mounument === 'UNDERLAY'){
     			await this.setState({Step_for_Under : 1})
     			console.log('must go to Step1 for UNDERLAY')

     		} else if (array[0].mounument === 'VIEWING AID'){
     			await this.setState({Step_for_View : 1})
     			console.log('must go to Step1 for VIEWING AID')

     		} else if (array[0].mounument === 'WARDROBE AFT'){
     			await this.setState({Step_for_WardAft : 1})
     			console.log('must go to Step1 for WARDROBE AFT')

     		} else if (array[0].mounument === 'WARDROBE STATEROOM'){
     			await this.setState({Step_for_WardState: 1})
     			console.log('must go to Step1 for WARDROBE STATEROOM')
     		}
     	}

     } else { 
     	    if (array.slice(-1)[0].mounument === 'AVIONIC RACK'){
     	    	await this.setState({Step_for_Avionic : array.slice(-1)[0].step})
     			console.log('must go to Step1 for avionic rack')
     			console.log(this.state.Step_for_Avionic)

     		} else if (array.slice(-1)[0].mounument === 'CARPET'){
     			await this.setState({Step_for_Carpet:array.slice(-1)[0].step})
     			console.log('must go to Step1 for carpet')

     		} else if (array.slice(-1)[0].mounument === 'DADO'){
     			await this.setState({Step_for_Daddo :array.slice(-1)[0].step})
     			console.log('must go to Step1 for DADO')

     		} else if (array.slice(-1)[0].mounument === 'DIVAN END'){
     			await this.setState({Step_for_DIVend :array.slice(-1)[0].step})
     			console.log('must go to Step1 for DIVAN END')

     		} else if (array.slice(-1)[0].mounument === 'DIVAN/DIVAN BOX/DIVA'){
     			await this.setState({Step_for_DivBoxSub :array.slice(-1)[0].step})
     			console.log('must go to Step1 for DIVAN/DIVAN BOX/DIVA')

     		} else if (array.slice(-1)[0].mounument === 'ECS CAP'){
     			await this.setState({Step_for_Ecs :array.slice(-1)[0].step})
     			console.log('must stay in prev state for ECS')

     		} else if (array.slice(-1)[0].mounument === 'FLOORING'){
     			await this.setState({Step_for_Floor :array.slice(-1)[0].step})
     			console.log('must go to Step1 for FLOORING')

     		} else if (array.slice(-1)[0].mounument === 'HANDRAIL'){
     			await this.setState({Step_for_Hand :array.slice(-1)[0].step})
     			console.log('must go to Step1 for HANDRAIL')

     		} else if (array.slice(-1)[0].mounument === 'LAVATORY AFT'){
     			await this.setState({Step_for_LavAft :array.slice(-1)[0].step})
     			console.log('must go to Step1 for LAVATORY AFT')

     		} else if (array.slice(-1)[0].mounument === 'LAVATORY FWD'){
     			await this.setState({Step_for_LavFwd :array.slice(-1)[0].step})
     			console.log('must go to Step1 for LAVATORY FWD')

     		} else if (array.slice(-1)[0].mounument === 'LH ENCLOSURE'){
     			await this.setState({Step_for_Lh :array.slice(-1)[0].step})
     			console.log('must go to Step1 for LH ENCLOSURE')

     		} else if (array.slice(-1)[0].mounument === 'PAX DOOR IDENTIFICAT'){
     			await this.setState({Step_for_Pax :array.slice(-1)[0].step})
     			console.log('must go to Step1 for PAX DOOR')

     		} else if (array.slice(-1)[0].mounument === 'PERIPHERY'){
     			await this.setState({Step_for_Peri :array.slice(-1)[0].step})
     			console.log('must go to Step1 for PERIPHERY')

     		} else if (array.slice(-1)[0].mounument === 'PLACARD'){
     			await this.setState({Step_for_Plac :array.slice(-1)[0].step})
     			console.log('must stay in prev state for PLACARD')

     		} else if (array.slice(-1)[0].mounument === 'SEAT'){
     			await this.setState({Step_for_Seat :array.slice(-1)[0].step})
     			console.log('must go to Step1 for SEAT')

     		} else if (array.slice(-1)[0].mounument === 'SHOWER ZONE'){
     			await this.setState({Step_for_ShoZone :array.slice(-1)[0].step})
     			console.log('must go to Step1 for SHOWER ZONE')

     		} else if (array.slice(-1)[0].mounument === 'SIDELEDGE'){
     			await this.setState({Step_for_Side :array.slice(-1)[0].step})
     			console.log('must go to Step1 for SIDELEDGE')

     		} else if (array.slice(-1)[0].mounument === 'TABLE'){
     			await this.setState({Step_for_Tab :array.slice(-1)[0].step})
     			console.log('must go to Step1 for TABLE')

     		} else if (array.slice(-1)[0].mounument === 'THRESHOLD'){
     			await this.setState({Step_for_Threa :array.slice(-1)[0].step})
     			console.log('must go to Step1 for THRESHOLD')

     		} else if (array.slice(-1)[0].mounument === 'UNDERLAY'){
     			await this.setState({Step_for_Under :array.slice(-1)[0].step})
     			console.log('must go to Step1 for UNDERLAY')

     		} else if (array.slice(-1)[0].mounument === 'VIEWING AID'){
     			await this.setState({Step_for_View  :array.slice(-1)[0].step})
     			console.log('must go to Step1 for VIEWING AID')

     		} else if (array.slice(-1)[0].mounument === 'WARDROBE AFT'){
     			await this.setState({Step_for_WardAft :array.slice(-1)[0].step})
     			console.log('must go to Step1 for WARDROBE AFT')

     		} else if (array.slice(-1)[0].mounument === 'WARDROBE STATEROOM'){
     			await this.setState({Step_for_WardState :array.slice(-1)[0].step})
     			console.log('must go to Step1 for WARDROBE STATEROOM')
     		}

      
     }



     // console.log(array[0].Mounument)
     // if (array[0].Mounument === 'AVIONIC RACK') {
     // 	console.log('AVIONIC RACK')
     //  } 
     //  else if (array[0].Mounument === 'CARPET'){
     // 	console.log('CARPET')
     // }
     // if (this.props.AllMoun.length % 2==0){
     // 	const lastTow = array.slice(-2)
     // 	if (lastTow[0].Result >= 80 && lastTow[1].Result >= 80)
     // }
     
     
	}


}

// updateEtreis =()=> {
//    this.setState({UpdatedEntries : this.props.AllEntries })
// }
OnProjChange = (event)=> {
	this.setState({Projet : event.target.value})
	
		
    // this.HandelSteps();
	
	
}
OnACChange = (event)=> {
	this.setState({AC : event.target.value})
}

twoActons =()=>{
this.OnsubmiteChange();
this.props.OnsubmiteClick(); 
}


AddMounumets = () => {
	fetch('https://gentle-sands-20048.herokuapp.com/Test',{
		method:'post',
		headers:{'Content-type':'application/json'},
	    body : JSON.stringify(
	    	[   
	    	    {
		        
					Projet: this.state.Projet,
					AirCraft: this.state.AC,
					Responsable_Audit : `${JSON.parse(localStorage.getItem('Name'))} ${JSON.parse(localStorage.getItem('LastName'))}`,
					Date : '',
					Mounument :this.state.commodities[0].Mounument ,
		   		     Groupe :this.state.commodities[0].Groupe,
		   		     Responsable :this.state.commodities[0].Responsable_Moun,
		   		     Step : this.state.Step_for_Ecs,
				},
				{
					Projet: this.state.Projet,
					AirCraft: this.state.AC,
					Responsable_Audit : `${JSON.parse(localStorage.getItem('Name'))} ${JSON.parse(localStorage.getItem('LastName'))}`,
					Date : '',
					Mounument :this.state.commodities[1].Mounument ,
		   		     Groupe :this.state.commodities[1].Groupe ,
		   		     Responsable :this.state.commodities[1].Responsable_Moun ,
		   		     Step : this.state.Step_for_Plac,
				},
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument :this.state.commodities[2].Mounument ,
		  //  		    Groupe :this.state.commodities[2].Groupe,
		  //  		    Responsable :this.state.commodities[2].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Daddo,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[3].Mounument ,
		  //  		    Groupe :this.state.commodities[3].Groupe  ,
		  //  		    Responsable :this.state.commodities[3].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_DIVend,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[4].Mounument ,
		  //  		    Groupe :this.state.commodities[4].Groupe ,
		  //  		    Responsable :this.state.commodities[4].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_DivBoxSub,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : this.props.AllEntries.slice(-1).Audit_Number,
				// 	Mounument : this.state.commodities[5].Mounument ,
		  //  		    Groupe :this.state.commodities[5].Groupe ,
		  //  		    Responsable :this.state.commodities[5].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Ecs,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[6].Mounument,
		  //  		    Groupe :this.state.commodities[6].Groupe ,
		  //  		    Responsable :this.state.commodities[6].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Floor,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[7].Mounument,
		  //  		    Groupe :this.state.commodities[7].Groupe ,
		  //  		    Responsable :this.state.commodities[7].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Hand,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[8].Mounument,
		  //  		    Groupe :this.state.commodities[8].Groupe ,
		  //  		    Responsable :this.state.commodities[8].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_LavAft,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[9].Mounument,
		  //  		    Groupe :this.state.commodities[9].Groupe ,
		  //  		    Responsable :this.state.commodities[9].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_LavFwd,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[10].Mounument,
		  //  		    Groupe :this.state.commodities[10].Groupe ,
		  //  		    Responsable :this.state.commodities[10].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Lh,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[11].Mounument,
		  //  		    Groupe :this.state.commodities[11].Groupe ,
		  //  		    Responsable :this.state.commodities[11].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Pax,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[12].Mounument,
		  //  		    Groupe :this.state.commodities[12].Groupe ,
		  //  		    Responsable :this.state.commodities[12].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Peri,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[13].Mounument,
		  //  		    Groupe :this.state.commodities[13].Groupe,
		  //  		    Responsable :this.state.commodities[13].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Plac,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[14].Mounument,
		  //  		    Groupe :this.state.commodities[14].Groupe ,
		  //  		    Responsable :this.state.commodities[14].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Seat,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[15].Mounument,
		  //  		    Groupe :this.state.commodities[15].Groupe ,
		  //  		    Responsable :this.state.commodities[15].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_ShoZone,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[16].Mounument,
		  //  		    Groupe : this.state.commodities[16].Groupe ,
		  //  		    Responsable :this.state.commodities[16].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Side,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[17].Mounument,
		  //  		    Groupe :this.state.commodities[17].Groupe ,
		  //  		    Responsable :this.state.commodities[17].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Tab,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[18].Mounument,
		  //  		    Groupe :this.state.commodities[18].Groupe ,
		  //  		    Responsable :this.state.commodities[18].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Threa,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[19].Mounument,
		  //  		    Groupe :this.state.commodities[19].Groupe ,
		  //  		    Responsable :this.state.commodities[19].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_Under,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[20].Mounument,
		  //  		    Groupe :this.state.commodities[20].Groupe ,
		  //  		    Responsable :this.state.commodities[20].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_View,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[21].Mounument,
		  //  		    Groupe : this.state.commodities[21].Groupe ,
		  //  		    Responsable :this.state.commodities[21].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_WardAft,
				// },
				// {
				// 	// Audit_Number : this.props.AllEntries.slice(-1)[0].Audit_Number,
				// 	Projet: this.state.Projet,
				// 	AirCraft: this.state.AC,
				// 	Responsable_Audit : this.state.Respo,
				// 	Date : '',
				// 	Mounument : this.state.commodities[22].Mounument,
		  //  		    Groupe :this.state.commodities[22].Groupe ,
		  //  		    Responsable :this.state.commodities[22].Responsable_Moun ,
		  //  		    Step : this.state.Step_for_WardState,
				// }
				])
	})
	.then(data=> data.json())
	.then(data=> {
		if (data) { 
		this.props.closePopup();
		
		}
	}).catch(err=> err)
	
}
OnsubmiteChange = () => {
	fetch('https://gentle-sands-20048.herokuapp.com/AddEntreis',{
		method:'post',
		headers:{'Content-type':'application/json'},
		body : JSON.stringify({
			Projet:this.state.Projet,
			AirCraft: this.state.AC,
			Responsable :`${JSON.parse(localStorage.getItem('Name'))} ${JSON.parse(localStorage.getItem('LastName'))}`,
			Statu : this.state.Statu	
		})
	})
	.then(data=> data.json())
	.then(data=> {
		if (data) { 
               console.log(data)
		this.AddMounumets();
		
		}
	}).catch(err=> err)	
}

	  render() {  
		return (
		<div className="bg-modal">
		    <div className="modal-contents"> 
				<div className="close" onClick={this.props.closePopup}>+</div>
				<div className='center' action="">
					<div className="row">
					    <div className="col-25">
		                  <label>Projet</label>
		                </div>
					    <div className="col-75">
					        <select onChange={this.OnProjChange}>
					            <option></option>
							    <option>S1064-GUU</option>
								<option>S1116-ERT</option>
								<option>S1117-TAL</option>
								<option>S1080-SBC</option>
								<option>S1115-OND</option>
								<option>S1084-FGR</option>
								<option>S1085-MTH</option>
								<option>S1123-VTA5</option>
								<option>S1106-FMG</option>
								<option>S1079-EMT</option>
								<option>S1119-SNT</option>
								<option>S1061-ASC</option>
								<option>S1124-VTA6</option>
								<option>S1102-MCB</option>
								<option>S1111-JZT</option>
								<option>S1114-EGL</option>
								<option>S1100-AFA</option>
								<option>S1129-VTA7</option>
								<option>S1113-AVW2</option>
								<option>S1091-SAS</option>
								<option>S1112-MSG</option>
								<option>S1138-AKR</option>
								<option>S1126-ADL</option>
								<option>S1099-BLI</option>
								<option>S1095-STP</option>
								<option>S1092-BNL</option>
								<option>S1121-BWG</option>
								<option>S1104-RSF</option>
					        </select>
					    </div>
					</div>
					<div className="row">
					        <div className="col-25">
		                       <label>A/C</label>
		                    </div>
		                <div className="col-75">
		                      <select onChange={this.OnACChange}>
								<option ></option>
								<option>70050</option>
								<option>70051</option>
								<option>70052</option>
								<option>70053</option>
								<option>70054</option>
								<option>70055</option>
								<option>70056</option>
								<option>70057</option>
								<option>70058</option>
								<option>70059</option>
								<option>70060</option>
								<option>70061</option>
								<option>70063</option>
								<option>70064</option>
								<option>70065</option>
								<option>70066</option>
								<option>70067</option>
								<option>70068</option>
								<option>70069</option>
								<option>70070</option>
								<option>70071</option>
								<option>70072</option>
								<option>70074</option>
								<option>70075</option>
								<option>70076</option>
								<option>70077</option>
								<option>70078</option>
								<option>70079</option>
								<option>70080</option>				
					        </select>
					    </div>
					</div>
					<div className="row">
					    <div>
					        <input type="submit" value="Submit" onClick={this.twoActons} className='btn' />
					    </div>
					</div>	
				</div>
		   </div>
       </div> 
       
					        
		);  
	}  
}  

export default Popup;