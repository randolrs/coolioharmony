
const Types = {
  FETCH_PHOTOS: "FETCH_PHOTOS",
  GET_PHOTO: "GET_PHOTO"
};

export const fetchPhotos = (payload) => {

  return {
    type: Types.FETCH_PHOTOS,
    payload: payload
  };
};

export const getPhoto = (payload) => {
  return {
    type: Types.GET_PHOTO,
    payload: payload
  };
};

export default {
  fetchPhotos,
  getPhoto,
  Types
};
