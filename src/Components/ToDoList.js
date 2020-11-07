import React, {Component} from 'react'

import {withStyles, withTheme} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

import Title from './Title'
import {ToDoListStyles} from '../Styles/ToDoListStyles'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        addContent: "",
        todoContent: [
        ]
    }
  }
  render() { 
    const {classes} = this.props
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper 
            className={classes.inputPaper} 
            component="form" 
            onSubmit={(e)=>{
              e.preventDefault();
              this.setState({
                addContent: "",
                todoContent:[...this.state.todoContent, {"content": this.state.addContent, isDone: false}]});
            }}
            >
              <InputBase
                placeholder="Please Add a TODO"
                value={this.state.addContent}
                fullWidth={true}
                onChange={(e)=>{this.setState({addContent: e.target.value})}}
              />
              <Button type="submit" variant="contained" color="primary">ADD</Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.todoItemPaper}>
              <Title>
                TODO
              </Title>
              {this.state.todoContent.map((value, key) =>{
                if(!value.isDone)
                  return (
                    <ListItem key={key}>
                      <Checkbox value={value.isDone} onClick={(e)=>
                      {
                        let tmp = this.state.todoContent;
                        tmp[key].isDone = !tmp[key].isDone
                        this.setState({todoContent: tmp})
                      }}/>
                      <ListItemText primary={value.content} />
                      <IconButton button onClick={e=>{
                        let tmp = this.state.todoContent
                        tmp.splice(key, 1)
                        this.setState({todoContent: tmp})
                      }}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  )
                return ""
              })}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.todoItemPaper}>
              <Title>
                DONE
              </Title>
              {this.state.todoContent.map((value, key) =>{
                if(value.isDone)
                  return (
                    <ListItem key={key}>
                      <Checkbox checked={value.isDone} onClick={(e)=>
                      {
                        let tmp = this.state.todoContent;
                        tmp[key].isDone = !tmp[key].isDone
                        this.setState({todoContent: tmp})
                      }}/>
                      <ListItemText primary={value.content} />
                      <IconButton button onClick={e=>{
                        let tmp = this.state.todoContent
                        tmp.splice(key, 1)
                        this.setState({todoContent: tmp})
                      }}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  )
                return ""
              })}
            </Paper>   
          </Grid>
      </Grid>
    </div>
    )
  }
}

export default (withTheme(withStyles(ToDoListStyles)(ToDoList)));