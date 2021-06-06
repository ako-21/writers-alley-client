import React from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  convertToRaw
} from 'draft-js'
import Button from 'react-bootstrap/Button'

export const DEFAULT_SECONDS = 10

export class FreeWritingEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      time: {},
      seconds: DEFAULT_SECONDS,
      topic: ''
    }
    this.editor = React.createRef()
    this.timer = 0
    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor)
    this.focus = () => this.editor.current.focus()
  }

  componentDidMount () {
    const timeLeftVar = this.secondsToTime(this.state.seconds)
    this.setState({ time: timeLeftVar })
  }

  componentDidUpdate (oldProps) {
    const newProps = this.props
    if (newProps.data.topic !== oldProps.data.topic) {
      this.setState(
        {
          editorState: EditorState.createEmpty(),
          seconds: DEFAULT_SECONDS,
          topic: newProps.data.topic
        },
        function () {
          const timeLeftVar = this.secondsToTime(this.state.seconds)
          this.setState({ time: timeLeftVar })
          this.timer = 0
        }
      )
    }
  }

  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  };

  getTimer () {
    return this.state.seconds === 0
  }

  secondsToTime (secs) {
    const hours = Math.floor(secs / (60 * 60))

    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)

    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.ceil(divisorForSeconds)

    const obj = {
      h: hours,
      m: minutes,
      s: seconds
    }
    return obj
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    const seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    })

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer)
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  };
  onSave = (editorState, props) => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks
    const ideaData = []
    blocks.forEach((value, index) => {
      const inlineStyles = value.inlineStyleRanges
      inlineStyles.forEach((styleVal) => {
        ideaData.push({
          data: value.text.substring(
            styleVal.offset,
            styleVal.length + styleVal.offset
          ),
          color: styleVal.style
        })
      })
    })
    const toBeSavedData = this.props.data
    toBeSavedData.ideas = ideaData
    this.props.addData(toBeSavedData)
  };

  _toggleColor (toggledColor) {
    const { editorState } = this.state
    const selection = editorState.getSelection()

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap).reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      },
      editorState.getCurrentContent()
    )

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    const currentStyle = editorState.getCurrentInlineStyle()

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color)
      }, nextEditorState)
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      )
    }

    this.onChange(nextEditorState)
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    )
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  };

  onAddTopic = (topic, props) => {
    this.props.addTopic(topic)
  };

  handleBeforeInput = (chars, state) => {
    if (state.seconds === 0) return 'handled'
  };

  render () {
    const { editorState } = this.state
    const timerState = this.state.seconds === 0
    const ideaView = this.props.data.ideas.length > 0
    const isStart = this.state.seconds === DEFAULT_SECONDS

    if (!ideaView) {
      return (
        <div
          key={this.state.seconds}
          style={styles.root}
          className="editorMain"
        >
          <h3 style={{ textAlign: 'center' }}>{this.props.data.topic}</h3>
          {!timerState && (
            <div>
              <Button onClick={this.startTimer} style={{ backgroundColor: 'green' }} className="mr-1" size="sm">
                Start
              </Button>
              {this.state.time.m}:
              {this.state.time.s < 10
                ? '0' + this.state.time.s
                : this.state.time.s}
            </div>
          )}
          {timerState && (
            <ColorControls
              editorState={editorState}
              onToggle={this.toggleColor}
            />
          )}
          <div style={styles.editor} onClick={this.focus}>
            <Editor
              customStyleMap={colorStyleMap}
              editorState={editorState}
              onChange={this.onChange}
              handleKeyCommand={this.handleKeyCommand}
              handleBeforeInput={(chars) =>
                this.handleBeforeInput(chars, this.state)
              }
              readOnly={isStart}
              ref={this.editor}
            />
          </div>
          <Button className="mt-1" style={{ backgroundColor: '#343a40' }}
            onClick={() => this.onSave(editorState, this.props)}
            disabled={!timerState}
          >
            Save
          </Button>
        </div>
      )
    } else {
      return (
        <div style={styles.root} className="editorMain">
          <h1>{this.props.data.topic}</h1>
          <div className="mt-5">
            {this.props.data.ideas.map((x, i) => (
              <h4
                key={x.data}
                onClick={() => this.onAddTopic(x.data, this.props)}
                style={{ color: colorStyleMap[x.color].color }}
              >
                {i + 1} : {x.data}
              </h4>
            ))}
          </div>
        </div>
      )
    }
  }
}

class StyleButton extends React.Component {
  constructor (props) {
    super(props)
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render () {
    let style
    if (this.props.active) {
      style = {
        ...styles.styleButton,
        ...colorStyleMap[this.props.style]
      }
    } else {
      style = styles.styleButton
    }

    return (
      <span style={style} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    )
  }
}

const COLORS = [
  { label: 'Red', style: 'red' },
  { label: 'Orange', style: 'orange' },
  { label: 'Green', style: 'green' },
  { label: 'Blue', style: 'blue' },
  { label: 'Indigo', style: 'indigo' },
  { label: 'Violet', style: 'violet' }
]

const ColorControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div style={styles.controls}>
      {COLORS.map((type) => (
        <StyleButton
          key={type.style}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

// This object provides the styling information for our custom color
// styles.
const colorStyleMap = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)'
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)'
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)'
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)'
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)'
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)'
  },
  violet: {
    color: '(127, 0, 255, 1.0)'
  }
}

const styles = {
  root: {
    fontFamily: 'Georgia, serif',
    fontSize: 14,
    padding: 20,
    width: '100%'
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    marginTop: 20,
    minHeight: 400,
    paddingTop: 20
  },
  controls: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: 14,
    marginBottom: 10,
    userSelect: 'none'
  },
  styleButton: {
    color: '#999',
    cursor: 'pointer',
    marginRight: 16,
    padding: '2px 0'
  }
}

export default FreeWritingEditor
