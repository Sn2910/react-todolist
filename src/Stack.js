function Stack({stackName}){
    const taskArray = [
        {
         name: 'Task1',
         isCompleted: true
        },
        {
            name: 'Task2',
            isCompleted: false
           },
    ]
    const tasks= taskArray.map((task, index) =>{
        return(
            <div className="card" key = {index}>
                {task.name}
            <button>Edit</button>
            <button>Delete</button>
        </div>
        )

    })
    return (
     <div className="stackBox">
        <div className="stackTitle">
            <h4 className="stackHeading">
              {stackName}
              </h4>
              <div className="cards">
                {tasks}
              </div>
        </div>
     </div>
     
    )
}
export default Stack