import { EmailValidator } from './../../protocols/email-validator'
import { InvalidParamError } from '../../erros'
import { Validation } from './validation'

export class EmailValidation implements Validation {
  private readonly fiedName: string
  private readonly emailValidator: EmailValidator

  constructor (fiedName: string, emailValidator: EmailValidator) {
    this.fiedName = fiedName
    this.emailValidator = emailValidator
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fiedName])
    if (!isValid) {
      return new InvalidParamError(this.fiedName)
    }
  }
}
