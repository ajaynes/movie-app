import React from "react"
import ReactDOM from "react-dom"
// import { createStore } from "redux"
// import { Provider } from "react-redux"
import "./styles/styles.scss"
import App from "./App"
// import rootReducer from "./reducers"
// import middleware from "./middleware"

// const store = createStore(rootReducer, middleware)
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// )

ReactDOM.render(<App />, document.getElementById("root"))
