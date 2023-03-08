import React, { Component } from "react";
import axios from "axios";
import "./tble.css";
import "./new.css";


class Truck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truckno: "",
            drivername: "",
            milage: "",
            ownername: "",
            totalkilometers: "",
            truckacle: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/get").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handletrucknoChange = (event) => {
        this.setState({ truckno: event.target.value });
    };
    handledrivername = (event) => {
        this.setState({ drivername: event.target.value });
    };
    handlemilage = (event) => {
        this.setState({ milage: event.target.value });
    };
    handleownername = (event) => {
        this.setState({ ownername: event.target.value });
    };
    handletotalkilometers = (event) => {
        this.setState({ totalkilometers: event.target.value });
    };
    handletruckacle = (event) => {
        this.setState({ truckacle: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            truckno: this.state.truckno,
            milage: this.state.milage,
            totalkilometers: this.state.tkilometers,
            ownername: this.state.ownername,
            drivername: this.state.drivername,
            truckacle: this.state.truckacle,
            tyre:this.state.tyre,
            phn:this.state.phn
        };
        console.log(data);
        axios.post("http://localhost:8080/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                truckno: "",
                drivername: "",
                milage: "",
                ownername: "",
                totalkilometers: "",
                truckacle: "",
            });
        });
    };

    handleUpdate = (id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:8080/fuel/${id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((fuel) => {
                if (fuel.id === response.data.id) {
                    return response.data;
                } else {
                    return fuel;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/fuel/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (fuel) => fuel.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            truckno: data.truckno,
            drivername: data.drivername,
            milage: data.milage,
            ownername: data.ownername,
            totalkilometers: data.totalkilometers,
            truckacle: data.truckacle,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            truckno: this.state.truckno,
            drivername: this.state.drivername,
            milage: this.state.milage,
            ownername: this.state.ownername,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:8080/fuel/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    truckno: "",
                    drivername: "",
                    milage: "",
                    ownername: "",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">truckno</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.truckno}
                        onChange={this.handletrucknoChange}
                    />
                    <br /><br />
                    <label className="login-label">drivername</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.drivername}
                        onChange={this.handledrivername}
                    />
                    <br /><br />

                    <label className="login-label">milage</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.milage}
                        onChange={this.handlemilage}
                    />
                    <br /><br />

                    <label className="login-label">ownername</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.ownername}
                        onChange={this.handleownername}
                    />
                    <br /><br />

                    <label className="login-label">totalkilometers</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.totalkilometers}
                        onChange={this.handletotalkilometers}
                    />
                    <br /><br />

                    <label className="login-label">truckacle</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.truckacle}
                        onChange={this.handletruckacle}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Complete
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>truckno</th>
                            <th>drivername</th>
                            <th>milage</th>
                            <th>ownername</th>
                            <th>totalkilometers</th>
                            <th>truckacle</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.truckno}</td>
                                <td>{data.drivername}</td>
                                <td>{data.milage}</td>
                                <td>{data.ownername}</td>
                                <td>{data.tkilometers}</td>
                                <td>{data.truckacle}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>Vehicle Name:</label>
                    <input
                        type="text"
                        name="truckno"
                        value={this.state.truckno}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Type:</label>
                    <input
                        type="text"
                        name="drivername"
                        value={this.state.drivername}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Consumption:</label>
                    <input
                        type="number"
                        name="milage"
                        value={this.state.milage}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Price:</label>
                    <input
                        type="number"
                        name="ownername"
                        value={this.state.ownername}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Amount:</label>
                    <input
                        type="number"
                        name="totalkilometers"
                        value={this.state.totalkilometers}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="truckacle"
                        value={this.state.truckacle}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Truck;