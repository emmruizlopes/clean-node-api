import { EmailValidator } from './../../protocols/email-validator'
import { InvalidParamError } from '../../erros'
import { Validation } from '../../protocols/validation'

export class EmailValidation implements Validation {
  constructor (
    private readonly fiedName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fiedName])
    if (!isValid) {
      return new InvalidParamError(this.fiedName)
    }
  }
}
