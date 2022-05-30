import Expense from "./components/expense/Expense";
import {TransactionProvider} from './components/expense/transContext'

function App() {
  return (
    <TransactionProvider>
            <Expense/>
    </TransactionProvider>


  );
}

export default App;
