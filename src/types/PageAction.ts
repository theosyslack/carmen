import Result from '../labs/Result';
import { Page } from 'puppeteer';

export type PageAction<T, E> = (page: Page) => Promise<Result<T, E>>
export type PageActionCreator<O, T, E> = (options: O) => PageAction<T, E>