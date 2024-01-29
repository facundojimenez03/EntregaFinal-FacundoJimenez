import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")


    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <div className="mb-3">
                    <label className="form-label">
                        Nombre:
                        <input className="Input form-control" type="text" value={name} onChange={({ target }) => setname(target.value)} />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Telefono:
                        <input className="Input form-control" type="text" value={phone} onChange={({ target }) => setphone(target.value)} />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email:
                        <input className="Input form-control " type="email" value={email} onChange={({ target }) => setemail(target.value)} />
                    </label>
                </div>



                <div className="Label">
                    <button type="submit" className="btn btn-primary"> Crear orden </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm