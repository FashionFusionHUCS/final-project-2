import { Grid } from "@mui/material";

export default function EntranceComponent(props) {
    return (
        <div className="entrance-component" ref={props.myref}>
            <Grid container>
                <div>Hi</div>
            </Grid>
        </div>
    );
}