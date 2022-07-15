const { createStore, combineReducers } = require("redux");



const ourDepartment = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
})

const store = createStore(ourDepartment)


store.dispatch(createPolicy('Shivam', 20))
store.dispatch(createPolicy('Nikhil', 40))
store.dispatch(createPolicy('Kiran', 30))

store.dispatch(createClaim('Shivam', 40))

store.dispatch(deletePolicy('Shivam'))

console.log(store.getState())