import { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { TextField, Button, Grid, List, ListItem, ListItemText} from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
}));



function Chat() {
  const classes = useStyles();
  const [textInput, setTextInput] = useState({ name: '', message: '' })
  const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */([])
  )
  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    // const { name, value } = event.target
    // obj = { ...prev }; obj[name] = value
    setTextInput(prev => ({
      ...prev,
      [name]: value,
    }))
    console.log(textInput)
  }
  
  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    setComments(prev => [...prev, textInput])
    setTextInput({ name: '', message: '' })
    event.preventDefault();
  }
  
  return (
    <div>
      <form classname={classes.form} onSubmit={handleFormSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="Nickname"
            name="name"
            autoFocus
            onChange={handleTextInputChange}
            value={textInput.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="message"
            label="Message"
            id="message"
            onChange={handleTextInputChange}
            value={textInput.message}
          />
          <Button
            type="submit"
            variant="contained"
            margin="normal"
            color="primary"
            className={classes.submit}
          >
            Enter
          </Button>
      </form>
      <div>
            <List className={classes.messageArea}>
              {comments.map((comment, index) =>
                  <ListItem key={index}>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary={comment.message}></ListItemText>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItemText align="left" secondary={comment.name}></ListItemText>
                        </Grid>
                        {/**
                        <Grid item xs={6}>
                            <ListItemText align="right" secondary="09:31"></ListItemText>
                        </Grid>
                        */}
                    </Grid>
                </ListItem>
              )}
          </List>
      </div>
    </div>
  );
}
export default Chat;
