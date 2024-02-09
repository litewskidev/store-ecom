import express from 'express'
import { newPayment } from '../controllers/paymentController.js'

const paymentRouter = express.Router()

paymentRouter.post('/', newPayment)

export default paymentRouter
