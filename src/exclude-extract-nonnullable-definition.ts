export {};

type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunction = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
