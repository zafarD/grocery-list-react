import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Form = ({ addItem }) => {
    const [data, setData] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!data) {
            return toast.error('Please provide value')
        }
        addItem(data)
        setData('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer position="top-center" />
            <h4>Grocery Cart</h4>
            <div className="form-control" htmlFor="name">
                <input type="text"
                    className="form-input"
                    id="name"
                    name="name"
                    onChange={(e) => setData(e.target.value)}
                    value={data}
                />
                <button type="submit" className="btn">
                    add item
                </button>
            </div>
        </form>
    )
}

export default Form;