import * as PostApi from '../api/PostRequest'


export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })

    try {
        const { data } = await PostApi.getTimelinePosts(id);
        console.log({ data });
        dispatch({ type: "RETREIVING_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "RETREIVING_FAIL" })
        console.log(error);
    }
};

export const deletePost = (id, userId) => async (dispatch) => {
    dispatch({ type: "delete_START" });
    try {
        console.log("keeri");

        const { data } = await PostApi.deletePost(id, userId);
        console.log(data, "delete action");
        dispatch({ type: "REFRESH" });
        dispatch({ type: "delete_SUCCESS", data: {id} });
    } catch (error) {
        console.log(error);
        dispatch({ type: "delete_FAIL" });
    }
};