export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
   // token:"BQClxhNdixuZ_NeR84o7fwsZHfRyhYVCFBnmha8qSZ1hpgZe8oFxL0NXaKKAnZN4DQurJyKjfktrwSgTs2xorraxJJOqLRprQg7U2mooYTruZuMmFWomleWce8n0rlse4tLi43QzyyARsUFQT-PV50sYTVIBtqZfn13lPCCCM3GjDXgz",
};
const reducer=(state, action)=> {
    console.log(action);
    switch (action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}
export default reducer