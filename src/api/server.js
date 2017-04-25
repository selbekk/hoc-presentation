const delayResponse = response => new Promise(resolve => setTimeout(() => {
  resolve(response);
}, 2000));

export const getTodos = () => {
  return delayResponse([
    { id: '1', text: 'Gå på BEKK Fagkveld', done: true },
    { id: '2', text: 'Lær litt om higher order components', done: false },
    { id: '3', text: 'Rocke ut med BEKK Band', done: false },
  ]);
}
