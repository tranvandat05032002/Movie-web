import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidV4 } from "uuid";
import { selectFilm } from "utils/const";

const SelectMaterial = ({ setSortType, sortType, title }) => {
  return (
    <Box sx={{ minWidth: 120 }} className="mb-[20px]">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          // defaultValue="default"
          label={title}
          onChange={(e) => setSortType(e.target.value)}
        >
          {selectFilm.map((item) => (
            <MenuItem value={item.type} key={uuidV4()}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectMaterial;
