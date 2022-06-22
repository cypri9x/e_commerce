import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useCustomContext } from "../../../store/CustomContext";



function NewItem() {
    const [image64, setImage64] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const { state, dispatch } = useCustomContext();

    function handleAddClick() {
        dispatch({
            type: "save",
            payload: {
                title: title,
                subtitle: subtitle,
                description: description,
                image:  image64

            },
        });
    }

    function getImageBase64(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            setImage64(reader.result);
        };
        
     }

    return <div>
        <TextField label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Subtitle" variant="standard" onChange={(e) => setSubtitle(e.target.value)} />
        <TextField label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} />
        <Button
            variant="contained"
            component="label"
        >
            Upload File
            <input
                type="file"
                id ="MyImage"
                name="imgname"
                onChange={getImageBase64}
            />
        </Button>
        <Button variant="contained" onClick={handleAddClick}>Add</Button>
    </div>;
}
export default NewItem;