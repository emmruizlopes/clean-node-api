import { badRequest } from './../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../protocols'
import { Controller } from './../../protocols/controller'
import { MissingParamError } from '../../erros'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
  }
}
