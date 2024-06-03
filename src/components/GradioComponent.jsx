import Grid from '@mui/material/Grid';

import DividerComponent from './DividerComponent.jsx';

export default function GradioComponent(props) {

    const div = <DividerComponent name="Demo" />;

    return (
        <div className="gradio-component" style={{ "alignItems": "center" }} ref={props.myref}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                <Grid container item
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {div}
                </Grid>
                <Grid container item
                direction="row"
                justifyContent="center"
                alignItems="center">
                    <iframe
                        src="https://korhanerdem-fashion-fusion.hf.space"
                        frameborder="0"
                        style={{
                            'width': '70%', 'height': '1300px',
                            'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                        }
                        }
                    ></iframe>
                </Grid>
                </Grid>
        </div>
    );
};