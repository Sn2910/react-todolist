import Header from "./Header";
import Sidebar from "./Sidebar";
import Stack from "./Stack";
import "./Card.css"
import './Board.css';
import  "./Main.css";
import Board from "./Board";
function Main(){
    return (
        <div>
            <Header />
            <Sidebar />
            <main >
            <div className="board_outer">
                <div className="board_container">
                   <Board />
                   <Board />
                   <Board />
                   <Board />
                   <Board />
                </div>
            </div>
            
           
           {/*  <section className="todo-section">
             <div className="stack-container">
              <Stack stackName = "To DO" />
              <Stack stackName = "In Progress" />
              <Stack stackName = "In Review" />
              <Stack stackName = "Completed" />
              </div>
              </section> */}
            </main>
        </div>

    );
}
export default Main