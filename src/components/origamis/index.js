import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam'

class Origamis extends Component {

  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  renderOrigamis() {
    const { origamis } = this.state

    return origamis.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />
      )
    })
  }

  getOrigamis = async () => {
    const { length } = this.props
    const promise = await fetch(`https://localhost:9999/api/origami?length=${length}`)
    const origamis = promise.json();

    this.setState({
      origamis
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    console.log(this.state.origamis)

    return (

      <div className={styles["origamis-wrapper"]}>
        {this.renderOrigamis()}
      </div>
    )
  }
}

export default Origamis;
