import crypto from 'crypto'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const cspHashOf = (text: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}
export default class MyDocument extends Document {
  render() {
    let csp = `default-src 'self'; script-src 'self'; connect-src http://localhost:4000; ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}`
    if (process.env.NODE_ENV !== 'production') {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; connect-src http://localhost:4000; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )}`
    }

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
