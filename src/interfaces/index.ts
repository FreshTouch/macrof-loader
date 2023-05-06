import { FunctionComponent, ReactElement } from 'react';

export interface InsertedStyle {
  elements?: (HTMLStyleElement | HTMLLinkElement)[];
  targets?: HTMLElement[];
}

export type NodeElement = HTMLElement | null;

export type Render<P = {}> = (target: NodeElement, props?: P) => () => void;

export type DynamicImport<T = {}> = (
    name: string
) => Promise<{
  default: Render<T>;
}>;

export interface UseAppOptions<T = {}, P = {}> {
  name: string;
  target: HTMLElement;
  loader: DynamicImport;
  attrs?: T;
  props?: P;
}

export type AppWrapper<T> = FunctionComponent<{
  fallback?: ReactElement<any, any> | null;
} & T>;

export type UseMF = <T = {}, P = {}>(
  options: Pick<
    UseAppOptions<T, P>,
    Exclude<keyof UseAppOptions<T, P>, 'target'>
  >
) => AppWrapper<{}>;

export type TLoadMF = { apps: Record<string, () => ReactElement>, providers: (() => void)[] };
