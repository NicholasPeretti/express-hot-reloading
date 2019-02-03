var renderSubtitle = require('./renderSubtitle')

renderSubtitle()

if (module.hot) {
  module.hot.accept('./renderSubtitle', function() {
    console.log('Accepting the updated module!')
    renderSubtitle = require('./renderSubtitle')
    renderSubtitle()
  })
}
