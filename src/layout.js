import React from 'react'
import NavHelper from './components/nav-helper'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  propTypes: {
    me: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired
  },

  render () {
    const {me} = this.props

    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'>
              <div className='user'>
                <img className='avatar avatar-small avatar-rounded' src={me.avatar_url}/> {me.login}
              </div>
               <a href='/logout'>Logout</a>
            </li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
