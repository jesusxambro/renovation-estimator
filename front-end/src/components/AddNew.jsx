import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel, FormGroup, InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";

function AddNew() {
    const [title, setTitle] = useState("");
    const [height, setHeight] = useState("");
    const [length, setLength] = useState("");
    const [client_FirstName, setClientFirstName] = useState("");
    const [client_LastName, setClientLastName] = useState("");
    const [projectDate, setProjectDate] = useState("");
    const [vanity, setVanity] = useState(false);
    const [vanity_Comments, setVanityComments] = useState("");
    const [sink, setSink] = useState(false);
    const [sink_Comments, setSinkComments] = useState("");
    const [tub, setTub] = useState(false);
    const [tub_Comments, setTubComments] = useState("");
    const [toilet, setToilet] = useState(false);
    const [toilet_Comments, setToiletComments] = useState("");
    const [total, setTotal] = useState(0);
    const [ description, setDescription] = useState("");

    const navigate = useNavigate();

    async function handleSubmit() {
        event.preventDefault();

        try {
            const res = await axios.post(`http://localhost:8080/bathrooms/`, {
                "title": title,
                "length": length,
                "height": height,
                "client_FirstName": client_FirstName,
                "client_LastName": client_LastName,
                "vanity": vanity,
                "projectDate": projectDate,
                "vanity_Comments": vanity_Comments,
                "tub": tub,
                "tub_Comments": tub_Comments,
                "sink": sink,
                "sink_Comments": sink_Comments,
                "toilet": toilet,
                "toilet_Comments": toilet_Comments,
                "total": total,
                "description": description
            })
            if (res.status === 200) {
                alert("Success!")
                navigate("/");
            }

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div>
            <h1>
                Add A New Project
            </h1>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    error
                    required
                    id="outlined-required"
                    label="Title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
                <TextField
                    multiline
                    rows={4}
                    id="outlined-required"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <TextField
                    error
                    required
                    id="outlined-required"
                    label="Length"
                    value={length}
                    onChange={(event) => {
                        setLength(event.target.value)
                    }}
                />
                <TextField
                    error
                    required
                    id="outlined-required"
                    label="Height"
                    value={height}
                    onChange={(event) => {
                        setHeight(event.target.value)
                    }}
                />
                <TextField
                    error
                    required
                    id="outlined-required"
                    label="Client First Name:"
                    value={client_FirstName}
                    onChange={(event) => {
                        setClientFirstName(event.target.value)
                    }}
                />
                <TextField
                    error
                    required
                    id="outlined-required"
                    label="Client Last Name"
                    value={client_LastName}
                    onChange={(event) => {
                        setClientLastName(event.target.value)
                    }}
                />
                <TextField
                    required
                    error
                    id="outlined-required"
                    label="Project Date: dd-MM-yyyy"
                    value={projectDate}
                    onChange={(event) => {
                        setProjectDate(event.target.value)
                    }}
                />
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            checked={vanity}
                            onChange={() => {
                                setVanity(!vanity)
                            }}
                            inputProps={{'aria-label': 'controlled'}}
                        />} label="Vanity"/>
                    </FormGroup>
                    {(vanity) ? <TextField
                        multiline
                        rows={4}

                        id="outlined-required"
                        label="Vanity Comments"
                        value={vanity_Comments}
                        onChange={(event) => {
                            setVanityComments(event.target.value)
                        }}
                    /> : null}
                </div>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            checked={tub}
                            onChange={() => {
                                setTub(!tub)
                            }}
                            inputProps={{'aria-label': 'controlled'}}
                        />} label="Tub"/>
                    </FormGroup>
                    {(tub) ? <TextField
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Tub Comments"
                        value={tub_Comments}
                        onChange={(event) => {
                            setTubComments(event.target.value)
                        }}
                    /> : null}
                </div>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            checked={sink}
                            onChange={() => {
                                setSink(!sink)
                            }}
                            inputProps={{'aria-label': 'controlled'}}
                        />} label="Sink"/>
                    </FormGroup>
                    {(sink) ? <TextField
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Sink Comments"
                        value={sink_Comments}
                        onChange={(event) => {
                            setSinkComments(event.target.value)
                        }}
                    /> : null}
                </div>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            checked={toilet}
                            onChange={() => {
                                setToilet(!toilet)
                            }}
                            inputProps={{'aria-label': 'controlled'}}
                        />} label="Toilet"/>
                    </FormGroup>
                    {(toilet) ? <TextField
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Toilet Comments"
                        value={toilet_Comments}
                        onChange={(event) => {
                            setToiletComments(event.target.value)
                        }}
                    /> : null}
                </div>

                <hr/>


                <TextField
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    id="outlined-required"
                    label="Total Cost:"
                    value={total}
                    onChange={(event) => {
                        setTotal(Number.parseInt(event.target.value))
                    }}
                />

            </Box>
            <Button variant="contained"
                    onClick={handleSubmit}
            > Submit </Button>

        </div>

    )
}

export default AddNew;