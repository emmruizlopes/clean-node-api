import { InvalidParamError } from '../../erros'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  private readonly fiedName: string
  private readonly fiedToCompareName: string

  constructor (fiedName: string, fiedToCompareName: string) {
    this.fiedName = fiedName
    this.fiedToCompareName = fiedToCompareName
  }

  validate (input: any): Error {
    if (input[this.fiedName] !== input[this.fiedToCompareName]) {
      return new InvalidParamError(this.fiedToCompareName)
    }
  }
}
