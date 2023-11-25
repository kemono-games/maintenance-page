import compression from 'compression'
import express from 'express'
import path from 'path'
import fs from 'fs'

const port = parseInt(process.env.PORT ?? '8080')
const hostname = process.env.HOSTNAME || 'localhost'
const app = express()

const htmlContent = fs.readFileSync(path.resolve(process.cwd(), 'dist/index.html'), 'utf-8')

app.use(compression())

app.get('*', function (_request, response) {
  response.status(503).send(htmlContent)
})

app.listen(port, hostname)
// noinspection HttpUrlsUsage
console.log(`[*] Server started on http://${hostname}:${port}`)
