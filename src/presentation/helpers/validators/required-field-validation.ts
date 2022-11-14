import { MissingParamError } from '../../erros'
import { Validation } from './validation'

export class RequiredFieldValidation implements Validation {
  private readonly fiedName: string

  constructor (fiedName: string) {
    this.fiedName = fiedName
  }

  validate (input: any): Error {
    if (!input[this.fiedName]) {
      return new MissingParamError(this.fiedName)
    }
  }
}
