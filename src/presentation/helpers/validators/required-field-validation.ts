import { Validation } from '../../protocols/validation'
import { MissingParamError } from '../../erros'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fiedName: string) {}

  validate (input: any): Error {
    if (!input[this.fiedName]) {
      return new MissingParamError(this.fiedName)
    }
  }
}
