import { Alert, AsyncStorage } from 'react-native'
import { useCallback, useState } from 'react';
import { CameraRoll } from 'react-native';


const api = "http://10.0.0.113:3000/"
const apiV1 = "http://10.0.0.113:3000/api/v1/"


// export const uploadImage = (itemId, imageUri) => dispatch => {
//     let formdata = new FormData();
//     formdata.append("image", { uri: imageUri, name: `${itemId}.jpg`, type: 'image/jpeg' })

//     fetch(`${api}/items/${itemId}/image`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         body: formdata
//     })
//         .then(resp => resp.json())
//         .then(
//             data => {
//                 dispatch({ type: 'UPDATE_ITEM', payload: { item: data } })
//             }
//         )
// }