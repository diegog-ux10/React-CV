import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
  Chip,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SidebarSection.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const SidebarSection = ({ title, info }) => {
  const [inputValue, setInputValue] = useState("");
  const [state, setState] = useState(info);
  const handleAddClick = () => {
    setState([...state, [inputValue]]);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {title === "Perfil" && (
          <List>
            {
              // eslint-disable-next-line react/prop-types
              info.map((ele) => (
                <ListItem key={ele[0]}>
                  <Box>
                    <Typography>{ele[0]}</Typography>
                    <Typography>{ele[1]}</Typography>
                  </Box>
                </ListItem>
              ))
            }
          </List>
        )}
        {title !== "Perfil" && (
          <>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                maxWidth: "300px",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              {
                // eslint-disable-next-line react/prop-types
                state.map((ele) => (
                  <Chip key={ele[0]} label={ele[0]} />
                ))
              }
            </Stack>
            <Stack spacing={2} sx={{ marginTop: 2 }}>
              <TextField
                id="outlined-basic"
                label="Add"
                variant="outlined"
                size="small"
                onChange={(e) => setInputValue(e.currentTarget.value)}
              />
              <Button variant="contained" size="small" onClick={handleAddClick}>
                Add Skill
              </Button>
            </Stack>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
