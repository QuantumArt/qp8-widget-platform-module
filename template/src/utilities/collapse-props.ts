export type ComponentProps<T extends { [key: string]: any }> = {
  [Prop in keyof T]: NonNullable<T[Prop]>['value'];
};

export function collapseProps<T extends { [key: string]: any }>(source: T): ComponentProps<T> {
  return Object.keys(source).reduce((acc, key) => {
    return {
      ...acc,
      [key]: source[key]?.value,
    };
  }, {} as ComponentProps<T>);
}
