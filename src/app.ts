import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  private express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.databse()
    this.routes()
  }

  public run (): express.Application {
    return this.express
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private databse (): void {
    mongoose.connect('mongodb://localhost:27017/ts-node', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default (new App()).run()
