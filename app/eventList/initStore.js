import freezer from './../store/store.js'



var state=freezer.get();




state.set({eventList:{
  scrollPosition:{x:0,y:0},
  events:[],
  header:[
    {header:"Bussiness Date"},
    {header:"Bussiness Date"},
  ]
}});
