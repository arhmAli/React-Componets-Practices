why?
state methods can get pretty cluttered we may need to create
a lot of functions for different functionality (i think)
So to sum up the states in a single place (state management)
we use this hook.

An "action" happens => it tells that the reducer function is performing
what task

syntax:
action:{type:"what type of action is going to happen add,subtract"
	payload:"The inforamtion u need to do the specific action"}
syntax:

function stateReducer(state,action){

the state reducer is a function which typically returns 
a state

usually switch statement is used in this because we use
multiple cases

switch (action.type){
case'Add':
return [
whatever the operation is suppose

...state,
{...action.payload,add:state+1}
action.payload=> the thing which u need to perform the operation
]
default:
return state
}
}

const [state,dispatch]=useReducer(statereducer,initialState)

action is used in dispatch
dispatch({type:"",payload})
