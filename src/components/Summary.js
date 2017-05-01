const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: PropTypes.string
  },
  getDefaultProps() {
      return {
          ingredients: 0,
          steps: 0,
          title: "[recipe]"
      }
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients.length} Ingredients</span> |
          <span>{steps.length} Steps</span>
        </p>
      </div>
    )
  }
})
