import { Action, legacy_createStore, applyMiddleware } from "redux"
import { save, load } from "redux-localstorage-simple"

const initialState = {
    theme: 'light'
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        
        default:
            return state
    }
}

const createStoreWithMiddleware = applyMiddleware(save({
    namespace: 'cottons-kr-website'
}))(legacy_createStore)

const store = createStoreWithMiddleware(
    reducer,
    load({
        namespace: 'cottons-kr-website',
        preloadedState: initialState
    }) as Store
)

export default store
