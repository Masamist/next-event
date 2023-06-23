import classes from './event-content.module.css'

function EventContent(props) {
  return (
    <section classname={classes.content}>
      {props.children}
    </section>
  )
}

export default EventContent