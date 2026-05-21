function classNames(...values) {
  return values.flat(Infinity).filter(Boolean).join(' ');
}

function normalizeVariantValue(value) {
  if (typeof value === 'boolean') {
    return String(value);
  }

  return value;
}

function matchesCompoundVariant(compoundVariant, selectedVariants) {
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

export default function cva(base, config = {}) {
  const {
    compoundVariants = [],
    defaultVariants = {},
    variants = {},
  } = config;

  return function getClassNames(props = {}) {
    const selectedVariants = {};
    const variantClasses = Object.entries(variants).map(
      ([variantName, variantValues]) => {
        const rawValue =
          props[variantName] === undefined
            ? defaultVariants[variantName]
            : props[variantName];
        const selectedValue = normalizeVariantValue(rawValue);
        selectedVariants[variantName] = selectedValue;

        // Unknown or nullish variant values simply do not contribute classes.
        return selectedValue == null ? null : variantValues[selectedValue];
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
