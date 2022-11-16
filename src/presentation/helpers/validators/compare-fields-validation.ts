import { InvalidParamError } from '../../erros'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fiedName: string,
    private readonly fiedToCompareName: string
  ) {}

  validate (input: any): Error {
    if (input[this.fiedName] !== input[this.fiedToCompareName]) {
      return new InvalidParamError(this.fiedToCompareName)
    }
  }
}
