
// IL faut creer une const exemple

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

// le useDispatch (dispatch) envoit a l'action qui elle meme contient les infos au reducer
export function toggleLogin() {
  return {
    type: TOGGLE_VISIBILITY,
  };
}

/*
//gestion du changement de champ (modife dans les champs)
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

//ici l'action creator qui est declanché au moment du dispatch
export function changeFieldValue ( value, field) {
return {
    type: CHANGE_FIELD_VALUE,
        value,
        field,
    };
}
//Gestion du login

// IL faut creer un action creator qui servira pour le dispatch
export const LOGIN = 'LOGIN'

//action type il sert dans l'action creator et dans le reducer
export const login() {
    return {
        type : LOGIN,
    };
}
*/
