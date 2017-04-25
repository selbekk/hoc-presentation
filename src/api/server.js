const delayResponse = response => new Promise(resolve => setTimeout(() => {
  resolve(response);
}, 1000));

export const getTodos = () => {
  return delayResponse([
    { id: '1', text: 'Gå på BEKK Fagdag', done: true },
    { id: '2', text: 'Lær om higher order components', done: false },
    { id: '3', text: 'Lek rockestjerne med BEKK Band', done: false },
  ]);
}
