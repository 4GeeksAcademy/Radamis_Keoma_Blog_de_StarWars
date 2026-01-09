export const initialStore = () => {
  return {
    favoritos: [],
    message: null,
    personajes: [],
    planetas: [],
    veiculos: [],
    veiculo: null,
    planeta: null,
    personaje: null,
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
  switch (action.type) {
    case 'add_favoritos':
      const personaje = action.payload

      if (store.favoritos.some(fav => fav.uid === personaje.uid)) {
        return store;
      }


      return {
        ...store,
        favoritos: [...store.favoritos, personaje]
      }

    case 'add_personajes':
      return {
        ...store,
        personajes: action.payload
      }

    case "set_personaje":
      return {
        ...store,
        personaje: action.payload
      };

    case 'add_planetas':
      return {
        ...store,
        planetas: action.payload
      }

    case "set_planeta":
      return {
        ...store,
        planeta: action.payload
      };

    case 'add_veiculos':
      return {
        ...store,
        veiculos: action.payload
      }

    case "set_veiculo":
      return {
        ...store,
        veiculo: action.payload
      };

    case 'delete_favoritos': {
      const { uid, type } = action.payload;

      return {
        ...store,
        favoritos: store.favoritos.filter(
          fav => !(fav.uid === uid && fav.type === type)
        ) };
    }

    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    default:
      throw Error('Unknown action.');
  }
}
