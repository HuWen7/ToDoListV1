import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import {withStyles, withTheme} from '@material-ui/styles'
import clsx from 'clsx';

import {HomeStyles} from '../Styles/HomeStyles'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes} = this.props
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
          <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                  <Chart />
              </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                  <Deposits />
              </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <Orders />
              </Paper>   
              </Grid>
          </Grid>
        );
    }
}
 
export default (withTheme(withStyles(HomeStyles)(Home)));