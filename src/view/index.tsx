import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://playcanv.as/p/2OlkUaxF/'}
      title="Flappy Bird: A technical demo of games on Senhub"
      wallet={window.sentre.solana}
    />
  )
}

export default View
