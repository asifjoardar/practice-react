import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: 1,
            title: "Car Insurance",
            amount: 123.12,
            date: new Date(2022, 6, 7),
        },
        {
            id: 2,
            title: "Dar Insurance",
            amount: 456.12,
            date: new Date(2022, 7, 8),
        },
        {
            id: 3,
            title: "Ear Insurance",
            amount: 789.12,
            date: new Date(2022, 9, 10),
        },
    ];
    const addExpenseHandler = expense => {
        console.log(expense);
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
