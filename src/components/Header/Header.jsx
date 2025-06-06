import { Link } from "react-router";
import Logo from "../icons/logo.svg";
import { IconButton, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {

    return (
        <div className="flex justify-between items-center">
            <div>
                <a href="/"><img src={Logo}/></a>
            </div>
            <div className="flex items-center gap-2">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <IconButton aria-label="add an alarm">
                    <SearchIcon />
                </IconButton>
            </div>
            <div className="flex items-center gap-2">
                <IconButton aria-label="add an alarm">
                    <MoreVertIcon />
                </IconButton>
                <Button variant="outlined" startIcon={<PersonIcon />}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Header;