export const initialStore=()=>{
  return{
    favoritos: [],
    message: null,
    personajes: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favoritos':
      const personaje = action.payload

      return{
        ...store,
          favoritos: [...store.favoritos, personaje]
      }
    case 'add_personajes':
      return{
        ...store,
        personajes: action.payload
      }
    case 'delete_favoritos':
      const uid = action.payload
       return {
        ...store,
        favoritos: store.favoritos.filter(favorito => favorito.uid !== uid)
       }

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      
    default:
      throw Error('Unknown action.');
  }    
}
