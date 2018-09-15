import {Grid} from "@material-ui/core"
import * as React from "react"
import {Footer} from "../Shared/Footer"
import {NavBar} from "../Shared/NavBar"
import {PageContent} from "./PageContent"

export class BasePage extends React.PureComponent {
    public render() {
        return (
            <Grid container direction="column">
                <NavBar/>
                <PageContent>
                    {this.props.children}
                </PageContent>
                <Footer/>
            </Grid>
        )
    }
}