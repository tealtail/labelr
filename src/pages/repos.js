import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'ReposPage',

  render () {
    const {repos} = this.props

    return (
      <div>
        <h1>Repos page</h1>

        <div>
          {repos.map((repo) => {
            return (
              <div>
                <a href="">{repo.full_name}</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
