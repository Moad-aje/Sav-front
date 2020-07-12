import React, {Component} from 'react';
import NavBar from './Component/NavBar/NavBar';
import Popup from './Component/Popup/Popup';
import Table from './Component/Table/Table';
import axios from 'axios';
import AllComponent from './Component/AllComponent/AllComponent';
import Signin from './Component/Signin/Signin'
import { saveAs } from 'file-saver';
// import Popup2 from './Component/AllComponent/Popup2';
// import Signin from './Component/Signin/Signin';
// import Register from './Component/Register/Register';
// import GLobal from './Component/Signin/Gb.jpg'
import './App.css';

const initialState = {
  route : JSON.parse(localStorage.getItem('myRoute')),
  showPopup: false,
  showPopup2: false,
  AllEntries : [],
  FilterMoun : [],
  AllMoun : [],
  searchfild :'',
  IsClick : true,
  IsSubmitClik : false,
  Moyenn : 0,
  Statu:'Open',
  Workbooks:[],
  obj : {},
  obj2 : {}, 
  obj3:{} ,
  user: {
    id: '',
    name:'',
    lastname: '',
    bnumber :'',
    joined: ''
  }         
            
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = initialState
  }

  createAndDownloadPdf = () => {
        const FilterWB = this.state.Workbooks.filter(wb=> {
      return (
         wb.monument.includes(this.state.obj2.mounument) &&
          wb.aircraft.includes(this.state.obj2.aircraft)
        )
     
    })
    axios.post('https://gentle-sands-20048.herokuapp.com/create-pdf', {
      Responsable_Mounument : this.state.obj2.responsable_mon,
      AirCraft : this.state.obj2.aircraft,
      Projet : this.state.obj2.projet,
      Responsable_Audit :this.state.obj2.responsable_audit,
      Audit_Number : this.state.obj2.audit_number,
      Mounument : this.state.obj2.mounument,
      Step : this.state.obj2.step,
      Result : this.state.obj2.result,
      date : this.state.dateofentrie,
      Qty_Cahier : FilterWB.length

    })
      .then(() => axios.get('https://gentle-sands-20048.herokuapp.com/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        // console.log(res)
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }


  loadUser = (data) => {
    console.log(data)
    const Name = localStorage.setItem('Name',JSON.stringify(data.name));
    const LastName = localStorage.setItem('LastName',JSON.stringify(data.lastname));
    this.setState({user: {
      id: data.id,
      name: Name,
      lastname: LastName,
      bnumber: data.Bnumber,
      joined: data.joined
    }})
    console.log(localStorage.getItem('Name'))
  }

IsClick =()=>{
  this.setState({ IsClick: !this.state.IsClick });
  this.calculProgress(); 
}

calculProgress = ()=>{
  const array = this.state.AllMoun.filter(e=>e.projet.includes(this.state.obj.projet))
  // console.log(array)
  const moy = array.reduce((p, {progression}) => p + progression, 0)/2;
   this.setState({Moyenn:moy})
  if (moy===100){
  this.setState({Statu:'Completed'})
  }
  
  // console.log(this.state.Moyenn)
} 

fetchentriesData =(e)=> {
  let index = +e.currentTarget.getAttribute('data-index')
  this.setState(Object.assign(this.state.obj,this.state.AllEntries[index]))
   // console.log(this.state.obj)  
};
fetchentriesData2 =(e)=> {
  const array = this.state.AllMoun.filter(e=>e.projet.includes(this.state.obj.projet))
  let index = +e.currentTarget.getAttribute('data-index2')
  this.setState(Object.assign(this.state.obj2,array[index]))
   // console.log(array[index])  
};
fetchentriesData3 =(e)=> {
    const array = this.state.Workbooks.filter(wb=> {
      return (
         wb.monument.includes(this.state.obj2.mounument) &&
          wb.aircraft.includes(this.state.obj2.aircraft)
        )
    })
  let index = +e.currentTarget.getAttribute('data-index3')
  this.setState(Object.assign(this.state.obj3,array[index]))
  console.log(array)  
};

togglePopup =()=> {  
    this.setState({ showPopup: !this.state.showPopup }); 
    // console.log(this.state.AllMoun)      
} 
togglePopup2 =()=> {  
    this.setState({ showPopup2: !this.state.showPopup2 });
}

fetchGetEnries = ()=>{
  fetch('https://gentle-sands-20048.herokuapp.com/GetEnries')
           .then(response=> response.json())
           .then(entries => this.setState(prevState=>({AllEntries : entries})));
}

fetchGetMounument = ()=>{
  fetch('https://gentle-sands-20048.herokuapp.com/GetMounument')
           .then(response=> response.json())
           .then(Moun => {
             if(Moun) {             
              this.setState({AllMoun :  Moun})
   }
 });
}  

fetchGetWorkbooks = ()=>{
  fetch('https://gentle-sands-20048.herokuapp.com/GetWorkbooks')
           .then(response=> response.json())
           .then(books => {
             if(books) {             
              this.setState({Workbooks :  books})
              // console.log(this.state.Workbooks)
            }
          });
}
componentDidMount() {
       this.fetchGetEnries();
       this.fetchGetMounument();
       this.fetchGetWorkbooks();
       console.log('didMuont')
         }

componentDidUpdate(prevProps, prevState){
    if(prevState.IsSubmitClik !== this.state.IsSubmitClik ||
      prevState.IsClick !== this.state.IsClick) {
        this.fetchGetEnries();
        this.fetchGetMounument();      
          console.log('Update')
  }      
}

OnsubmiteClick = () => {
  this.setState({IsSubmitClik : !this.state.IsSubmitClik })
}



onSearchChange = (event) => {
    this.setState({ searchfild: event.target.value});  
}

onRoutechange =(route)=> {
  localStorage.setItem('myRoute',JSON.stringify(route));
  const data = JSON.parse(localStorage.getItem('myRoute'))
  if (data) {
    this.setState({route : data })
    console.log(data)
  }
  }


render() {

  const {AllEntries,searchfild,AllMoun,Workbooks}= this.state;
    const FilterWB = Workbooks.filter(wb=> {
      return (
         wb.monument.includes(this.state.obj2.mounument) &&
          wb.aircraft.includes(this.state.obj2.aircraft)
        )
     
    })
    const FilterMoun= AllMoun.filter(entrie =>{
    return entrie.projet.includes(this.state.obj.projet);
    })

  const filterEntries= AllEntries.filter((entrie,index) =>{
    return (
      entrie.Audit_Number.toLowerCase().includes(searchfild.toLowerCase()) ||
      entrie.Projet.toLowerCase().includes(searchfild.toLowerCase()) ||
      entrie.AirCraft.toLowerCase().includes(searchfild.toLowerCase()) ||
      entrie.Responsable.toLowerCase().includes(searchfild.toLowerCase())
      );
    
    })
    return ( 
    <div> 
      { this.state.route === 'login' || this.state.route === null  ? 
          <Signin onRoutechange={this.onRoutechange} loadUser={this.loadUser}/>
          : (this.state.route === 'Application' ?
            
          <div>
            {this.state.IsClick ?
              <div>
                <NavBar searchChange={this.onSearchChange} togglePopup={this.togglePopup} Moyenn={this.state.Moyenn} onRoutechange={this.onRoutechange}/> 
                <Table AllEntries={filterEntries} IsClick={this.IsClick} fetchentriesData={this.fetchentriesData} Statu={this.state.Statu}  />
                {this.state.showPopup ?  
                <Popup AllMoun={this.state.AllMoun} OnsubmiteClick = {this.OnsubmiteClick} AllEntries={this.state.AllEntries} closePopup={this.togglePopup.bind(this)} user={this.state.user} />  
                : null }
               </div>        
                : <AllComponent 
                IsClick={this.IsClick} 
                fetchentriesData2 = {this.fetchentriesData2}
                fetchentriesData3 = {this.fetchentriesData3}
                Myobj3 = {this.state.obj3}
                Myobj2 ={this.state.obj2}
                Myobj={this.state.obj} 
                showPopup2={this.state.showPopup2} 
                closePopup2={this.togglePopup2.bind(this)}
                togglePopup2={this.togglePopup2}
                FilterMoun = {FilterMoun}
                AllMoun={this.state.AllMoun}
                fetchentriesMoun={this.fetchentriesMoun}
                OnsubmiteClick = {this.OnsubmiteClick}
                fetchGetMounument={this.fetchGetMounument} 
                Moyenn={this.state.Moyenn}
                calculProgress={this.calculProgress}
                Statu={this.state.Statu}
                FilterWB={FilterWB}$
                fetchGetWorkbooks={this.fetchGetWorkbooks}
                createAndDownloadPdf={this.createAndDownloadPdf}
                />
            } 
          </div>
      
      :null)}
    </div>

    
        
    );
  }
} 
export default App;
