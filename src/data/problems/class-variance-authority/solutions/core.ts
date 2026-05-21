type ClassValue = string | string[] | false | null | undefined
type VariantValue = boolean | number | string | null | undefined
type VariantConfig = Record<string, Record<string, ClassValue>>
type VariantProps = Record<string, VariantValue> & {
  class?: ClassValue
  className?: ClassValue
}
type CompoundVariant = Record<string, VariantValue | VariantValue[]> & {
  class?: ClassValue
  className?: ClassValue
}
type CvaConfig = {
  compoundVariants?: CompoundVariant[]
  defaultVariants?: Record<string, VariantValue>
  variants?: VariantConfig
}

function classNames(...values: ClassValue[]): string {
  return values.flat(Infinity).filter(Boolean).join(' ');
}

function normalizeVariantValue(value: VariantValue): VariantValue {
  if (typeof value === 'boolean') {
    return String(value);
  }

  return value;
}

function matchesCompoundVariant(
  compoundVariant: CompoundVariant,
  selectedVariants: Record<string, VariantValue>
): boolean {
  return Object.entries(compoundVariant).every(([key, expectedValue]) => {
    if (key === 'class' || key === 'className') {
      return true;
    }

    const selectedValue = selectedVariants[key];
    return Array.isArray(expectedValue)
      ? expectedValue.includes(selectedValue)
      : expectedValue === selectedValue;
  });
}

export default function cva(base: ClassValue, config: CvaConfig = {}) {
  const {
    compoundVariants = [],
    defaultVariants = {},
    variants = {},
  } = config;

  return function getClassNames(props: VariantProps = {}): string {
    const selectedVariants: Record<string, VariantValue> = {};
    const variantClasses = Object.entries(variants).map(
      ([variantName, variantValues]) => {
        const rawValue =
          props[variantName] === undefined
            ? defaultVariants[variantName]
            : props[variantName];
        const selectedValue = normalizeVariantValue(rawValue);
        selectedVariants[variantName] = selectedValue;

        // Unknown or nullish variant values simply do not contribute classes.
        return selectedValue == null ? null : variantValues[String(selectedValue)];
      },
    );

    const compoundClasses = compoundVariants
      .filter((compoundVariant) =>
        matchesCompoundVariant(compoundVariant, selectedVariants),
      )
      .map((compoundVariant) => compoundVariant.class ?? compoundVariant.className);

    return classNames(
      base,
      variantClasses,
      compoundClasses,
      props.class,
      props.className,
    );
  };
}
