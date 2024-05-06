import { createSlice } from "@reduxjs/toolkit";
import {ROLES,NUMBER_OF_EMPLOYEE,MIN_EXP,REMOTE,MIN_BASE_SALARY,SEARCH} from '../utls/Constant'

const appSlice=createSlice({
    name:'appSlice',
    initialState:{
        filters:{
            roleFilter:[],
            numberOfEmployeesFilter:[],
            experienceFilter:null,
            remoteFilter:[],
            minimumBaseSalaryFilter:null,
            searchFilter:''
        }
    },
    reducers:{
        setFilter(state,action){
            switch(action.payload.type){
                case ROLES:
                    state.filters.roleFilter=[...(action.payload.filterData)]
                    break;
                case NUMBER_OF_EMPLOYEE:
                    state.filters.numberOfEmployeesFilter=[...(action.payload.filterData)]
                    break;
                case MIN_EXP:
                    state.filters.experienceFilter=(action.payload.filterData)
                    break;
                case REMOTE:
                    state.filters.remoteFilter=[...(action.payload.filterData)]
                    break;
                case MIN_BASE_SALARY:
                    state.filters.minimumBaseSalaryFilter=parseFloat(action.payload.filterData)
                    break;
                case SEARCH:
                    state.filters.searchFilter=(action.payload.filterData)
                    break;
                default:
                    break;
            }       
        }
    }
})

export const {setFilter}=appSlice.actions

export default appSlice;