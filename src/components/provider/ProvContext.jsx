import { createContext, useState } from 'react'

export const NewContext = createContext()

const ProvContext = ({ children }) => {

  

  const [tarea, setTarea] = useState('')
  const [completed, setCompleted] = useState(false)

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


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hiciste submit ' + tarea);
const id = listaTareas.length > 0 ? listaTareas[listaTareas.length-1].id : 1;
 console.log('estot es id ' +id)

    const newTarea = {
      id: id+1,
      nombre: tarea,
      completed: completed
    }
  
    listaTareas.push(newTarea)

    setListTareas(listaTareas)

  }



  const handleChange = (e) => {
    setTarea(e.target.value)
    console.log(e.target.value);
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
      value={{ handleChange, handleSubmit, handleCompleted, handleDeleted, listaTareas}}
    >
      {children}

    </NewContext.Provider>
  )
}

export default ProvContext