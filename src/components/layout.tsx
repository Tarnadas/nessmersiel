import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

interface LayoutState {
  isMenuVisible: boolean
  loading: string
}

class Layout extends React.Component<{}, LayoutState> {
  private timeoutId?: NodeJS.Timer
  public constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  public componentDidMount(): void {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  public componentWillUnmount(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  private handleToggleMenu(): void {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
  }

  public render(): JSX.Element {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

export default Layout
