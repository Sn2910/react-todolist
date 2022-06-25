import Header from "./Header";
import Sidebar from "./Sidebar";
import Stack from "./Stack";
import  "./Main.css";


function Main(){
    return (
        <div>
            <Header />
            <Sidebar />
            <main>
              <Stack stackName = "To DO" />
              <Stack stackName = "In Progress" />
              <Stack stackName = "In Review" />
              <Stack stackName = "Completed" />
            </main>
        </div>

    );
}
export default Main