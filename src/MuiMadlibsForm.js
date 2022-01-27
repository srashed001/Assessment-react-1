import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

const MuiMadlibsForm = ({ add }) => {
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <TextField
          required
          id="outlined-required"
          label="noun 1"
          name="noun1"
          placeholder="noun 1"
          value={formData.noun1}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="noun 2"
          name="noun2"
          placeholder="noun 2"
          value={formData.noun2}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="adjective"
          name="adjective"
          placeholder="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="color"
          name="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default MuiMadlibsForm;
