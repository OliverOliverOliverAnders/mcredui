import Freezer from 'freezer-js'
var freezer = new Freezer({

	/* EventList */
	eventList:{
		scrollPosition:{x:0,y:0},
		events:[],
	},


	applicationName:"Charlotte ist lieb!",

	navigation:{
		leftNavOpen:false,
		page:"one"
	},
	dbs:{test:{applicationName:{name:"charlotte mama papa äüplohf"}}},
	leftNavOpen:false
});

export default freezer
