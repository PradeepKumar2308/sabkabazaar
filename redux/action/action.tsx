export function fetchData(screen: string, url: string) {
  return function (dispatch: (arg0: { type: string; payload: any; variable: string; }) => any) {
    return fetch(url)
      .then(response => response.json())
      .then(res => dispatch(setData(res, screen)));
  };
}
const setData = (data: any, screen: string) => {
  return {
    type: 'SET_DATA',
    payload: data,
    variable: screen,
  };
};
