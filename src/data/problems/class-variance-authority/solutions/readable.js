function cx(...values) {
  const classes = [];

  function collect(value) {
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

function getVariantKey(value) {
  return typeof value === 'boolean' ? String(value) : value;
}

function isCompoundMatch(compoundVariant, selectedVariants) {
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

export default function cva(base, config = {}) {
  return function resolveClasses(props = {}) {
    const variants = config.variants ?? {};
    const defaultVariants = config.defaultVariants ?? {};
    const compoundVariants = config.compoundVariants ?? [];
    const selectedVariants = {};
    const classes = [base];

    for (const [variantName, variantOptions] of Object.entries(variants)) {
      const propValue = props[variantName];
      const selectedValue = getVariantKey(
        propValue === undefined ? defaultVariants[variantName] : propValue,
      );

      selectedVariants[variantName] = selectedValue;

      if (selectedValue != null) {
        classes.push(variantOptions[selectedValue]);
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
