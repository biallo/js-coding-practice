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

function cx(...values: ClassValue[]): string {
  const classes: string[] = [];

  function collect(value: ClassValue) {
    if (!value) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(collect);
    } else {
      classes.push(value);
    }
  }

  values.forEach(collect);
  return classes.join(' ');
}

function getVariantKey(value: VariantValue): VariantValue {
  return typeof value === 'boolean' ? String(value) : value;
}

function isCompoundMatch(
  compoundVariant: CompoundVariant,
  selectedVariants: Record<string, VariantValue>
): boolean {
  for (const [key, value] of Object.entries(compoundVariant)) {
    if (key === 'class' || key === 'className') {
      continue;
    }

    const selectedValue = selectedVariants[key];

    if (Array.isArray(value)) {
      if (!value.includes(selectedValue)) {
        return false;
      }
    } else if (value !== selectedValue) {
      return false;
    }
  }

  return true;
}

export default function cva(base: ClassValue, config: CvaConfig = {}) {
  return function resolveClasses(props: VariantProps = {}): string {
    const variants = config.variants ?? {};
    const defaultVariants = config.defaultVariants ?? {};
    const compoundVariants = config.compoundVariants ?? [];
    const selectedVariants: Record<string, VariantValue> = {};
    const classes: ClassValue[] = [base];

    for (const [variantName, variantOptions] of Object.entries(variants)) {
      const propValue = props[variantName];
      const selectedValue = getVariantKey(
        propValue === undefined ? defaultVariants[variantName] : propValue,
      );

      selectedVariants[variantName] = selectedValue;

      if (selectedValue != null) {
        classes.push(variantOptions[String(selectedValue)]);
      }
    }

    for (const compoundVariant of compoundVariants) {
      if (isCompoundMatch(compoundVariant, selectedVariants)) {
        classes.push(compoundVariant.class, compoundVariant.className);
      }
    }

    classes.push(props.class, props.className);
    return cx(classes);
  };
}
