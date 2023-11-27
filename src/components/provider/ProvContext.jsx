import { createContext, useState } from 'react'

export const NewContext = createContext()

const ProvContext = ({ children }) => {

  const [tarea, setTarea] = useState('')
  const [check, setCheck] = useState(false)

  const [listaTareas, setListTareas] = useState(
    [{
      id: 1,
      nombre: 'algo para hacer1',
      completed: true
    }, {
      id: 2,
      nombre: 'algo para hacer2',
      completed: false
    }, {
      id: 3,
      nombre: 'algo para hacer3',
      completed: false
    }])

  // tarea va a tener id, nombre, completed
  console.log(listaTareas)


  const handleSubmit = () => {

    console.log('Hiciste submit');

  }

  const handleChange = (e) => {
    setTarea(e.target.value)
  }
  

  const handleCompleted = (id) => {
    console.log(id);
    
    const changeCheck =listaTareas.map((tarea) => {
      if (tarea.id !== id) return tarea

      return {
        ...tarea,
        completed: !tarea.completed
      }

    })
    setListTareas(changeCheck)
    
  }



  const handleDeleted = (id)=>{
    const tareasFiltradas = listaTareas.filter((tarea)=> (tarea.id !== id))

    setListTareas(tareasFiltradas)
  }

  return (
    <NewContext.Provider
      value={{ handleChange, handleSubmit, handleCompleted, handleDeleted, listaTareas, check}}
    >
      {children}

    </NewContext.Provider>
  )
}

export default ProvContext