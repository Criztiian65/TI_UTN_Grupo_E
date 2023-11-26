import { createContext, useState } from 'react'

export const NewContext = createContext()

const ProvContext = ({ children }) => {

  const [tarea, setTarea] = useState('')

  const [listaTareas, setListTareas] = useState(
    [{
      id: 1,
      nombre: 'algo para hacer1',
      completed: true
    }, {
      id: 1,
      nombre: 'algo para hacer2',
      completed: false
    }, {
      id: 1,
      nombre: 'algo para hacer3',
      completed: false
    }])

  // tarea va a tener id, nombre, completed



  const handleSubmit = () => {

    console.log('Hiciste submit');

  }

  const handleChange = (e) => {
    setTarea(e.target.value)
  }
  console.log(listaTareas)

  const handleCompleted = (tareaid) => {
    listaTareas.map(() => {
      if (tarea.id !== tareaid) return tarea

      return {
        ...tarea,
        completed: !tarea.completed
      }
    })
  }

  const handleDeleted = ()=>{
    const tareasFiltradas = listaTareas.filter((tarea)=> !tarea.completed)
    setListTareas(tareasFiltradas)
  }

  return (
    <NewContext.Provider
      value={{ handleChange, handleSubmit, handleCompleted, handleDeleted, listaTareas }}
    >
      {children}

    </NewContext.Provider>
  )
}

export default ProvContext