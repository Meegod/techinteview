
//payload in redux and context api is the data..... gottta you
//TYPE "HELLO"  DATA:-PAYLOAD
import { useReducer, useEffect } from 'react'
import axios from 'axios'


const ACTIONS={
  MAKE_REQUEST:'make-requests',
  GET_DATA:'get-data',
  ERROR:'error',
}
 const BASE_URL='https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';

 //'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

function reducer(state,action){
	switch(action.type){
		case ACTIONS.MAKE_REQUEST:
		return {loading:true,jobs:[]}


		case ACTIONS.GET_DATA:
		  return{...state,loading:false,jobs:action.payload.jobs}

		case  ACTIONS.ERROR:
		return{...state,loading:false,error:action.payload.error,
			jobs:[]}

         default:
		return state

	}
}



export default function useFetchjobs(params,page){
const [state,dispatch]=useReducer(reducer,{jobs:[],
loading:true})

  useEffect(()=>{
  	const cancelToken =axios.CancelToken.source()
  	 dispatch({type:ACTIONS.MAKE_REQUEST})
  	axios.get(BASE_URL,{
  		cancelToken:cancelToken.token,
  		params:{markdown:true,page:page,...params}
  	}).then(res=>{
  		dispatch({type:ACTIONS.GET_DATA,payload:{jobs:res.data}})
  		//console.log(data);
  	}).catch(e=>{
  		if(axios.isCancel(e)) return
        dispatch({type:ACTIONS.ERROR,payload:{error:e}})

  		})
  	return () =>{
         cancelToken.cancel()
  	}
  },[params,page]);
  //the param dependency on the useffect hook
  //runs anytime a user changes any parameter
  //or reruns the program.....

return state




		




}