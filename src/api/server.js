const delayResponse = response => new Promise(resolve => setTimeout(() => {
  resolve(response);
}, 2000));

export const getTodos = () => {
  return delayResponse([
    { id: '1', text: 'Gå på BEKK Open', done: true },
    { id: '2', text: 'Lær om higher order components', done: false },
    { id: '3', text: 'Lek rockestjerne med BEKK Band', done: false },
  ]);
}
