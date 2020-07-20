const initialState = {
    project : null,
    is_create_project : false,
    project_list : [],
    is_load_project : false,
    project_detail : null,
    is_load_project_detail : false,
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATING_PROJECT":
            return {
                ...state,
                is_create_project : true
            }
        case "CREATE_PROJECT_SUCCESS":
            return {
                ...state,
                is_create_project : false,
                project_detail : action.payload
            }
        case "CREATE_PROJECT_FAILED":
            return {
                ...state,
                is_create_project : false,
                project_detail : action.payload
            }
        case "LOADING_PROJECT":
            return {
                ...state,
                is_load_project : true,
            }
        case "LOAD_PROJECT_SUCCESS":
            return {
                ...state,
                is_load_project : false,
                project_list : action.payload
            }
        case "LOAD_PROJECT_FAILED":
            return {
                ...state,
                is_load_project : false,
                project_list : action.payload
            }
        case "LOADING_PROJECT_DETAIL":
            return {
                ...state,
                is_load_project_detail : true,
            }
        case "LOAD_PROJECT_DETAIL_SUCCESS":
            return {
                ...state,
                is_load_project_detail : false,
                project_detail : action.payload
            }
        case "LOAD_PROJECT_DETAIL_FAILED":
            return {
                ...state,
                is_load_project_detail : false,
                project_detail : action.payload
            }
        default:
            return state;
    }
}

export default projectReducer;