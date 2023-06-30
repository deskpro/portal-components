import * as yup from 'yup';
import { AnyObject, Maybe, Flags, Schema } from 'yup';

declare module 'yup' {
  interface DateSchema<
  TType extends Maybe<Date>,
  TContext = AnyObject,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends Schema<TType, TContext, TDefault, TFlags> {
    format(formatStr: string): DateSchema<TType, TContext, TDefault, TFlags>;
  }
}

export default yup;